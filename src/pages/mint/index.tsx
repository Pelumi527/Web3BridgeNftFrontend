import React, {useState, useEffect, useCallback} from "react";
import { BlossomAddress} from "../../config/constants/address";
import { useAccount} from "wagmi"
import { CHAIN_ID } from "../../config/constants/network";
import { useApproveCallback, ApprovalState } from "../../hooks/useApproveCallback";
import ConnectButton from "../../components/ConnectButton";
import { useDerivedMintInfo, useTotalMinted, useUserDerivedInfo} from "../../hooks/useMintInfo";
import useWhiteListMinting from "../../hooks/useWhitelistMintInfo";
import usePublicMint from "../../hooks/usePublicMint";
import Image from "next/image";
import BigNumber from "bignumber.js";


const Mint = () => {
  const [mintAmount, setMintAmount] = useState<number>(1)
  const [isETH, setIsETH] = useState<boolean>(true)
  const {isDisconnected } = useAccount();
  const {
    isWhitelistPeriod,
    ETHPublicPrice, 
    ETHWhitelistPrice, 
    TotalSupply, 
    UsdtWhitelistPrice,
    publicUSDTPrice, 
    whitelistAmount} = useDerivedMintInfo()
    const {onPublicMint} = usePublicMint(isETH, mintAmount.toString())
    const {onWhitelistMint} = useWhiteListMinting(isETH, mintAmount.toString())
    const {isWhitelisted, investorAmount } = useUserDerivedInfo()
    const {totalMinted} = useTotalMinted()
    const BIG_TEN = new BigNumber(10);
    const ETHpublicMintAmount = new BigNumber(new BigNumber(mintAmount).times(ETHPublicPrice?.toString())).div(BIG_TEN.pow(18))
    const usdcpublicMintAmount = String(new BigNumber(mintAmount).times(publicUSDTPrice?.toString()).div(BIG_TEN.pow(6)))
    const ethWhitelistMintAmount = new BigNumber(new BigNumber(mintAmount).times(ETHWhitelistPrice?.toString())).div(new BigNumber(10).pow(18))
    const usdcWhitelistMintAmount = String(new BigNumber(mintAmount).times(UsdtWhitelistPrice?.toString()).div(BIG_TEN.pow(6)))
    const [approvalState, approve, pendingApproval] = useApproveCallback((isWhitelistPeriod ? usdcWhitelistMintAmount.toString(): usdcpublicMintAmount.toString()) , BlossomAddress[CHAIN_ID])

    
    return (
    <>
      <section
        id="mint-nft"
        className="bg-[#fff] mt-32 md:p-4 lg:p-4 mb-12 container rounded-lg mx-auto"
      >
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 md:p-6 lg:p-6">
          <div className="mb-12 md:mb-0 lg:mb-0 md:bg-[#FDF3FC] lg:bg-[#FDF3FC] px-4 py-8 container md:mx-auto md:flex md:flex-col ">
            <h1 className="mb-8 text-2xl font-bold text-center text-red-500 md:text-4xl">Blossoming Web3bridge NFT</h1>
            <p className="mb-4 text-xl">
              
            The minting is in two phases, we have the whitelist minting where our Alumni, present students and community members will be allowed to mint at 0.17 ETH or 300 USDC. 
            </p>
            <p className="mb-4 text-xl">
            We then have the public minting where the public will allowed to mint at 0.27 ETH or 500 USDC
            </p>
            <p className="mb-4 text-xl">
            The NFT has a placeholder image which will be revealed at the end of the whitelist mint.
            </p>
            <p className="mb-4 text-xl">
            Minting Blossoming Web3bridge supports Web3bridge’s vision and growth.
            </p>
            <p className="mb-4 text-xl">
            Click the mint button and be a part of a blossoming community
            </p>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-[#242424] opacity-50">Total Supply</p>
              {totalMinted && TotalSupply ? <span className="text-lg font-bold">{`${totalMinted}/${TotalSupply?.toString()}`}</span> :
              <div className="w-20 h-5 rounded bg-slate-200 animate-pulse"></div>}
            </div>
            <div className="flex justify-center my-6">
              <Image src="/images/nft.svg" width="400px" height="400px" layout="fixed" alt='kranos-nft'/>
            </div>

            <div className="flex justify-between w-2/3 mx-auto mb-8">
              <button
                className="w-1/4  bg-[#C4C4C4] btn-common rounded-sm"
                disabled={!mintAmount}
                onClick={() =>{
                  setMintAmount(mintAmount - 1)
                }}
              >
                -
              </button>
              {
                isDisconnected ? <ConnectButton /> :
                  (
                    (approvalState === ApprovalState.NOT_APPROVED ||
                      approvalState === ApprovalState.PENDING ) && !isETH ?
                    <button className="bg-[#F02A2A]  font-mormal  text-white w-1/3 mint rounded-sm"
                        onClick={approve}
                        disabled={pendingApproval}
                      >
                      {approvalState === ApprovalState.PENDING ? 'Approving': 'Approve'}
                    </button>:
                    <button className="bg-[#F02A2A]  font-mormal  text-white w-1/3 mint rounded-sm"
                      onClick={() => {
                        isWhitelistPeriod ? onWhitelistMint() : onPublicMint()
                      }}
                    >
                      Mint
                  </button>
                  )
              }
              <button className="w-1/4  bg-[#C4C4C4] btn-common rounded-sm"
                onClick={() => {
                  setMintAmount(mintAmount + 1)
                }
              }
              >+</button>
            </div>
            <div className="flex items-center justify-center w-5/6 p-4 mx-auto md:w-2/3 lg:w-2/3">
            {isWhitelistPeriod && isWhitelisted && new BigNumber(mintAmount.toString()).gt(whitelistAmount?.toString()) ? <span className="text-center text-red-500">Cannot mint more than {whitelistAmount?.toString()} </span>:<span></span>}
            {isWhitelistPeriod && investorAmount.isGreaterThan(0) && new BigNumber(mintAmount.toString()).gt(investorAmount) ? <span className="text-center text-red-500">{`Cannot mint more than ${investorAmount.toString()}`}</span> :<span></span> }
            </div>
            <div className=" bg-[#FDF3FC] flex justify-between items-center p-4 w-5/6 md:w-2/3 lg:w-2/3 mx-auto">
              {isWhitelistPeriod ? 
              <h5 className="mint-price">
                Price:
                {ETHWhitelistPrice && usdcWhitelistMintAmount ?  <span className="font-bold mint-sub">{isETH ? `${ethWhitelistMintAmount.toFormat(2)} ETH` : `${usdcWhitelistMintAmount} USDC`}</span>:
                 <div className="w-20 h-10 animate-pulse bg-slate-200"></div>}
              </h5>:
              <h5 className="mint-price">
                Price: 
               {ETHpublicMintAmount && usdcpublicMintAmount ?  <span className="font-bold mint-sub">{isETH ?`${ETHpublicMintAmount.toFormat(2)} ETH`: `${usdcpublicMintAmount} USDC`}</span> :
               <div className="w-20 h-10 animate-pulse bg-slate-200"></div>}
              </h5>}
              <p className="font-bold mint-count">{mintAmount}</p>
            </div>
            <div className="flex items-center justify-between w-5/6 p-4 mx-auto md:w-2/3 lg:w-2/3">
              <p className="text-red-400">*Choose method of payment:</p>
              <div>
                <button className={isETH ? "px-4 py-2 bg-[#F02A2A] text-white":"px-4 py-2 bg-[#838181] text-white"}
                  onClick={() => {
                    setIsETH(true)
                  }}
                >ETH</button>
                <button className={isETH ? "px-4 py-2 bg-[#6f6e6e] text-white":"px-4 py-2 bg-[#F02A2A] text-white"}
                  onClick={() => {
                    setIsETH(false)
                  }}
                >USDC</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;
