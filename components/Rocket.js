import { motion } from 'framer-motion'
import { MdCardMembership } from 'react-icons/md'
import Link from 'next/link'

import styles from './rocket.module.css'
export default function Rocket() {
	return (
		<div className='margin relative'>
			<section className={styles['rocket']}>
				<div className={styles['heading-wrapper']}>
					<img src='/images/rocket.webp' width='64px' height='auto' alt='' />
					<h2>Join the stock market rocketship</h2>
					<Link href='#memberships' passHref>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles['whatsapp-button']}
						>
							<MdCardMembership className={styles['membership-icon']} />
							<span>Get started</span>
						</motion.button>
					</Link>
				</div>
				<div className={styles['content']}>
					<div className={styles['item']}>
						<img alt='Super women' src='/images/super-women.webp' width='220px' height='auto' />
						<h3>Super women</h3>
						<p>Your money, your way - kerala&apos;s stock market learning destination for women!</p>
					</div>
					<div className={styles['item']}>
						<img alt='Student trader' src='/images/student-trader.webp' width='220px' height='auto' />
						<h3>Student trader</h3>
						<p>
							Grow your pocket money - Be smarter by learning to invest early in life. When you turn 18,
							you will be your own boss
						</p>
					</div>
					<div className={styles['item']}>
						<img alt='Veterans' src='/images/veterans.webp' width='220px' height='auto' />
						<h3>Veterans</h3>
						<p>Age is not limit, you can learn any time you wish, A source of income one can depend on</p>
					</div>
				</div>
				<div className={styles['decorations']}>
					<img className={styles['blue-red']} src='/icons/blue-red.svg' alt='' />
					<img className={styles['violet-yellow']} src='/icons/violet-yellow.svg' alt='' />
					<div className={styles['green']}></div>
					<div className={styles['violet']}></div>
					<img className={styles['twinkle-1']} src='/icons/twinkle-2.svg' alt='' />
					<img className={styles['twinkle-2']} src='/icons/twinkle-2.svg' alt='' />
					<img className={styles['rupee']} src='/icons/rupee.svg' alt='' />
					<img className={styles['safe']} src='/icons/safe.svg' alt='' />
					<img className={styles['bank']} src='/icons/bank.svg' alt='' />
					<img className={styles['piggy-bank']} src='/icons/piggy-bank.svg' alt='' />
					<img className={styles['trend-up']} src='/icons/trend-up.svg' alt='' />
					<img className={styles['rocket']} src='/icons/rocket.svg' alt='' />
					<img className={styles['wallet']} src='/icons/wallet.svg' alt='' />
					<img className={styles['coins']} src='/icons/coins.svg' alt='' />
					<img className={styles['curly-1']} src='/icons/curly-arrow.svg' alt='' />
					<img className={styles['curly-2']} src='/icons/curly-arrow.svg' alt='' />
				</div>
			</section>
		</div>
	)
}
