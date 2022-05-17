import styles from './product.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'



export default function ProductLeft({ imageSrc, title, link, price }) {
    return (
        <>

            <section className={styles['aboutL']}>
                <div className={styles['dt-sc-hr']}></div>
                <div className={styles['contentL']}>
                    <div className={styles['heading-wrapper']}>
                    </div>


                    <Link href={`${link}`}>
                        <a aria-label={title} className={styles['action-link']} rel='noreferrer noopener'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles['action-button']}
                            >
                                Buy Now
                            </motion.button>
                        </a></Link>
                    {/* <p>{desc}
                    </p> */}
                    <div className="flex items-end gap-2">
                        <span className="text-gray-800 text-xl md:text-4xl sm:text-4xl font-bold">
                            ₹{price}
                        </span>
                        <span className="text-red-500 text-xl line-through mb-0.5">₹{price * 1.25}</span>
                        <span className="text-red-500 text-xl mb-0.5"> (-{25}%)</span>
                    </div><br />

                    <h3>{title}</h3>
                </div>
                <div>
                    <img className={styles['image']} src={imageSrc} alt={title} width='110%' height='auto' />
                </div>
            </section>

        </>
    )
}