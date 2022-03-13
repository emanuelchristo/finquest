import { MdCalendarToday } from 'react-icons/md'
import { motion } from 'framer-motion'
import styles from './consultation.module.css'

export default function Consultation() {
	return (
		<div className='margin'>
			<section className={styles['consultation']}>
				<img className={styles['image']} src='/images/consultation.webp' alt='' width='440px' height='auto' />
				<div className={styles['spacer']}></div>
				<div className={styles['content']}>
					<h2>Consultation</h2>
					<p>Chat with us on WhatsApp or schedule a free 30-minutes call with our team</p>
					<a href='https://calendly.com/finquest' target='_blank' rel='noreferrer noopener'>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles['whatsapp-button']}
						>
							<MdCalendarToday className={styles['whatsapp-icon']} />
							<span>Book free consultation</span>
						</motion.button>
					</a>
				</div>
			</section>
		</div>
	)
}
