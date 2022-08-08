import React, {useState} from 'react'
import Image from 'next/image'

const Home = () => {

  const [readMore, setReadMore] = useState<Boolean>(false)
  const linkName = readMore ? 'Read less' : 'Read more'

  const extraContent = () => {
    return(
      <p className="px-32 text-xl">
        All the above provisions were made in order to achieve the grooming of well grounded developers who are able to contribute to the ecosystem globally and locally.
        Web3bridge has ran six successful cohorts with the seventh one currently on and funded by Polygon and has received over 2000 applications from countries like Nigeria, Kenya, South Africa, Uganda, Ghana, Zimbabwe and have graduated over 150 developers who are actively working in the ecosystem as developers, developer advocates, ambassadors and product managers and has two products in active development.
        As we continue to grow and scale, we are launching an NFT mint event to raise funds for Web3bridge to enable us to train more developers, fund development of more products and build the Web3bridge Campus.
        We have an artwork drawn on canvas which tells the story of Web3bridge; the past, present and the future we foresee.
        We will be minting a thousand pieces of the art and will be distributed as follows

        15% to angel Investors 
        5% reserved for Web3bridge team
        20% for Web3bridge community (Alumni, present students and community members)
        60% public whitelist.
      </p>
    )
  }
  return (
    <section className="w-full mt-20"> 
      <div className="grid w-full h-full grid-cols-2 px-12 bg-pink-100">
        <div className="flex flex-col justify-center px-20">
            <h1 className="mb-8 text-3xl font-bold text-red-500 ">Collecting digital rare arts for future investment scheme</h1>
            <p className="mb-8 text-xl">
            Kranos NFT some text should actually be here, 
            but i am currently out of content at the moment,
            please help me out (sobs)
            </p>
            <div className="flex">
              <button className="bg-[#F02A2A] text-white py-3 px-9 rounded-md hover:text-[#F02A2A] hover:bg-[#FDF3FC] mr-8">Get WhiteListed</button>
              <button className="bg-[#FDF3FC] text-[#F02A2A] py-3 px-9 rounded-md border-2 border-[#F02A2A] hover:bg-[#F02A2A] hover:text-white">Confirm Whitelist</button>
            </div>
        </div>
        <div className="flex justify-center">
          <Image src="/images/nft.svg" width="500px" height="500px" layout="fixed" alt='kranos-nft'/>
          {/* <img src="/images/nft.svg" width="100%" alt="nft_pic" /> */}
        </div>
      </div>
      <div className="w-full my-6 bg-white ">
        <h1 className="text-xl text-[#F02A2A] px-32 font-extrabold">Briefing</h1>
        <p className="px-32 py-5 text-xl">
        Web3bridge was launched as 500NigeriaDevs4ETH following a call made for 1million Ethereum developers. Since 2019, 
        Web3bridge has focused on training Ethereum developers in Africa and have supported these developers to 
        find their firm footing in the development ecosystem. 
        </p>
        <p className="px-32 py-5 text-xl"> In a bid to help Africans coming into development overcome identified numbers of barriers, Web3bridge offers</p>
        <ul className="px-32 mb-5 text-xl list-disc">
          <li>the 16 weeks long training entirely free for all participants</li>
          <li>provide a physical facility in Lagos where developers are housed and catered for for free</li>
          <li>Ensures that developers has access to 24/7 electricity and internet </li>
        </ul>
        <div>{readMore && extraContent()}</div>
        <div className="flex justify-end px-32 font-extrabold"><a className="text-[#F02A2A] text-xl cursor-pointer" onClick={() => setReadMore(!readMore)}>{linkName}</a></div>
      </div>
      <div className="px-32 py-10 bg-pink-100">
        <h1 className="text-xl text-[#F02A2A] font-extrabold">Roadmap</h1>
        <div className="grid grid-cols-5 gap-20 mt-8 ">
          <p>
            Contracting Web3bridge campus building project in Lagos Nigeria
            to allow for intake of two hundred (200) developers 
          </p>
          <p>
            Initiating a robust marketing team 
          </p>
          <p>
            Devcon conference speaking about the potential of African developers
          </p>
          <p>
            Safekeep community testnet launch
          </p>
          <p>
            Opening cohort VIII
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-6">
          <div className="flex justify-between col-span-2">
            <Image  src="/images/Group 4.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 5.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 6.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 7.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 8.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 9.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 10.svg" width="56px" height="56px" alt=''/>
          </div>
          <div className="flex justify-evenly"> 
            <Image  src="/images/Group 11.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 12.svg" width="56px" height="56px" alt=''/>
          </div>
        </div>
        <div className="grid grid-cols-3">
            <div className="flex justify-between col-span-2">
              <p className="mt-10 px-15">
                  Graduating over 400 developers (web2 & web3) from cohort VII
              </p>
              <p className="my-10 px-15">
              Opening registration for cohort VIII
              </p>
              <p className="my-10 px-15">  
              Chainedthrift mainnet launch 
              </p>
          </div>
          <div className="flex justify-center">
            <p className="my-10">
            Finishing the first phase of building project
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col items-center justify-center col-span-2 py-10 border-r-4 border-b-4 border-l-4 border-[#F02A2A] border-dashed">
                <h1>Q4</h1>
                <p>2022</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 border-r-4 border-b-4 border-l-4 border-[#F02A2A] border-dashed">
                <h1>Q1</h1>
                <p>2023</p>
            </div>
        </div>
      </div>
      <div className="px-32 py-10">
        <h1 className="text-xl text-[#F02A2A] font-extrabold">Utility</h1>
        <div className="grid grid-cols-4 mt-8">
          <div className="px-10 py-10 bg-[#281F950D] rounded-md">
            <h1 className="text-xl text-center text-[#0F8552] font-extrabold">100%</h1>
            <p>
            Access to Web3bridge internal news discord channel (development and product update)
            </p>
          </div>
          <div className="px-10 py-10 rounded-md bg-[#91C1EE1A]">
            <h1 className="text-center text-xl font-extrabold text-[#172BDD]">5%</h1>
            <p>
            Access to Web3bridge internal news discord channel (development and product update)
            </p>
          </div>
          <div className="bg-[#f2f2f2] px-10 py-10 rounded-md">
            <h1 className="text-center text-xl font-extrabold text-[#EC2AF0]">10%</h1>
            <p>
            Access to Web3bridge internal news discord channel (development and product update)
            </p>
          </div>
          <div className="bg-[#e9f2f2] px-10 py-10 rounded-md">
            <h1 className="text-center text-xl text-[#1DCAD4] font-extrabold">10%</h1>
            <p>
            Access to Web3bridge internal news discord channel (development and product update)
            </p>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Home