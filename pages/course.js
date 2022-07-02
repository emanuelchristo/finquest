
import Hero from '../components/course/Hero'
import Navbar from '../components/Navbar'
import styles from './styles.module.css'

export default function AboutUs() {
    return (
        <div id='home'>
            <div id='home' className={styles['nav-spacer']}></div>
            <Navbar />
            <div id='home' className={styles['about-spacer']}></div>
            <Hero />


        </div>
    )
}
