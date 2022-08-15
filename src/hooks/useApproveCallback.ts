import { useCallback, useMemo } from "react"
import { useAccount, useContractRead, erc20ABI, useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi"
import { NFTCONTRACT, USDC } from "../config/constants/contract";
import { CHAIN_ID } from "../config/constants/network";
import { toast } from "react-hot-toast";
import { MaxUint256 } from "@ethersproject/constants";
import {parseUnits, parseEther} from "ethers/lib/utils";



export enum ApprovalState {
    UNKNOWN,
    NOT_APPROVED,
    PENDING,
    APPROVED,
}

export function useApproveCallback(
    amountToApprove:string,
    spender:string
):[ApprovalState, () => Promise<void>]{

    const { address } = useAccount();
   
    const {config} = usePrepareContractWrite({
        addressOrName:USDC[CHAIN_ID],
        contractInterface: erc20ABI,
        functionName: 'approve',
        args:[spender,MaxUint256],
    })
    
    const {write, isLoading, isSuccess, isError, data:result} = useContractWrite({
        ...config, 
        onSuccess() {
            toast.success('Approving', {
                duration: 4000
            })
        },
        onError(error) {
            toast.error(`Approval Failed: ${error.message}`)
        }
    })

    const waitForTransaction = useWaitForTransaction({
        confirmations: 1,
        hash: result?.hash,
        onSuccess(){
            toast.success('Approved')
        }
    })

    console.log(waitForTransaction, "transaction")
   
    const {data} = useContractRead({
        addressOrName: USDC[CHAIN_ID],
        contractInterface: erc20ABI,
        functionName:'allowance',
        args:[address, NFTCONTRACT[CHAIN_ID]]
    })
    
    const currentAllowance = data?.toString()
    // console.log(parseUnits(currentAllowance, 6).lt(parseUnits(amountToApprove, 6)), amountToApprove, currentAllowance, "allowance")

    const approvalState:ApprovalState = useMemo(() => {
        if(!amountToApprove || !spender) return ApprovalState.UNKNOWN
        // we might not have enough data to know whether or not we need to approve
        if (!currentAllowance) return ApprovalState.UNKNOWN

        return parseEther(currentAllowance).lt(parseEther(amountToApprove)) ?
        isLoading ? ApprovalState.PENDING : ApprovalState.NOT_APPROVED 
        : ApprovalState.APPROVED
    }, [amountToApprove, spender, currentAllowance, isLoading])

    

    const approve = useCallback(async ():Promise<void> => {
        if(approvalState !== ApprovalState.NOT_APPROVED){
            toast.error('Approve was called unnececessarly')
            console.error('approve was called unnecessarily')
            return
        }

        if(!amountToApprove) {
            toast.error('Missing amount to approve')
            console.error('missing amount to approve')
            return
        }

        if(!spender){
            toast.error('No spender')
            console.error('no spender')
            return
        }
        return write()
    },[approvalState,spender, write, amountToApprove])
   
   
    
    return [approvalState, approve]
} 