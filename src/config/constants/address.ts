import { chainId} from "wagmi"


interface ADDRESS {
    [key :number]: string,
}


export const BlossomAddress:ADDRESS = {
    [chainId.rinkeby] : '0x237F59667d93d58698ca1576C0CC7B64f3A8c53a',
    [chainId.mainnet] : "0x1bFE77b0ADaEf4b0B4B90a640dC976aB79a67c97",
    [chainId.goerli]  : '0xe39f44ec8498f15E07341Ec7B3128809D9701e85' 
}

export const USDC: ADDRESS = {
    [chainId.rinkeby]:'0x786F839bE025b81e3D8d3514132D3F3c5bC2e382',
    [chainId.goerli] :'0x192C9490691a138E735182BBC643bcd928c7A9be',
    [chainId.mainnet]:'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
}
