import { useState } from 'react'
import Head from 'next/head'
import Button from '../../components/shop/Button'
import Image from '../../components/shop/Image'
import QuantityPicker from '../../components/shop/QuantityPicker'
import { fetchInventory } from '../../utils/inventoryProvider'
import { slugify } from '../../utils/helpers'
import CartLink from '../../components/shop/CartLink'
import { SiteContext, ContextProviderComponent } from '../../context/mainContext'
import styles from "./product.module.css"
import productsColors from '../../utils/products-colors';
import productsSizes from '../../utils/products-sizes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/Navbar'

const ItemView = (props) => {
  const [numberOfitems, updateNumberOfItems] = useState(1)
  const { product } = props
  const [image, setImage] = useState(product.colors[0]);
  const { price, name, description } = product
  const { context: { addToCart } } = props
  const [size, setSize] = useState('XS');
  const [color, setColor] = useState(productsColors[0].color);


  function addItemToCart(product) {
    product["quantity"] = numberOfitems
    product["color"] = color
    product["size"] = size
    product["id"] = product["id"] + size + color

    addToCart(product)
  }

  function increment() {
    updateNumberOfItems(numberOfitems + 1)
  }

  function decrement() {
    if (numberOfitems === 1) return
    updateNumberOfItems(numberOfitems - 1)
  }
  function colorChange(e) {
    const colorImg = product.colors[e.target.value]
    setImage(colorImg)
    product["image"] = colorImg
    const color = e.target.getAttribute('data-name');
    setColor(color)

  }
  function sizeSelect(e) {
    const size = e.target.getAttribute('value')
    setSize(size)
    console.log(size);
  }



  return (
    <>
      <Navbar />
      <CartLink />
      <ToastContainer />
      <Head>
        <title>Finquest - Start learning how to invest &amp; trade in stock market easily.</title>
        <link rel='icon' type='image/png' href='/favicon.png'></link>
      </Head>
      <div className="margin" >
        <div className="
      sm:py-12
      md:flex-row
      py-4 w-full flex flex-1 flex-col my-0 mx-auto
    ">
          <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
            <div className="py-16 p10 flex flex-1 justify-center items-center">
              <Image src={image} alt="Inventory item" className="max-h-full" />
            </div>
          </div>
          <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">

            <h1 className="
          sm:mt-0 mt-2 text-5xl font-light leading-large
         ">{name}</h1>
            <div className="flex items-end gap-2">
              <span className="text-gray-800 text-xl md:text-4xl font-bold">
                ₹{price}
              </span>
              <span className="text-red-500 line-through mb-0.5">₹{price * 1.25}</span>
            </div><br />
            <p className="text-gray-600 leading-7">{description}</p><br />


            <div className={styles["product-configuration"]}>
              <div className={styles["product-color"]}>
                <div className="product-filter-item">
                  <span>Color : <strong>{color}</strong></span>
                  <div className={styles["color-choose"]}>
                    {productsColors.map(type => (
                      <div key={type.id}>
                        <input
                          data-name={type.label}
                          name='color'
                          key={type.id}
                          onChange={colorChange}
                          type="radio"
                          id={type.color + '-' + type.id}
                          value={type.id - 1}
                          valueName={type.label}
                          defaultChecked={type.check}
                        />
                        <label htmlFor={type.color + '-' + type.id}><span style={{ backgroundColor: type.color }}></span></label>
                      </div>

                    ))}
                  </div>
                </div>


              </div>
              <div className={styles["cable-config"]}>
                <span>Choose Size : <strong>{size}</strong></span>

                <div className={styles["cable-choose"]}>
                  <div className="product-filter-item">
                    <div className="checkbox-color-wrapper">
                      <div className="flex space-x-2 select-wrapper">

                        {productsSizes.map(type => (
                          <button
                            key={type.id}
                            className="bg-grey-500 hover:bg-grey-600 active:bg-grey-700 focus:outline-none focus:ring focus:ring-grey-300 ..."
                            onClick={sizeSelect} value={type.label}>{type.label}</button>
                        ))}

                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
            <div className="my-6">
              <QuantityPicker
                increment={increment}
                decrement={decrement}
                numberOfitems={numberOfitems}
              />
            </div>
            <Button
              full
              title="Add to Cart"
              onClick={() => addItemToCart(product)}
            />
            <br />
            <br />
            <Button
              full
              title="Buy now"
            />
          </div>
        </div></div>
    </>
  )
}

export async function getStaticPaths() {
  const inventory = await fetchInventory()
  const paths = inventory.map(item => {
    return { params: { name: slugify(item.name) } }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const name = params.name.replace(/-/g, " ")
  const inventory = await fetchInventory()
  const product = inventory.find(item => slugify(item.name) === slugify(name))

  return {
    props: {
      product,
    }
  }
}

function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <ItemView {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default ItemViewWithContext