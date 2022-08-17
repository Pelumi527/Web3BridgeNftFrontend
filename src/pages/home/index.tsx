import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {

  const [readMore, setReadMore] = useState<Boolean>(false)
  const linkName = readMore ? 'Read less' : 'Read more'

  const extraContent = () => {
    return(
      <div className="px-8 md:px-32 lg:px-32">
        <p className="text-xl ">
          All the above provisions were made in order to achieve the grooming of well grounded developers who are able to contribute to the ecosystem globally and locally.
          Web3bridge has ran six successful cohorts with the seventh one currently on and funded by Polygon and has received over 2000 applications from countries like Nigeria, Kenya, South Africa, Uganda, Ghana, Zimbabwe and have graduated over 150 developers who are actively working in the ecosystem as developers, developer advocates, ambassadors and product managers and has two products in active development.
          <p>As we continue to grow and scale, we are launching an NFT mint event to raise funds for Web3bridge to enable us to train more developers, fund development of more products and build the Web3bridge Campus.</p>
          We have an artwork drawn on canvas which tells the story of Web3bridge; the past, present and the future we foresee.
          We will be minting a thousand pieces of the art and will be distributed as follows : 
        </p>
        <ul className="mt-8 text-xl list-disc">
          <li><p>15% to angel Investors</p> </li>
          <li><p>5% reserved for Web3bridge team</p></li>
          <li> <p>20% for Web3bridge community (Alumni, present students and community members)</p></li>
          <li> <p>60% public whitelist.</p></li>
        </ul>
    </div>
    )
  }
  return (
    <section className="w-full bg-[#FDF3FC] mt-20 md:mt-20 lg:pt-20 "> 
      <div className="md:grid lg:grid w-full h-full pt-20 md:pt-20 lg:pt-0 md:grid-cols-1 lg:grid-cols-3 px-6 md:px-12 lg:px-12 bg-[#FDF3FC]">
        <div className="flex flex-col items-center justify-center col-span-2 mb-12 md:mb-0 lg:mb-0 md:px-20 lg:px-15">
            <h1 className="mb-8 text-3xl font-bold text-center text-red-500 md:text-5xl">Blossoming Web3bridge NFT</h1>
            <p className="mb-8 text-xl">
                
              Blossoming Web3bridge is a 4 by 5 feet art drawn on canvass. The art tells the story of 
              Web3bridge grooming developers from Africa and are all over the world literally or remotely 
              contributing to the growth of the blockchain ecosystem. 

            </p>
            <p className='mb-8 text-xl'>
              The art’s major components include the globe, with Africa very pronounced, a growing and 
              fruit-bearing fig tree, and fruits on the tree shown as Web3bridge logo dropping across the globe. Each dropping 
              fruit represents Web3bridge Alumnis that are already in the global ecosystem contributing while the
              smaller fruits that are yet to form into Web3bridge logo symbolizes devs in training and those that 
              are yet to come out of the program.
            </p>
            <div className="flex">

              <button className="bg-[#F02A2A] text-white py-1 px-3 md:py-3 md:px-9 lg:py-3 lg:px-9 rounded-md hover:text-[#F02A2A] hover:bg-[#FDF3FC] mr-8 hover:border-[#F02A2A] hover:border-2"><a href="https://forms.gle/Ym289phXU6N98Kay6" target="_blank" rel="noopener noreferrer" >Get WhiteListed</a></button>
              <button disabled className="bg-[#FDF3FC] text-[#F02A2A] py-1 px-3 md:py-3 md:px-9 lg:py-3 lg:px-9 rounded-md border-2 border-[#F02A2A] hover:bg-[#F02A2A] hover:text-white cursor-not-allowed">Confirm Whitelist</button>
            </div>
        </div>
        <div className="hidden lg:block md:hidden">
          <Image src="/images/nft.svg" width="450px" height="450px" layout="responsive" alt='kranos-nft'/>
          {/* <img src="/images/nft.svg" width="100%" alt="nft_pic" /> */}
        </div>
        <div className="flex items-end justify-between p-4 lg:hidden md:p-0 lg:p-0">
          <Image src="/images/nft.svg" width="450px" height="500px" layout="fixed" alt='kranos-nft'/>
          <Image src="/images/nft.svg" width="80px" height="80px" layout="fixed" alt='kranos-nft'/>
        </div>
      </div>
      <div className="w-full md:my-6 lg:my-6 bg-[#FDF3FC] md:bg-white lg:bg-white lg:py-5">
        <h1 className="text-xl text-[#F02A2A] px-8 md:px-32 lg:px-32 font-extrabold">Briefing</h1>
        <p className="px-8 py-2 text-lg md:px-32 md:py-5 lg:px-32 lg:py-5">
        Web3bridge was launched as 500NigeriaDevs4ETH following a call made for 1million Ethereum developers. Since 2019, 
        Web3bridge has focused on training Ethereum developers in Africa and have supported these developers to 
        find their firm footing in the development ecosystem. 
        </p>
        <p className="px-8 py-2 text-xl md:px-32 md:py-5 lg:px-32 lg:py-5"> In a bid to help Africans coming into development overcome identified numbers of barriers, Web3bridge offers</p>
        <ul className="px-8 mb-5 text-lg list-disc md:px-32 lg:px-32">
          <li><p>the 16 weeks long training entirely free for all participants</p></li>
          <li><p>provide a physical facility in Lagos where developers are housed and catered for for free</p></li>
          <li> <p>Ensures that developers has access to 24/7 electricity and internet</p></li>
        </ul>
        <div>{readMore && extraContent()}</div>
        <div className="flex justify-end px-32 font-extrabold"><a className="text-[#F02A2A] text-xl cursor-pointer" onClick={() => setReadMore(!readMore)}>{linkName}</a></div>
      </div>
      
      <div className="px-6 py-2 md:px-32 md:py-5 lg:px-32 lg:py-5 bg-[#FDF3FC]">
        <h1 className="text-xl text-[#F02A2A] font-extrabold">Roadmap</h1>
        <div className='hidden md:block lg:block'>
          <Image src="/images/roadmap.svg" alt="roadmap"  width="100%" height="50" layout="responsive" objectFit="contain"/>
        </div>
        <div className='block md:hidden lg:hidden'>
          <Image src="/images/mobile.svg" alt="roadmap"  width="100%" height="50" layout="responsive" objectFit="contain"/>
        </div>


        {/* <div className="grid grid-cols-5 gap-20 mt-8 ">
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
        </div> */}
        {/* <div className="grid grid-cols-3 gap-10 mt-6">
          <div className="flex justify-between col-span-2">
            <Image  src="/images/Group 4.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 5.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 6.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 7.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 8.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 9.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 10.svg" width="56px" height="56px" alt=''/>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-evenly"> 
            <Image  src="/images/Group 11.svg" width="56px" height="56px" alt=''/>
            <Image  src="/images/Group 12.svg" width="56px" height="56px" alt=''/>
          </div>
        </div> */}
        {/* <div className="grid grid-cols-3">
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
        </div> */}
        {/* <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col items-center justify-center col-span-2 py-10 border-r-4 border-b-4 border-l-4 border-[#F02A2A] border-dashed">
                <h1>Q4</h1>
                <p>2022</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 border-t-4 md:border-t-0 border-r-4 border-b-4 md:border-l-4 border-[#F02A2A] border-dashed">
                <h1>Q1</h1>
                <p>2023</p>
            </div>
        </div> */}
      </div>

      <div className="px-8 py-4 md:px-32 md:py-10 bg-[#FDF3FC] md:bg-white lg:bg-white lg:px-32 lg:py-10">
        <h1 className="text-xl text-[#F02A2A]  font-extrabold">Utility</h1>
        <div className="grid grid-cols-1 gap-4 md-gap-0 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:mt-8">
          <div className="px-4 py-4 md:px-10 md:py-10 lg:px-10 lg:py-10 bg-[#281F950D] rounded-md">
            <h1 className="text-xl text-center text-[#0F8552] font-extrabold">100%</h1>
            <p>
            Access to Web3bridge internal news discord channel (development and product update)
            </p>
          </div>
          <div className="px-4 py-4 md:px-10 md:py-10 lg:px-10 lg:py-10 rounded-md bg-[#91C1EE1A]">
            <h1 className="text-center text-xl font-extrabold text-[#172BDD]">5%</h1>
            <p>
            Access to 5% token/equity share of all Web3bridge products/projects
            </p>
          </div>
          <div className="bg-[#f2f2f2] px-4 py-4 md:px-10 md:py-10 lg:px-10 lg:py-10 rounded-md">
            <h1 className="text-center text-xl font-extrabold text-[#EC2AF0]">10%</h1>
            <p>
            Annual Income Sharing Agreement shares
            </p>
          </div>
          <div className="bg-[#e9f2f2] px-4 py-4 md:px-10 md:py-10 lg:px-10 lg:py-10 rounded-md">
            <h1 className="text-center text-xl text-[#1DCAD4] font-extrabold">10%</h1>
            <p>
            Annual return on all development contract fund taken by Web3bridge dev team
            </p>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Home