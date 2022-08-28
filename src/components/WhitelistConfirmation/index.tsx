import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useUserDerivedInfo } from '../../hooks/useMintInfo'

export default function WhiteListConfirmation() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const {isWhitelisted} = useUserDerivedInfo()

  return (
    <>
      
        <button
          type="button"
          onClick={openModal}
          className="bg-[#FDF3FC] text-[#F02A2A] py-1 px-3 md:py-3 md:px-9 lg:py-3 lg:px-9 rounded-md border-2 border-[#F02A2A] hover:bg-[#F02A2A] hover:text-white"
        >
          Confirm WhiteList
        </button>
     

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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    WhiteList Status
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-center text-gray-800">
                      {isWhitelisted == true ? 'Your wallet has been Whitelisted':'Sorry, Your Wallet has not been Whitelisted'}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#F02A2A] border border-transparent rounded-md"
                      onClick={closeModal}
                    >
                      Got it
                    </button>
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
