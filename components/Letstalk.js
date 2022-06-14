import { HiPhone } from 'react-icons/hi'
import { MdMail } from 'react-icons/md'
import { motion } from 'framer-motion'
import styles from './letstalk.module.css'

const social = [
	{
		alt: 'Instagram',
		img: '/icons/instagram.svg',
		href: 'https://instagram.com/finquest_?utm_medium=copy_link',
	},
	{
		alt: 'Whatsapp',
		img: '/icons/whatsapp.svg',
		href: 'https://api.whatsapp.com/send?phone=918075145434',
	},
	{
		alt: 'Facebook',
		img: '/icons/facebook.svg',
		href: 'https://www.facebook.com/Finquest-102198582285743/',
	},

	{
		alt: 'Twitter',
		img: '/icons/twitter.svg',
		href: 'https://twitter.com/Finquestsip',
	},
]

export default function Letstalk() {
	return (
		<div id='contact' className='margin'>
			<section className={styles['letstalk']}>
				<div className={styles['heading-wrapper']}>
					<img
						className={styles['decoration']}
						src='/images/lets-talk-decoration.svg'
						width='60px'
						height='auto'
						alt=''
					/>
					<h2>Let&apos;s talk</h2>
				</div>
				<div className={styles['content-wrapper']}>
					<div className={styles['letstalk-text']}>
						<p>To catch daily updates from the stock world, follow us</p>
					</div>
					<div className={styles['letstalk-contact']}>
						<a href='tel:+918075145434'>
							<div className={styles['contact-div']}>
								<HiPhone />
								<span>+91 80751 45434</span>
							</div>
						</a>
						<a href='tel:+917356266418'>
							<div className={styles['contact-div']}>
								<HiPhone />
								<span>+91 73562 66418</span>
							</div>
						</a>
						<a href='mailto:hellofinquest@gmail.com'>
							<div className={styles['contact-div2']}>
								<MdMail /> <span>hellofinquest@gmail.com</span>
							</div>
						</a>
					</div>
					<div className={styles['contact-icons-wrap']}>
						{social.map((item, index) => (
							<a key={index} href={item.href} target='_blank' rel='noreferrer noopener'>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className={styles['letstalk-icon']}
								>
									<img src={item.img} alt={item.alt} />
								</motion.div>
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
