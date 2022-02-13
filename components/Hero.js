import { BsFillChatLeftFill, BsEasel } from 'react-icons/bs'
import { FaRegHandshake } from 'react-icons/fa'
import styles from './hero.module.css'

export default function Hero() {
	return (
		<div className={styles['hero']}>
			<div className={styles['heading-wrapper']}>
				<h1>
					<span>Your unfair</span>
					<span>
						advantage<span className={styles['in-text-img']}></span> in the
					</span>
					<span style={{ fontWeight: 600 }}>stock market</span>
				</h1>
				<div className={styles['twinkle-wrapper']}>
					<img className={styles['twinkle-1']} src='/images/twinkle.svg' width='40px' height='auto' alt='' />
					<img className={styles['twinkle-2']} src='/images/twinkle.svg' width='40px' height='auto' alt='' />
				</div>
				<div className={styles['square']}></div>
				<div className={styles['circle']}></div>
				<div className={styles['circle-img-1']}></div>
				<div className={styles['circle-img-2']}></div>
				<div className={styles['pill-img-1']}></div>
			</div>
			<p className={styles['description']}>
				A nunc lacus nisl, neque, quam. Vitae leo, eu nibh non in fermentum tincidunt. Vitae ac viverra egestas
				malesuada eleifend.
			</p>
			<div className='flex items-center'>
				<button className={styles['talk-button']}>
					<BsFillChatLeftFill />
					<span>Talk to us</span>
				</button>
				<button className={styles['consultation-button']}>
					<FaRegHandshake className={styles['consultation-icon']} />
					<span>Consultation</span>
				</button>
			</div>
		</div>
	)
}
