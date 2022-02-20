import { ImWhatsapp } from 'react-icons/im'
import styles from './consultation.module.css'

export default function Consultation() {
	return (
		<div className='margin'>
			<section className={styles['consultation']}>
				<img src='/images/consultation.png' alt='' width='440px' height='auto' />
				<div className={styles['spacer']}></div>
				<div className={styles['content']}>
					<h2>Consultation</h2>
					<p>Chat with us on WhatsApp or schedule a free 30-minutes call with our team</p>
					<div className='flex items-center'>
						<a className={styles['phone-no']} href='tel:+918075145434'>
							+91 80751 45434
						</a>
						<button className={styles['whatsapp-button']}>
							<ImWhatsapp className={styles['whatsapp-icon']} />
							<span>WhatsApp</span>
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}
