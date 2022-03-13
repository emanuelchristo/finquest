import { MdCardMembership } from 'react-icons/md'

import styles from './rocket.module.css'

export default function Rocket() {
	return (
		<div className='margin'>
			<section className={styles['rocket']}>
				<div className={styles['heading-wrapper']}>
					<img src='/images/rocket.png' width='64px' height='auto' alt='' />
					<h2>Join the stock market rocketship</h2>
					<button>
						<MdCardMembership className={styles['membership-icon']} />
						<span>Get started</span>
					</button>
				</div>
				<div className={styles['content']}>
					<div className={styles['item']}>
						<img alt='Super women' src='/images/super-women.png' width='220px' height='auto' />
						<h3>Super women</h3>
						<p>Your money, your way - kerala&apos;s stock market learning destination for women!</p>
					</div>
					<div className={styles['item']}>
						<img alt='Student trader' src='/images/student-trader.png' width='220px' height='auto' />
						<h3>Student trader</h3>
						<p>
							Grow your pocket money - Be smarter by learning to invest early in life. When you turn 18,
							you will be your own boss
						</p>
					</div>
					<div className={styles['item']}>
						<img alt='Veterans' src='/images/veterans.png' width='220px' height='auto' />
						<h3>Veterans</h3>
						<p>
							Nibh felis auctor fusce massa senectus mauris maecenas. At nunc egestas facilisis vestibulum
							nullam integer
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
