import { ImWhatsapp } from 'react-icons/im'
import { motion } from 'framer-motion'
import styles from './consultation.module.css'

export default function Consultation() {
	return (
		<div className='margin'>
			<section className={styles['consultation']}>
				<img className={styles['image']} src='/images/consultation.png' alt='' width='440px' height='auto' />
				<div className={styles['spacer']}></div>
				<div className={styles['content']}>
					<h2>Consultation</h2>
					<p>Chat with us on WhatsApp or schedule a free 30-minutes call with our team</p>
					<div className='flex items-center flex-wrap-reverse'>
						<a className={styles['phone-no']} href='tel:+918075145434'>
							+91 80751 45434
						</a>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles['whatsapp-button']}
						>
							<ImWhatsapp className={styles['whatsapp-icon']} />
							<span>WhatsApp</span>
						</motion.button>
					</div>
				</div>
			</section>
		</div>
	)
}
