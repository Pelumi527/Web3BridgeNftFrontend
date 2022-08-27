import { chainId} from "wagmi"


interface ADDRESS {
    [key :number]: string,
}


export const BlossomAddress:ADDRESS = {
    [chainId.rinkeby] : '0x237F59667d93d58698ca1576C0CC7B64f3A8c53a',
    [chainId.mainnet] : "",
    [chainId.goerli]  : '0x69ee093cBd7502D4cCeC567dc67BF22C71Ff0B0c' 
}

export const USDC: ADDRESS = {
    [chainId.rinkeby]:'0x786F839bE025b81e3D8d3514132D3F3c5bC2e382',
    [chainId.goerli] :'0x192C9490691a138E735182BBC643bcd928c7A9be'
}
