import styles from './letstalk.module.css'
import { HiPhone } from 'react-icons/hi'
import { MdMail } from 'react-icons/md'

const icons = [
	{
		img: '/icons/instagram.svg',
	},
	{
		img: '/icons/twitter.svg',
	},
	{
		img: '/icons/linkedin.svg',
	},
]

export default function Letstalk() {
	return (
		<div className='margin'>
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
						<p>A nunc lacus nisl, neque, quam. Vitae leo</p>
					</div>
					<div className={styles['letstalk-contact']}>
						<div className={styles['contact-div']}>
							<HiPhone />
							<span>+91 80751 45434</span>
						</div>
						<div className={styles['contact-div']}>
							<HiPhone />
							<span>+91 73562 66418</span>
						</div>
						<div className={styles['contact-div2']}>
							<MdMail /> <span>hellofinquest@gmail.com</span>
						</div>
					</div>
					<div className={styles['contact-icons-wrap']}>
						{icons.map((icon, index) => (
							<div key={index} className={styles['letstalk-icon']}>
								<img src={icon.img} alt='' />
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
