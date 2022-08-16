import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-[#FDF3FC] p-4  md:px-32 md:py-8 lg:px-32 lg:py-8">
        <div className='items-center block md:hidden lg:hidden'>
            <div>
                <Link href='/home'>
                   <a> <Image src="/images/logo.png" height={70} width={200} alt="Web3bridge-logo"/></a>
                </Link>
                <address>
                    <a href="mailto:support@web3bridge.com"><p>support@web3bridge</p></a>
                </address>
            </div>
           
        </div>
        <div className="grid grid-cols-1 gap-10 p-4 text-center md:grid-cols-4 md:gap-10 lg:grid-cols-4 lg:gap-10 md:p-0 lg:p-0 ">
            <div className='hidden md:block lg:block'>
            <div>
                <Link href='/home'>
                   <a> <Image src="/images/logo.png" height={70} width={200} alt="Web3bridge-logo"/></a>
                </Link>
            </div>
            <address>
            <a href="mailto:support@web3bridge.com"><p>support@web3bridge</p></a>
           </address>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold">Web3Bridge</h1>
                <ul>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/about-us' target="_blank" rel="noreferrer"><p>About us</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer"><p>Courses</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer"><p>Partner</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/alumni' target="_blank" rel="noreferrer"><p>Alumni</p></a></li>
                </ul>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold">Support</h1>
                <ul>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer"><p>Terms of service</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer"><p>Privacy Policiy</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer"><p>Dapps</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer"><p>FAQ</p></a></li>
                </ul>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold"> General</h1>
                <ul>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://t.me/web3bridge' target="_blank" rel="noreferrer"><p>Join Community</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer"><p>Events</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer"><p>Resources</p></a></li>
                    <li><a className='text-lg font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer"><p>Links</p></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer