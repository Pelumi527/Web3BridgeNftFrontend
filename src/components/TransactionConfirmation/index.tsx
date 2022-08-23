import React from 'react'

function TransactionConfirmation(hash:string) {
    const transactionHash = `https://goerli.etherscan.io/tx/${hash}`
    return (
        <div className="px-8 py-8">
            <p className="text-center">Mint Successfull</p>
            <a className="text-blue-600" href={transactionHash} target="_blank" rel="noreferrer"> Transaction</a>
        </div>
    )
}

export default TransactionConfirmation