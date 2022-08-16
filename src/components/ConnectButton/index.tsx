import React, {Fragment, useState, useEffect} from 'react'
import { Dialog, Transition, Menu} from '@headlessui/react'
import {
    useConnect, 
    useAccount,
    useDisconnect, 
} from "wagmi"
import { CHAIN_ID } from '../../config/constants/network'
import { toast } from 'react-hot-toast'
import { ChevronDownIcon } from '@heroicons/react/solid';
import {shortenAddress} from "../../utils/helper"


const ConnectButton = () => {
    const { address, connector, isConnected, isDisconnected} = useAccount()
    // const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
    // const { data: ensName } = useEnsName({ address })
    const { disconnect } = useDisconnect()
    const {connect, connectors, error, isLoading, pendingConnector,status } = useConnect({
      chainId: CHAIN_ID,
    })
    
 
    const [isOpen, setIsOpen] = useState(false)

    const notify = () => {
     if(!isConnected){
      toast.success('Connected')
      return
     }
     if(!isDisconnected){
      toast.success('Disconnected')
      return
     }
    }

    function closeModal() {
        setIsOpen(false)
      }
      
      function openModal() {
        setIsOpen(true)
      }

      useEffect(() => {
        if(status == "success"){
          toast.success('Connected')
        }
        console.log(status)
      }, [status])
      
      return (
        <>
          {isConnected ? 
          <div>
             <div>
               <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="hidden md:inline-flex lg:inline-flex px-4 py-4  text-white bg-black rounded-md">
                    <p>{address?.substring(0, 6)}...{address?.substring(30, 36)}...{address?.substring(42-4)}</p>
                    <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                  </Menu.Button>

                  <Menu.Button className="inline-flex px-4 btn_cta py-4 block md:hidden lg:hiddeb text-white bg-black rounded-md">
                    <p>{shortenAddress(address)}</p>
                    <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-black text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          disconnect()
                        }}
                      >
                        Disconnect
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
              </Transition>
              </Menu>
           </div>
          </div>:
          <div className="">
          <button
            type="button"
            onClick={openModal}
            className="px-2 py-2 text-sm font-bold text-white bg-red-500 rounded-md md:px-4 md:py-4 lg:px-4 lg:py-4 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
                                onClick={
                                 async () => {
                                  connect({connector})
                                  closeModal()
                                  
                                 }
                                }
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