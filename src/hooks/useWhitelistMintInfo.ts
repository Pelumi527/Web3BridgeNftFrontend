import { useCallback } from "react";
import { useDerivedMintInfo, useUserDerivedInfo } from "./useMintInfo";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useBalance, useAccount} from "wagmi";
import { BlossomAddress, USDC } from "../config/constants/address"
import { CHAIN_ID } from "../config/constants/network"
import BlossomNftAbi from "../config/abi/Web3BridgeNft.json"
import BigNumber from "bignumber.js";
import toast from "react-hot-toast";
import TransactionConfirmation from "../components/TransactionConfirmation";

const useWhiteListMinting = (isEth:boolean, amount:string) => {
    const {address} = useAccount()
    const {UsdtWhitelistPrice, ETHWhitelistPrice,whitelistAmount} = useDerivedMintInfo()
    const {investorClaimed, investorAmount, isWhitelisted, whitelistClaimed} = useUserDerivedInfo()
    const BIG_TEN = new BigNumber(10);
    let usdtPrice = String(new BigNumber(amount).times(UsdtWhitelistPrice?.toString()).div(BIG_TEN.pow(6)))
    let value = new BigNumber(amount).times(ETHWhitelistPrice?.toString()).toString()

    const {config:whiteListConfig} = usePrepareContractWrite({
        addressOrName: BlossomAddress[CHAIN_ID],
        contractInterface: BlossomNftAbi,
        functionName:investorAmount?.isGreaterThan(0) ?'InvestorWhiteListMint':'WhitlistMint',
        args: investorAmount?.isGreaterThan(0) ? []:[amount, !isEth],
        overrides:{
            value:investorAmount?.isGreaterThan(0) || !isEth ? '0': value 
        },
        onError(err) {
            console.log(err.message)
        },
    })
   
    const {write, data} = useContractWrite({
        ...whiteListConfig,
       
    })

    const ethBalance = useBalance({
        addressOrName:address
    })

    const tokenBalance = useBalance({
        addressOrName:address,
        token:USDC[CHAIN_ID]
    })


    const onWhitelistMint = useCallback(async()=>{
        if(isWhitelisted == false && investorAmount.isLessThanOrEqualTo(0)){
            toast.error('Account not whitelisted', {
                duration:6000,
                position: "top-right",
            })
            return
        }


        if(investorClaimed || whitelistClaimed){
            toast('Already Claimed Your NFT', {
                duration:6000,
                position: "top-right"
            })
            return
        }

        if(isWhitelisted &&  new BigNumber(amount.toString()).gt(whitelistAmount?.toString())){
            toast.error(`Cannot mint more than ${whitelistAmount?.toString()}`)
            return
        }

        if(investorAmount.isGreaterThan(0) && !new BigNumber(amount).isEqualTo(investorAmount)){
            toast.error(`Must mint ${investorAmount.toString()}`)
            return
        }

        if( (isEth && new BigNumber(ethBalance?.data?.formatted).isLessThan(new BigNumber(value).div(new BigNumber(10).pow(18)))) && isWhitelisted == true ){
            toast.error(`InSufficient balance`, {
                position: "top-right",
                duration:6000     
            })
            return
        }

        if((!isEth && new BigNumber(tokenBalance?.data?.formatted).isLessThan(new BigNumber(usdtPrice))) && isWhitelisted == true ){
            toast.error(`InSufficient ${tokenBalance?.data?.symbol}  Balance `,{
                position: "top-right",
                duration:6000
            })
            return
        }

        return write()

    },[isEth, isWhitelisted, ethBalance, value, usdtPrice, tokenBalance, write, investorAmount, investorClaimed, whitelistClaimed, whitelistAmount, amount])

    const {isSuccess} = useWaitForTransaction({
        hash: data?.hash,
        onSuccess(data) {
            TransactionConfirmation(data.transactionHash)  
        },
    
    })

    return {onWhitelistMint,isSuccess }

};

export default useWhiteListMinting;