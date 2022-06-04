import styles from './whyus.module.css'
export default function WhyUs1() {
    return (
        <div id='about' className='margin'>
            <section className={styles['benefits']}>
                <h2>Why Us?</h2>

            </section>
            <section className={styles['about1']}>

                <div className={styles['content1']}>
                    <div className={styles['heading-wrapper']}>

                        {/* <h2>About us</h2> */}
                    </div>
                    <p>
                        Collaboration and support are the keys to success. Learning is a lifelong
                        endeavor. We are, nevertheless, the finest at delivering everything we
                        recommend. Community-based training is a hidden gem that gives you a lot
                        more than just basic skills when it comes to stock trading. Finquest
                        is a network that allows you to trade alongside the greatest in the country,
                        ensuring that you never fall behind the times.
                    </p>
                </div>
                <img className={styles['image']} src='/images/whyus2.png' alt='' width='50%' height='auto' />

            </section>

        </div>
    )
}
