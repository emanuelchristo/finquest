import { BsFillChatLeftFill } from 'react-icons/bs'
import styles from './navbar.module.css'

export default function Navbar() {
	return (
		<nav className={styles['navbar']}>
			<img src='/images/logo.svg' height={32} width='auto' className={styles['logo']} />
			<ul className={styles['links-list']}>
				<li>
					<a>About us</a>
				</li>
				<li>
					<a>Benefits</a>
				</li>
				<li>
					<a>Pricing</a>
				</li>
				<li>
					<a>FAQs</a>
				</li>
			</ul>
			<button className={styles['talk-button']}>
				<BsFillChatLeftFill />
				<span>Talk to us</span>
			</button>
		</nav>
	)
}
