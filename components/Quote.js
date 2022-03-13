import { MdPeopleAlt } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from './quote.module.css'

export default function Quote() {
	return (
		<div className='margin'>
			<section className={styles['quote']}>
				<div className={styles['content']}>
					<h3>
						Program designed and led by incredible{' '}
						<span className={styles['blue']}>Traders &amp; Leaders</span>
					</h3>
					<p>
						Traders and leaders who are market ready to earn profit in the stock market through thier
						dynamic trading methods.
					</p>
					<Link href='#community' passHref>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles['community-button']}
						>
							<MdPeopleAlt className={styles['community-icon']} />
							<span>Join community</span>
						</motion.button>
					</Link>
				</div>
				<img src='/images/quote.webp' alt='' width='368px' height='auto' className={styles['image']} />
			</section>
		</div>
	)
}
