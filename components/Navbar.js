import { BsFillChatLeftFill } from 'react-icons/bs'
import { IoMdMenu } from 'react-icons/io'
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
	return (
		<motion.nav variants={container} initial='hide' animate='show' className={styles['navbar']}>
			<motion.img variants={item} src='/images/logo.svg' height={32} width='auto' className={styles['logo']} />

			<motion.span variants={item} className='hidden md:inline-block'>
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
					<Link href='#membership'>
						<a>Membership</a>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link href='#faq'>
						<a>FAQs</a>
					</Link>
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
