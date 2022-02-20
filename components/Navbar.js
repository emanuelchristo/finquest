import { BsFillChatLeftFill } from 'react-icons/bs'
import { IoMdMenu } from 'react-icons/io'
import styles from './navbar.module.css'

export default function Navbar() {
	return (
		<nav className={styles['navbar']}>
			<div className='flex items-center'>
				<IoMdMenu className={styles['menu-icon']} />
				<img src='/images/logo.svg' height={32} width='auto' className={styles['logo']} />
			</div>
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
				<span>Talk</span>
			</button>
		</nav>
	)
}
