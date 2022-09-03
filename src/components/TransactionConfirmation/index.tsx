import React from 'react'
import { toast } from 'react-hot-toast'
function TransactionConfirmation(hash:string) {
    const transactionHash = `https://etherscan.io/tx/${hash}`
    return (
        toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-pink-300 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start bg-pink-300">
                  <div className="flex-shrink-0 pt-0.5">
                   
                  </div>
                  <div className="flex-1 ml-3">
                    <p className="font-medium text-black text-md" >
                      Mint SuccessFul: Thank you for Minting Blossomimg Web3Bridge
                    </p>
                    <a className="mt-1 text-sm font-bold text-red-500" href={transactionHash} target="_blank" rel='noreferrer'>
                      View Transaction
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="flex items-center justify-center w-full p-4 text-sm font-medium text-red-600 border border-transparent rounded-none rounded-r-lg"
                >
                  Close
                </button>
              </div>
            </div> ),{
                duration:20000
            })
    )
}

export default TransactionConfirmation