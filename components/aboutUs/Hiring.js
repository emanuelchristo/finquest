import { MdMail } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from './hiring.module.css'

export default function Hiring() {
	return (
		<div className='margin'>
			<section className={styles['hiring']}>
				<div className={styles['content']}>
					<img src='/images/suitcase.svg' className={styles['suitcase']} />
					<span className={styles['text']} >WORK AT FINQUEST</span>
					<h3>
						Let&apos;s work together

					</h3>
					<p>
						We&apos;re looking for people who want make stock market trading effective
					</p>
					<Link href='' passHref>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles['community-button']}
						>
							<MdMail className={styles['community-icon']} />
							<span>Join us</span>
						</motion.button>
					</Link>
				</div>
				{/* <img
					className={styles['arrow-1']}
					src='/images/arrow-1.svg'
					height='auto'
					alt=''
				/>
				<img
					className={styles['arrow-1-1']}
					src='/images/arrow-2.svg'
					height='auto'
					alt=''
				/>
				<img
					className={styles['arrow-2']}
					src='/images/arrow-2.svg'
					width='140px'
					height='auto'
					alt=''
				/> */}
			</section>
		</div>
	)
}
