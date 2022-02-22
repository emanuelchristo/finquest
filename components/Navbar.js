import { BsFillChatLeftFill } from 'react-icons/bs'
import { IoMdMenu } from 'react-icons/io'
import { motion } from 'framer-motion'
import styles from './navbar.module.css'

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
	return (
		<motion.nav variants={container} initial='hide' animate='show' className={styles['navbar']}>
			<div className='flex items-center'>
				<IoMdMenu className={styles['menu-icon']} />
				<motion.img
					variants={item}
					src='/images/logo.svg'
					height={32}
					width='auto'
					className={styles['logo']}
				/>
			</div>
			<ul className={styles['links-list']}>
				<motion.li variants={item}>
					<a>About us</a>
				</motion.li>
				<motion.li variants={item}>
					<a>Benefits</a>
				</motion.li>
				<motion.li variants={item}>
					<a>Membership</a>
				</motion.li>
				<motion.li variants={item}>
					<a>FAQs</a>
				</motion.li>
			</ul>
			<motion.button
				variants={item}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={styles['talk-button']}
			>
				<BsFillChatLeftFill />
				<span>Talk</span>
			</motion.button>
		</motion.nav>
	)
}
