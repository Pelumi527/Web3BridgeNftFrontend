import React, {Fragment, useState} from 'react'
import Image from 'next/image'
import ConnectButton from '../ConnectButton'



const Header = () => {
 

  return (
    <div className="container mx-auto box-border font-bold underline mt-6 flex items-center justify-between">
      <Image src="/images/logo.svg" height={45} width={45} alt="Web3bridge-logo"/>
      <div>
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header