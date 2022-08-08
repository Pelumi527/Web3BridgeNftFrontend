import React, {Fragment, useState, useEffect} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    useConnect, 
    useAccount,
    useDisconnect, 
    useEnsAvatar,
    useEnsName,
    chain
} from "wagmi"


const ConnectButton = () => {
    const { address, connector, isConnected } = useAccount()
    // const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
    // const { data: ensName } = useEnsName({ address })
    const { disconnect } = useDisconnect()
    const {connect, connectors, error, isLoading, pendingConnector } = useConnect({chainId: chain.polygonMumbai.id})
    
 
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
      }
      
      function openModal() {
        setIsOpen(true)
      }

      useEffect(() => {
        setIsOpen(false)
      }, [])
      
      return (
        <>
          {isConnected ? 
          <div>
             <button className="px-4 py-4 text-white bg-black">{address?.substring(0, 6)}...{address?.substring(42, 38)}...{address?.substring(42-4)}</button>
          </div>:
          <div className="">
          <button
            type="button"
            onClick={openModal}
            className="px-4 py-4 text-sm font-bold text-white bg-red-500 rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Connect Wallet
          </button>
        </div>}
    
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <div className="flex items-center justify-between mt-4">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Select Wallet
                      </Dialog.Title>
                        <button
                          type="button"
                          className="content-center justify-center px-4 py-2 text-sm font-medium bg-pink-100 border border-transparent rounded-md place-content-center text-black-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                      <div className="flex flex-col mt-2">
                        {connectors.map((connector) => (
                            <button className="px-4 py-4 m-4 text-base text-white bg-red-400 rounded-md hover:bg-opacity-90"
                                disabled={!connector.ready}
                                key={connector.id}
                                onClick={() => {connect({connector})}}
                                type="button"
                            >
                                {connector.name}
                                {!connector.ready && ' (unsupported)'}
                                {isLoading &&
                                    connector.id === pendingConnector?.id &&
                                '(connecting)'}
                            </button>
                        )
                        )}
                         {error && <div>{error.message}</div>}
                      </div>
    
                      
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )
}

export default ConnectButton