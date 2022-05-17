
import About1 from '../components/aboutUs/about1'
import About2 from '../components/aboutUs/about2'
import WhyUs1 from '../components/aboutUs/WhyUs1'
import WhyUs2 from '../components/aboutUs/WhyUs2'
import Navbar from '../components/Navbar'
import styles from './styles.module.css'
import Snackbar from '../components/SnackBar'

export default function AboutUs() {
    return (
        <div id='home'>
            <div id='home' className={styles['nav-spacer']}></div>
            <Snackbar message=' 🎉  Flat ₹2499 off for first 50 people!' />
            <Navbar />
            <div id='home' className={styles['about-spacer']}></div>
            <About1 />
            <div id='home' className={styles['about-spacer']}></div>
            <About2 />
            <div id='home' className={styles['about-spacer']}></div>
            <WhyUs1 />
            <WhyUs2 />


        </div>
    )
}
