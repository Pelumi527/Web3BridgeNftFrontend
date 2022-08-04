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
import { shortenAddress } from '../../functions/format'


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
             <button className="bg-black py-4 px-4 text-white">{address?.substring(0, 6)}...{address?.substring(42, 38)}...{address?.substring(42-4)}</button>
          </div>:
          <div className="">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-red-500 px-4 py-4 text-sm font-bold text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <div className="mt-4 flex items-center justify-between">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Select Wallet
                      </Dialog.Title>
                        <button
                          type="button"
                          className="justify-center content-center place-content-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-black-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                      <div className="mt-2 flex flex-col">
                        {connectors.map((connector) => (
                            <button className="px-4 py-4 m-4 text-base rounded-md bg-red-400 text-white hover:bg-opacity-90"
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