import { BsWhatsapp } from 'react-icons/bs'
import { MdCardMembership } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './hero.module.css'

const DELAY = 2500

const anim = {
    scale: [1, 1, 1],
    y: [null, 20, -30],
    x: [null, 0, 0],
    rotate: [null, -10, 10],
    transition: { repeat: Infinity, repeatType: 'reverse', duration: 4 },
}

export default function Hero() {
    return (
        <div className={styles['hero']}>
            <div className={styles['heading-wrapper']}>
                <h1>Hello</h1>
            </div>


            <div className={styles['heading-details']}>
                <div>
                    <span>

                    </span>
                </div>
            </div>

            <div className='flex items-center sm:flex-col sm:w-[65%]'>
                <Link href='/#memberships' passHref>
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { type: 'spring', mass: 1.15, delay: 1.5 } }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles['talk-button']}
                    >
                        <MdCardMembership className={styles['membership-icon']} />
                        <span>Start learning</span>
                    </motion.button>
                </Link>
                <Link href='https://api.whatsapp.com/send?phone=918075145434' passHref>
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { type: 'spring', mass: 1.15, delay: 1.65 } }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles['consultation-button']}
                    >
                        <BsWhatsapp className={styles['consultation-icon']} />
                        <span>Chat with us</span>
                    </motion.button>
                </Link>
            </div>

            <img className={styles['hero-arrow']} src='/icons/hero-arrow.svg' width={32} height='auto' alt='' />
        </div>
    )
}
