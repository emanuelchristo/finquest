import { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'
import styles from './navbar.module.css'
import Link from 'next/link'
import Snackbar from '../components/SnackBar'

import { FaBuilding, FaStar, FaQuestion, FaAward } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'

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

const menu = {
	hide: { opacity: 0, y: -50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			mass: 1,
			staggerChildren: 0.05,
		},
	},
}

const menuItem = {
	hide: { opacity: 0, y: -50 },
	show: { opacity: 1, y: 0, transition: { type: 'spring', mass: 1 } },
}

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<div>

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
						<Link href='/about'>
							<a>About us</a>
						</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link href='/#benefits'>
							<a>Benefits</a>
						</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link href='/#memberships'>
							<a>Memberships</a>
						</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link href='/#faqs'>
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
						<BsWhatsapp className=' mb-[0.125rem]' />
						<span>Contact</span>
					</motion.button>
				</Link>
				{showMenu && <Menu onClose={() => setShowMenu(false)} />}
			</motion.nav></div>
	)
}

function Menu({ onClose }) {
	return (
		<motion.div variants={menu} initial='hide' animate='show' className={styles['menu']}>
			<div className={styles['menu-close-wrapper']} onClick={onClose}>
				<IoMdClose className={styles['menu-close-icon']} />
			</div>
			<ul className={styles['menu-links-list']} onClick={onClose}>
				<motion.li variants={menuItem}>
					<Link href='/about'>
						<a>
							<FaBuilding className={styles['menu-item-icon']} style={{ color: '#1963ed' }} />
							<span>About us</span>
						</a>
					</Link>
				</motion.li>
				<motion.li variants={menuItem}>
					<Link href='/#benefits'>
						<a>
							<FaStar className={styles['menu-item-icon']} style={{ color: '#f1b915' }} />
							<span>Benefits</span>
						</a>
					</Link>
				</motion.li>
				<motion.li variants={menuItem}>
					<Link href='/#memberships'>
						<a>
							<FaAward className={styles['menu-item-icon']} style={{ color: '#0bab2e' }} />
							<span>Memberships</span>
						</a>
					</Link>
				</motion.li>
				<motion.li variants={menuItem}>
					<Link href='/#faqs'>
						<a>
							<FaQuestion className={styles['menu-item-icon']} style={{ color: '#e71628' }} />
							<span>FAQs</span>
						</a>
					</Link>
				</motion.li>
				<motion.li variants={menuItem}>
					<Link href='/#community'>
						<a>
							<BsPeopleFill className={styles['menu-item-icon']} style={{ color: '#8117f3' }} />
							<span>Community</span>
						</a>
					</Link>
				</motion.li>
			</ul>
		</motion.div>
	)
}
