import styles from './about2.module.css'

export default function About2() {
    return (
        <div id='about' className='margin'>
            <section className={styles['about']}>
                <img className={styles['image']} src='\images\about-us2.png' alt='' width='40%' height='auto' />
                <div className={styles['spacer']}></div>
                <div className={styles['content']}>
                    <div className={styles['heading-wrapper']}>

                        {/* <h2>About us</h2> */}
                    </div>


                    <p>
                        We have been running finQ programs and have instructed 150 Professionals and Future Leaders in
                        various methods in the stock market to scale their game. We&apos;ve been getting a 100% student
                        satisfaction. We build a network, a network of trained professionals and the new entries or the
                        future leaders to be exact, to trade together &amp; grow together
                    </p>
                </div>

            </section>
            <section className={styles['text']}>
                <div className={styles['description']}>


                    <p>
                        At finQ we understand what Indian investors lack,
                        this is not their fault they are just unaware of the methods
                        and algorithms that can help them. Our students are trained to
                        be armed with the know-hows of the trading platform, interact with
                        a trusted community, and earn consistent profits through outstanding
                        coaching, whether on the national or worldwide markets.
                    </p>
                </div>
            </section>
        </div>
    )
}
