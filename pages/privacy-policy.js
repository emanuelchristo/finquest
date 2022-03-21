import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'
import styles from '../components/privacy-policy.module.css'

export default function PrivacyPolicy() {
    return (
    <>
        <Navbar/>
        <div className={styles['privacy-policy']}>
            <h1>Privacy Policy</h1>
            <div className={styles['body']}>
                <Content/>
            </div>
        </div>
        <Footer/>
    </>)
}