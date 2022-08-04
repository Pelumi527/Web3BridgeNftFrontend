import React from "react";

const mint = () => {
  return (
    <>
      {/* <section className="h-screen"> Mintter</section> */}
      <section
        id="mint-nft"
        className="bg-[#fff] mt-32 container rounded-lg mx-auto"
      >
        <div className="p-6  grid grid-cols-2">
          <div className="bg-[#FDF3FC] p-4 container mx-auto flex items-center ">
            <p className="mint-text">
              Kranos NFT some text should actually be here, but i am currently
              out of content at the moment, please help me out (sobs) some text
              should actually be here, but i am currently out of content at the
              moment, please help me out (sobs) some text should actually be
              here, but i am currently out of content at the moment, please help
              me out (sobs) some text should actually be here
            </p>
          </div>

          <div>
            <div className="text-center">
              <p className="text-[#242424] opacity-50">Total Supply</p>
              <span className="font-bold">45/100</span>
            </div>
            <div className="flex justify-center">
              <img src="/images/nft.svg" alt="nft_pic" />
            </div>
            <div className="flex  w-2/3 mx-auto mb-8 justify-between">
              <button
                className="bg-red-400 w-1/4  bg-[#C4C4C4] btn-common rounded-sm"
              >
                -
              </button>
              <button className="bg-[#F02A2A]  font-mormal  text-white w-1/3 mint rounded-sm">
                Mint
              </button>
              <button className="bg-red-400 w-1/4  bg-[#C4C4C4] btn-common rounded-sm">+</button>
            </div>
            <div className=" bg-[#FDF3FC] flex justify-between items-center p-4 w-2/3 mx-auto">
              <h5 className="mint-price">
                Price: <span className="font-bold mint-sub">$700</span>
              </h5>
              <p className="font-bold mint-count">2</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default mint;
