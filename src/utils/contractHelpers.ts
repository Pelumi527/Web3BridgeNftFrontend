import { Provider, JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { Signer } from "@ethersproject/abstract-signer";
import { Contract } from "@ethersproject/contracts";
import BlossomNftAbi from "../config/abi/Web3BridgeNft.json"
import { CHAIN_ID } from "../config/constants/network";
import { BlossomAddress, USDC } from "../config/constants/address";
import { erc20ABI } from "wagmi";


export const simpleRpcProvider = new StaticJsonRpcProvider('https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')


export const getContract = (abi:any, address:string, signer?: Signer | Provider) => {
    const signerOrProvider = signer ?? simpleRpcProvider
    return new Contract(address, abi, signerOrProvider)
}

export const getBlossomContract = (signer?: Signer | Provider) => {
    return getContract(BlossomNftAbi, BlossomAddress[CHAIN_ID], signer)
}

export const getErc20Contract = (signer?: Signer | Provider) => {
    return getContract(erc20ABI, USDC[CHAIN_ID], signer )

}