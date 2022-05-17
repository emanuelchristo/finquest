import { useState, useEffect, Fragment } from 'react'
import { ContextProviderComponent, SiteContext } from '../../context/mainContext'
import { FaShoppingCart, FaCircle, FaArrowRight } from 'react-icons/fa';
import { colors } from '../../theme'
import styles from './cart.module.css'
import { Dialog, Transition } from '@headlessui/react'
// Cart products
import Link from 'next/link'
import DENOMINATION from '../../utils/currencyProvider'
import { slugify } from '../../utils/helpers'
import QuantityPicker from '../../components/shop/QuantityPicker'



const { primary } = colors

function CartLink({ context }) {



  const [renderClientSideComponent, setRenderClientSideComponent] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleCart = () => {
    setOpen(true)
  }
  useEffect(() => {
    setRenderClientSideComponent(true)
  }, [])
  // let { context: { numberOfItemsInCart = 0 } } = props
  const {
    numberOfItemsInCart, cart, removeFromCart, total, setItemQuantity
  } = context
  const cartEmpty = numberOfItemsInCart === Number(0)

  function increment(item) {
    item.quantity = item.quantity + 1
    setItemQuantity(item)
  }

  function decrement(item) {
    if (item.quantity === 1) return
    item.quantity = item.quantity - 1
    setItemQuantity(item)
  }

  if (!renderClientSideComponent) return null


  return (
    <>
      <div className={styles['circle']}>
        <div className={styles['cart']}>
          <FaShoppingCart onClick={toggleCart} />
          {
            renderClientSideComponent && numberOfItemsInCart > Number(0) && (
              <FaCircle color={primary} size={12} suppressHydrationWarning />
            )
          }
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <FaArrowRight className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            {
                              cartEmpty ? (
                                <h2>No items in cart.</h2>
                              ) : (
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                  {cart.map((item) => (
                                    <li key={item.id} className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={item.image}
                                          alt={item.name}
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href={`/product/${slugify(item.name)}`}> {item.name} </a>
                                            </h3>
                                            <p className="ml-4">{DENOMINATION + item.price * item.quantity}</p>
                                          </div>
                                          <p className="mt-1 text-sm text-gray-500">color : {item.color}</p>
                                          <p className="mt-1 text-sm text-gray-500">size : {item.size}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p className="text-gray-500">

                                            <QuantityPicker
                                              numberOfitems={item.quantity}
                                              increment={() => increment(item)}
                                              decrement={() => decrement(item)}
                                            />

                                          </p>

                                          <div className="flex">
                                            <button
                                              onClick={() => removeFromCart(item)}
                                              type="button"
                                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{DENOMINATION + total}</p>
                        </div>

                        {total <= 500 ?
                          <p className="mt-0.5 text-sm text-gray-500">Free Shipping for order above {DENOMINATION + 500} </p> :
                          <p className="mt-0.5 text-sm text-gray-500"> Eligible for free shipping </p>}


                        <div className="mt-6">
                          {!cartEmpty && (
                            <Link href="/shop/checkout">
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                              >
                                Checkout
                              </a></Link>
                          )}
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping<span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

function CartLinkWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <CartLink {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}




export default CartLinkWithContext