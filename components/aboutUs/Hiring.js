import { MdMail } from 'react-icons/md'
import { motion } from 'framer-motion'

import styles from './hiring.module.css'

export default function Hiring() {
	return (
		<div className='margin' id='community'>
			<section className={styles['community']}>
				<img src='/images/suitcase.svg' className={styles['suitcase']} />
				<span className={styles['text']}>WORK AT FINQUEST</span>
				<h2>Join our mission</h2>
				<p>We&apos;re looking for people who want make stock market trading effective</p>
				<div className={styles['feature']}>
					<a href={waLink('I would like to work at FINQUEST')} target='_blank' rel='noreferrer noopener'>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles['community-button']}
						>
							<MdMail className={styles['community-icon']} />
							<span className={styles['join']}>Join us</span>
						</motion.button>
					</a>
				</div>
				<img className={styles['arrow-1']} src='/images/arrow-1.svg' width='140px' height='auto' alt='' />
				<img className={styles['arrow-2']} src='/images/arrow-2.svg' width='140px' height='auto' alt='' />
			</section>
		</div>
	)
}
function waLink(msg) {
	let url = 'https://api.whatsapp.com/send?'
	let params = new URLSearchParams('')
	params.append('phone', '918075145434')
	params.append('text', msg)
	return url + params.toString()
}
