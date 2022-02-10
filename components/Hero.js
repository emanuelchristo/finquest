import { BsFillChatFill } from 'react-icons/bs'
import { FiArrowDown } from 'react-icons/fi'
import styles from './hero.module.css'

export default function Hero() {
	return (
		<div className={styles['hero']}>
			<div className={styles['hero-left']}>
				<div>
					<h1 className={styles['heading']}>Your unfair advantage in the stock market</h1>
					<h2 className={styles['sub-heading']}>
						A nunc lacus nisl, neque, quam. Vitae leo, eu nibh non in fermentum tincidunt. Vitae ac viverra
						egestas malesuada eleifend.
					</h2>
				</div>

				<button className={styles['talk-button']}>
					<BsFillChatFill />
					<span>Talk to us</span>
				</button>

				<button className={styles['learn-button']}>
					<span>Learn more</span>
					<FiArrowDown className={styles['arrow-icon']} />
				</button>
			</div>
		</div>
	)
}
