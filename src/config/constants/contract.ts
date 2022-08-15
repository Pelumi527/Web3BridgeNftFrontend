import { chainId} from "wagmi"


interface ADDRESS {
    [key :number]: string,
}


export const NFTCONTRACT:ADDRESS = {
    [chainId.rinkeby] : '0x237F59667d93d58698ca1576C0CC7B64f3A8c53a',
    [chainId.mainnet] : ""
}

export const USDC: ADDRESS = {
    [chainId.rinkeby]:'0x786F839bE025b81e3D8d3514132D3F3c5bC2e382'
}
