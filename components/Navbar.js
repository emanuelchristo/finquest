import { useState } from 'react'
import { BsFillChatLeftFill } from 'react-icons/bs'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'
import styles from './navbar.module.css'
import Link from 'next/link'

const container = {
	hide: {},
	show: {
		transition: {
			delay: 1,
			type: 'spring',
			duration: 0.15,
			staggerChildren: 0.05,
		},
	},
}

const item = {
	hide: { opacity: 0, y: -50 },
	show: { opacity: 1, y: 0, transition: { type: 'spring', mass: 1 } },
}

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<motion.nav variants={container} initial='hide' animate='show' className={styles['navbar']}>
			<Link href='/' passHref>
				<motion.img
					className=' cursor-pointer'
					variants={item}
					src='/images/logo.svg'
					height={32}
					width='auto'
				/>
			</Link>
			<motion.span className={styles['menu-icon-wrapper']} variants={item} onClick={() => setShowMenu(true)}>
				<IoMdMenu className={styles['menu-icon']} />
			</motion.span>

			<ul className={styles['links-list']}>
				<motion.li variants={item}>
					<Link href='#about'>
						<a>About us</a>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link href='#benefits'>
						<a>Benefits</a>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link href='#memberships'>
						<a>Memberships</a>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link href='#faqs'>
						<a>FAQs</a>
					</Link>
				</motion.li>
			</ul>
			<Link href='/#contact' passHref>
				<motion.button
					variants={item}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={styles['talk-button']}
				>
					<BsFillChatLeftFill />
					<span>Talk</span>
				</motion.button>
			</Link>
			{showMenu && <Menu onClose={() => setShowMenu(false)} />}
		</motion.nav>
	)
}

function Menu({ onClose }) {
	return (
		<div className={styles['menu']}>
			<div className={styles['menu-close-wrapper']} onClick={onClose}>
				<IoMdClose className={styles['menu-close-icon']} />
			</div>
			<ul className={styles['menu-links-list']} onClick={onClose}>
				<motion.li variants={item}>
					<Link href='#about'>
						<a>About us</a>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link href='#benefits'>
						<a>Benefits</a>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link href='#memberships'>
						<a>Memberships</a>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link href='#faqs'>
						<a>FAQs</a>
					</Link>
				</motion.li>
			</ul>
		</div>
	)
}
