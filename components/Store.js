import { motion } from 'framer-motion'
import styles from './store.module.css'
import { IoBagHandle } from 'react-icons/io5'

export default function Store() {
	return (
		<div className='margin'>
			<section className={styles['store']}>
				<img className={styles['image']} src='/images/store.png' alt='' width='440px' height='auto' />
				<div className={styles['spacer']}></div>
				<div className={styles['content']}>
					<h2>Checkout our store</h2>
					<p>Our premium trader-wear store is here to give all traders something they’ll love.</p>
					<div className={styles['coming-soon']}>
						<a href='' onClick={(event) => event.preventDefault()} rel='noreferrer noopener'>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={styles['store-button']}
							>
								<IoBagHandle className={styles['whatsapp-icon']} />
								<span>Visit Store</span>
							</motion.button>
						</a>
						<span> COMING SOON</span>
					</div>
				</div>
			</section>
		</div>
	)
}
