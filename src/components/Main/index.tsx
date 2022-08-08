import React from 'react'

const Main = ({children}:any) => {
  return (
    <main className="w-full" style={{ height: 'max-content' }}>
        {children}
    </main>
  )
}

export default Main