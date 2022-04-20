import Head from 'next/head'
import Footer from '../components/Footer'
import Snackbar from '../components/SnackBar'
import Navbar from '../components/Navbar'
import styles from './styles.module.css'

export default function Terms() {
    return (
        <div id='home'>
            <Head>
                <title>Finquest - Start learning how to invest &amp; trade in stock market easily.</title>
                <link rel='icon' type='image/png' href='/favicon.png'></link>
            </Head>
            <Snackbar message=' 🎉  Flat ₹2499 off for first 50 people!' />
            <Navbar />


            <div id='memberships' className='margin'>
                <section className={styles['pricing']}>
                    <div className={styles['heading-wrapper']}>
                        <h2>Terms and Condition</h2>
                    </div>
                    <p>
                        Terms and Condition <br /><br />
                    </p>
                </section>

            </div>


            <Footer />
        </div>
    )
}
