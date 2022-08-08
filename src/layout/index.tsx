import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Layout = ({children}:any) => {
  return (
    <div className="flex flex-col items-center w-full h-screen transition duration-300 ease-in-out delay-150">
        <Header />
        <Main>{children}</Main>
        <Footer/>
    </div>
  )
}

export default Layout