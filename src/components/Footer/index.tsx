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
                     <a href="mailto:support@web3bridge.com">support@web3bridge</a>
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
            <a href="mailto:support@web3bridge.com">support@web3bridge</a>
           </address>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold">Web3Bridge</h1>
                <ul>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/about-us' target="_blank" rel="noreferrer">About us</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Courses</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Partner</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/alumni' target="_blank" rel="noreferrer">Alumni</a></li>
                </ul>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold">Support</h1>
                <ul>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Terms of service</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer">Privacy Policiy</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer">Dapps</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold"> General</h1>
                <ul>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://t.me/web3bridge' target="_blank" rel="noreferrer">Join Community</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Events</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Resources</a></li>
                    <li><a className='text-xs font-normal md:text-base lg:text-base' href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Links</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer