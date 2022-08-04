import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

const Layout = ({children}:any) => {
  return (
    <div className="flex flex-col w-full h-screen items-center transition duration-300 ease-in-out delay-150 bg-pink-100">
        <Header />
        <Main>{children}</Main>
    </div>
  )
}

export default Layout