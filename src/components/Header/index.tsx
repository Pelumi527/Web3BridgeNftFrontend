import React from 'react'
import Image from 'next/image'
import ConnectButton from '../ConnectButton'
import Link from 'next/link'




const Header = () => {
 

  return (
    <div className="fixed container mx-auto box-border font-bold underline mt-6 flex items-center justify-between">
      <Link href='/mint'>
        <Image src="/images/logo.svg" height={45} width={45} alt="Web3bridge-logo"/>
      </Link>
      <div className="flex items-center justify-center">
          <a className="no-underline" href='#mint-nft'>
            <button className="rounded-md bg-red-500 px-6 py-4 text-sm font-bold text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mx-7">
              Mint NFT
            </button>
          </a>
        
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header