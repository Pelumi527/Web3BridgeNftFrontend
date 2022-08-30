import { useContractInfiniteReads, useAccount, useContractRead } from "wagmi"
import { BlossomAddress } from "../config/constants/address"
import { CHAIN_ID } from "../config/constants/network"
import BlossomNftAbi from "../config/abi/Web3BridgeNft.json"
import BigNumber from "bignumber.js"

const contractConfig = {
    addressOrName:BlossomAddress[CHAIN_ID],
    contractInterface:BlossomNftAbi
}


export function useDerivedMintInfo ():{
    isWhitelistPeriod:boolean,
    UsdtWhitelistPrice:BigNumber,
    publicUSDTPrice:BigNumber,
    ETHWhitelistPrice:String
    TotalSupply:BigNumber,
    TotalMinted:BigNumber,
    ETHPublicPrice:String
    whitelistAmount:BigNumber
} {
    let isWhitelistPeriod: boolean
    let UsdtWhitelistPrice:BigNumber
    let publicUSDTPrice:BigNumber
    let ETHWhitelistPrice:String
    let ETHPublicPrice:String
    let TotalSupply:BigNumber
    let TotalMinted:BigNumber
    let whitelistAmount:BigNumber
    const {data} = useContractInfiniteReads({
        cacheKey: 'blossomState2',
        contracts: () => [
            {...contractConfig, functionName:'whitelistMintEnabled'},
            {...contractConfig, functionName:'costWhitelist'},
            {...contractConfig, functionName:'costPublicSale'},
            {...contractConfig, functionName:'TOTAL_COLLECTION_SUPPLY'},
            {...contractConfig, functionName:'whitelistAmount'}
        ],
    })

    const {data:publicEth} = useContractRead({
        ...contractConfig,
        functionName:'calPublicPriceEth',
        watch:true
    })

    const {data:whitelistEth} = useContractRead({
        ...contractConfig,
        functionName:'calWhitelistPriceEth',
        watch:true
    })

    


    isWhitelistPeriod = data?.pages[0][0]
    UsdtWhitelistPrice = data?.pages[0][1]
    publicUSDTPrice = data?.pages[0][2]
    whitelistAmount = data?.pages[0][4]
    TotalSupply = data?.pages[0][3]
    ETHPublicPrice = publicEth?.toString()
    ETHWhitelistPrice = whitelistEth?.toString()

    return {isWhitelistPeriod, UsdtWhitelistPrice, publicUSDTPrice, ETHPublicPrice, ETHWhitelistPrice, TotalMinted, TotalSupply, whitelistAmount}
}

export function useUserDerivedInfo():{
    isWhitelisted:boolean,
    investorAmount:BigNumber
    investorClaimed:boolean
    whitelistClaimed:boolean
}{

    const {address} = useAccount()


    const {data:whiteListStatus} = useContractRead({
        ...contractConfig,
        functionName:'whitelisted',
        args: [address],
        watch:true
    })

    const {data:investorsClaimStatus} = useContractRead({
        ...contractConfig,
        functionName:'investorsWhitelistClaimed',
        args:[address],
        watch:true
    })

    const {data:whitelistClaimStatus} = useContractRead({
        ...contractConfig,
        functionName:'whitelistClaimed',
        args:[address],
        watch:true
    })

    const {data:investorMintAmount} = useContractRead({
        ...contractConfig,
        functionName:'investorsMint',
        args:[address],
        watch:true
    })
    
   
  

    

    let isWhitelisted = Boolean(whiteListStatus)
    let investorAmount = new BigNumber(investorMintAmount?.toString())
    let investorClaimed = Boolean(investorsClaimStatus)
    let whitelistClaimed = Boolean(whitelistClaimStatus)
    

    

    return{
        isWhitelisted, investorAmount, investorClaimed, whitelistClaimed
    }
}

export function useTotalMinted(){
    const {data} = useContractRead({
        ...contractConfig,
        functionName:'totalSupply',
        watch:true
    })

    const totalMinted = data?.toString()
    return{totalMinted}
}

