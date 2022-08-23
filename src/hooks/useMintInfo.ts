import { useContractInfiniteReads, useAccount, useContractRead } from "wagmi"
import { BlossomAddress } from "../config/constants/address"
import { CHAIN_ID } from "../config/constants/network"
import BlossomNftAbi from "../config/abi/Web3BridgeNft.json"
import { Result } from "ethers/lib/utils"
import { BigNumber } from "ethers"
import { createContext} from "react"

const contractConfig = {
    addressOrName:BlossomAddress[CHAIN_ID],
    contractInterface:BlossomNftAbi
}


export function useDerivedMintInfo ():{
    isWhitelistPeriod:boolean,
    UsdtWhitelistPrice:BigNumber,
    publicUSDTPrice:BigNumber,
    ETHWhitelistPrice:BigNumber,
    TotalSupply:BigNumber,
    TotalMinted:BigNumber,
    ETHPublicPrice:BigNumber
} {
    let isWhitelistPeriod: boolean
    let UsdtWhitelistPrice:BigNumber
    let publicUSDTPrice:BigNumber
    let ETHWhitelistPrice:BigNumber
    let ETHPublicPrice:BigNumber
    let TotalSupply:BigNumber
    let TotalMinted:BigNumber
    const {data} = useContractInfiniteReads({
        cacheKey: 'blossomState',
        contracts: () => [
            {...contractConfig, functionName:'whitelistMintEnabled'},
            {...contractConfig, functionName:'costWhitelist'},
            {...contractConfig, functionName:'costPublicSale'},
            {...contractConfig, functionName:'etherCostpublic'},
            {...contractConfig, functionName:'etherCostWhitelist'},
            {...contractConfig, functionName:'TOTAL_COLLECTION_SUPPLY'},
            {...contractConfig, functionName:'totalSupply'}
        ],
    })

    isWhitelistPeriod = data?.pages[0][0]
    UsdtWhitelistPrice = data?.pages[0][1]
    publicUSDTPrice = data?.pages[0][2]
    ETHPublicPrice = data?.pages[0][3]
    ETHWhitelistPrice = data?.pages[0][4]
    TotalSupply = data?.pages[0][5]
    TotalMinted = data?.pages[0][6]

    return {isWhitelistPeriod, UsdtWhitelistPrice, publicUSDTPrice, ETHPublicPrice, ETHWhitelistPrice, TotalMinted, TotalSupply}
}

export function useUserDerivedInfo():{
    isWhitelisted:boolean,
    investorAmount:BigNumber,
    investorClaimed:boolean
}{
    const {address} = useAccount()
    
   
    const{data} = useContractInfiniteReads({
        cacheKey:'userInfo',
        contracts:() => [
            {...contractConfig, functionName:'checkWhitelist', args:[address, 1]},
            {...contractConfig, functionName:'investorsMint', args:[address]},
            {...contractConfig, functionName:'investorsWhitelistClaimed', args:[address]}
        ]
    })

    let isWhitelisted = data?.pages[0][0]
    let investorAmount = data?.pages[0][1]
    let investorClaimed = data?.pages[0][2]

    return{
        isWhitelisted, investorAmount, investorClaimed
    }
}

export function useTotalMinted(){
    const {data} = useContractRead({
        ...contractConfig,
        functionName:'totalSupply',
        watch:true
    })

    const totalMinted = data.toString()
    return{totalMinted}
}

