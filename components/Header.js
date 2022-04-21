import Hero from './Hero'
import styles from './header.module.css'
import Navbar from './Navbar'

export default function Header() {
	return (
		<header className={styles['header']}>
			<Navbar />
			<Hero />
		</header>
	)
}
