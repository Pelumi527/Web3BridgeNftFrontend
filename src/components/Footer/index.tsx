import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className="w-full bg-pink-100">
        <div className="container grid grid-cols-4 gap-10 px-32 py-8">
            <div>
                <Link href='/home'>
                   <a> <Image src="/images/logo.svg" height={45} width={45} alt="Web3bridge-logo"/></a>
                </Link>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold">Web3Bridge</h1>
                <ul>
                    <li><a href='https://www.web3bridge.com/about-us' target="_blank" rel="noreferrer">About us</a></li>
                    <li><a href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Courses</a></li>
                    <li><a href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Partner</a></li>
                    <li><a href='https://www.web3bridge.com/alumni' target="_blank" rel="noreferrer">Alumni</a></li>
                </ul>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold">Support</h1>
                <ul>
                    <li><a href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Terms of service</a></li>
                    <li><a href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer">Privacy Policiy</a></li>
                    <li><a href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer">Dapps</a></li>
                    <li><a href='https://www.web3bridge.com/dapps' target="_blank" rel="noreferrer">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h1 className="py-4 text-lg font-bold"> General</h1>
                <ul>
                    <li><a href='https://t.me/web3bridge' target="_blank" rel="noreferrer">Join Community</a></li>
                    <li><a href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Events</a></li>
                    <li><a href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Resources</a></li>
                    <li><a href='https://www.web3bridge.com/' target="_blank" rel="noreferrer">Links</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer