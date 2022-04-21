import styles from './whyus2.module.css'

export default function WhyUs2() {
    return (
        <div id='about' className='margin'>

            <section className={styles['about']}>
                <div className={styles['spacer']}></div>
                <div className={styles['content']}>
                    <div className={styles['heading-wrapper']}>

                        {/* <h2>About us</h2> */}
                    </div>
                    <p>
                        Collaboration and support are the keys to success. Learning is a lifelong
                        endeavor. We are, nevertheless, the finest at delivering everything we
                        recommend. Community-based training is a hidden gem that gives you a lot
                        more than just basic skills when it comes to stock trading. Cosmic Wealth
                        is a network that allows you to trade alongside the greatest in the country,
                        ensuring that you never fall behind the times.
                    </p>
                </div>
                <img className={styles['image']} src='/images/whyus2.png' alt='' width='50%' height='auto' />

            </section>

        </div>
    )
}
