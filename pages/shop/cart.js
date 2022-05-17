import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SiteContext, ContextProviderComponent } from '../../context/mainContext'
import DENOMINATION from '../../utils/currencyProvider'
import { slugify } from '../../utils/helpers'
import QuantityPicker from '../../components/shop/QuantityPicker'
import Image from '../../components/shop/Image'
import Head from 'next/head'
import './cart.module.css'
import Navbar from '../../components/Navbar'

const Cart = ({ context }) => {
  const [renderClientSideComponent, setRenderClientSideComponent] = useState(false)
  useEffect(() => {
    setRenderClientSideComponent(true)
  }, [])
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
      <Head>
        <title>finquest ECommerce - Cart</title>
        <meta name="description" content={`finquest ECommerce - Shopping cart`} />
        <meta property="og:title" content="finquest ECommerce - Cart" key="title" />
      </Head>
      <Navbar />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Your Cart
            </h2>
          </div>
          {
            cartEmpty ? (
              <h3>No items in cart.</h3>
            ) : (
              <div className="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">
                {
                  cart.map((item) => {
                    return (
                      <div className="py-5 sm:py-8" key={item.id}>
                        <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">

                          <div className="sm:-my-2.5" >
                            <Link href={`/product/${slugify(item.name)}`}>
                              <a aria-label={item.name}
                                href="#"
                                className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
                                <Image className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200 " src={item.image} alt={item.name} />
                              </a></Link>
                          </div>
                          <div className="flex flex-col justify-between flex-1">
                            <div>
                              <Link href={`/product/${slugify(item.name)}`}>
                                <a aria-label={item.name}
                                  href="#"
                                  className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">
                                  Top
                                </a></Link>
                              <span className="block text-gray-500">Size: {item.size}</span>
                              <span className="block text-gray-500">Color: {item.color}</span>
                            </div>
                            <div>
                              <span className="block text-gray-800 md:text-lg font-bold mb-1">
                                {DENOMINATION + item.price}
                              </span>
                              <span className="flex items-center text-gray-500 text-sm gap-1">
                                <span>
                                  <svg
                                    className="w-5 h-5 text-green-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">

                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </span>
                                <span> In stock </span>
                              </span>
                            </div>
                          </div>
                          <div className="w-full sm:w-auto flex justify-between border-t sm:border-none pt-4 sm:pt-0">
                            <div className="flex flex-col items-start gap-2">
                              <QuantityPicker
                                numberOfitems={item.quantity}
                                increment={() => increment(item)}
                                decrement={() => decrement(item)}
                              />
                              <button onClick={() => removeFromCart(item)} className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">
                                Delete
                              </button>
                            </div>
                            <div className="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-16">
                              <span className="block text-gray-800 md:text-lg font-bold">
                                {DENOMINATION + item.price * item.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    )
                  })}
              </div>
            )}
          <div className="flex flex-col items-end gap-4">
            <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
              <div className="space-y-1">
                <div className="flex justify-between text-gray-500 gap-4">
                  <span>Subtotal</span>
                  <span>{DENOMINATION + total}</span>
                </div>
                <div className="flex justify-between text-gray-500 gap-4">
                  <span>Shipping</span>
                  <span>{DENOMINATION + 0}</span>
                </div>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-start text-gray-800 gap-4">
                  <span className="text-lg font-bold">Total</span>
                  <span className="flex flex-col items-end">
                    <span className="text-lg font-bold">{DENOMINATION + total} INR</span>
                    <span className="text-gray-500 text-sm">including VAT</span>
                  </span>
                </div>
              </div>
            </div>
            {!cartEmpty && (
              <Link href="/shop/checkout">
                <a className=" inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Check out
                </a></Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function CartWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <Cart {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}


export default CartWithContext