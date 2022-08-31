
import { useCallback} from "react"
import { BlossomAddress, USDC } from "../config/constants/address"
import { CHAIN_ID } from "../config/constants/network"
import BlossomNftAbi from "../config/abi/Web3BridgeNft.json"
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useBalance, useAccount ,useContractRead} from "wagmi"
import { useDerivedMintInfo } from "./useMintInfo"
import BigNumber from "bignumber.js"
import toast from "react-hot-toast"
import TransactionConfirmation from "../components/TransactionConfirmation"


const usePublicMint = (isEth:boolean, amount:string) => {
    const {address} = useAccount()
    const {ETHPublicPrice, publicUSDTPrice} = useDerivedMintInfo()
    const BIG_TEN = new BigNumber(10);
    let usdtPrice = String(new BigNumber(amount).times(publicUSDTPrice?.toString()).div(BIG_TEN.pow(6)))
    let value = new BigNumber(amount).times(ETHPublicPrice?.toString()).toString()
    
    const ethBalance = useBalance({
        addressOrName:address
    })

    const tokenBalance = useBalance({
        addressOrName:address,
        token:USDC[CHAIN_ID]
    })

    const {config} = usePrepareContractWrite({
        addressOrName: BlossomAddress[CHAIN_ID],
        contractInterface:BlossomNftAbi,
        functionName:'publicMint',
        args:[amount,!isEth],
        overrides:{
            value: isEth ? value : "0"
        },
        onError(error){
            console.log(error.message)
        },
        chainId: CHAIN_ID,
    })
    const {data, write} = useContractWrite({
        ...config,
        onError(error){
            toast.error(error.message)
        },
        onSuccess(){
            toast.success('Minting')
        },
        chainId: CHAIN_ID
        
    })


    const onPublicMint = useCallback(async ():Promise<void> => {
        if(new BigNumber(amount).isEqualTo(0)){
            toast.error(`Input a valid mint amount`)
            return
        }
        if(isEth && new BigNumber(ethBalance.data.formatted).isLessThan(new BigNumber(value).div(new BigNumber(10).pow(18))) ){
            toast.error('InSufficient Balance',{
                position: "top-right",
                duration:  6000
            })
            return
        }

        if(!isEth && new BigNumber(tokenBalance.data.formatted).isLessThan(new BigNumber(usdtPrice))){
            toast.error(`ImSufficient ${tokenBalance?.data?.symbol}  Balance `,{
                position: "top-right",
                duration:4000
            })
            return
        }

        return write()
    },[isEth, value, ethBalance, tokenBalance, usdtPrice, write, amount])

    const {isSuccess, isError, isLoading} = useWaitForTransaction({
        hash: data?.hash,
        onSuccess(data){
            TransactionConfirmation(data.transactionHash)
        },
    })
    
    return {onPublicMint, isSuccess ,isError, data} 
}

export default usePublicMint