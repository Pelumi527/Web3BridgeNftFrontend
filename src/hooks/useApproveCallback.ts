import { useCallback, useMemo, useEffect } from "react"
import { useAccount, useContractRead, erc20ABI, useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi"
import { BlossomAddress, USDC } from "../config/constants/address";
import { CHAIN_ID } from "../config/constants/network";
import { toast } from "react-hot-toast";
import { MaxUint256 } from "@ethersproject/constants";
import { parseEther} from "ethers/lib/utils";
import { BIG_TEN } from "../utils/helper";
import BigNumber from "bignumber.js";
import { getErc20Contract} from "../utils/contractHelpers";


export enum ApprovalState {
    UNKNOWN,
    NOT_APPROVED,
    PENDING,
    APPROVED,
}

export function useApproveCallback(
    amountToApprove:string,
    spender:string
):[ApprovalState, () => Promise<void>, boolean]{

    const { address } = useAccount();
   
    const {config} = usePrepareContractWrite({
        addressOrName:USDC[CHAIN_ID],
        contractInterface: erc20ABI,
        functionName: 'approve',
        args:[spender,MaxUint256],
    })
    
    const {write , data:result} = useContractWrite({
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

    const {isLoading }= useWaitForTransaction({
        confirmations: 1,
        hash: result?.hash,
        onSuccess(){
            toast.success('Approved')
        },
    })

    
   
    const {data} = useContractRead({
        addressOrName: USDC[CHAIN_ID],
        contractInterface: erc20ABI,
        functionName:'allowance',
        args:[address, BlossomAddress[CHAIN_ID]],
        watch:true
    })
    
    const currentAllowance = data?.toString()


    const approvalState:ApprovalState = useMemo(() => {
        if(!amountToApprove || !spender) return ApprovalState.UNKNOWN
        // we might not have enough data to know whether or not we need to approve
        if (!currentAllowance) return ApprovalState.UNKNOWN

        return new BigNumber(currentAllowance).times(BIG_TEN.pow(6)).isLessThan(new BigNumber(amountToApprove).times(BIG_TEN.pow(6))) ?
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
   
    return [approvalState, approve, isLoading]
} 