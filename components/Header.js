import Navbar from './Navbar'
import Hero from './Hero'
import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles['header']}>
			<Navbar />
			<Hero />
		</header>
	)
}
