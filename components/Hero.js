import { BsFillStarFill, BsWhatsapp } from 'react-icons/bs'
import { MdCardMembership } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'
import TypeAnimation from 'react-type-animation'
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
				<h1>
					<span>Stock market</span>
					<span>
						learning
						<span className={styles['in-text-img']}></span> for
					</span>
					<span className={styles['changing-text']}>
						<TypeAnimation
							wrapper='span'
							cursor={true}
							repeat={Infinity}
							sequence={[
								'everyone!',
								DELAY,
								'students',
								DELAY,
								'professionals',
								DELAY,
								'entrepreneurs',
								DELAY,
								'homemakers',
								DELAY,
								'veterans',
								DELAY,
							]}
						/>
					</span>
				</h1>
				<div className={styles['twinkle-wrapper']}>
					<img className={styles['twinkle-1']} src='/images/twinkle.svg' width='40px' height='auto' alt='' />
					<img className={styles['twinkle-2']} src='/images/twinkle.svg' width='40px' height='auto' alt='' />
				</div>
				<div className={styles['square']}></div>
				<div className={styles['circle']}></div>
				<div className={styles['circle-img-1']}></div>
				<div className={styles['circle-img-2']}></div>
				<div className={styles['pill-img-2']}></div>
				<div className={styles['pill-img-1']}></div>
			</div>
			<p className={styles['description']}>Start learning how to invest &amp; trade in stock market easily.</p>
			<div className='flex items-center sm:flex-col sm:w-[65%]'>
				<Link href='/#memberships' passHref>
					<motion.button
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
