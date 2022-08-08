import React from 'react'
import Image from 'next/image'
import ConnectButton from '../ConnectButton'
import Link from 'next/link'




const Header = () => {
 

  return (
    <div className="box-border fixed z-50 flex items-center justify-between w-full px-10 py-6 mx-auto font-bold bg-pink-100">
      <Link href='/home'>
        <a> <Image src="/images/logo.svg" height={45} width={45} alt="Web3bridge-logo"/></a>
      </Link>
      <div className="flex items-center justify-center">
          <Link className="no-underline" href='/mint'>
            <button className="px-6 py-4 text-sm font-bold text-white no-underline bg-red-500 rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mx-7">
              Mint NFT
            </button>
          </Link>
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header