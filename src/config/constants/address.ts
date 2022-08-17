import { chainId} from "wagmi"


interface ADDRESS {
    [key :number]: string,
}


export const BlossomAddress:ADDRESS = {
    [chainId.rinkeby] : '0x237F59667d93d58698ca1576C0CC7B64f3A8c53a',
    [chainId.mainnet] : "",
    [chainId.goerli]  : '0xA1DE5390c124B0445AA901367eca5c77521108C2' 
}

export const USDC: ADDRESS = {
    [chainId.rinkeby]:'0x786F839bE025b81e3D8d3514132D3F3c5bC2e382',
    [chainId.goerli] :'0x192C9490691a138E735182BBC643bcd928c7A9be'
}
