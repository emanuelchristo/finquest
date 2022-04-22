import styles from './whyus.module.css'

export default function WhyUs3() {
    return (
        <div id='about' className='margin'>
            <section className={styles['about2']}>
                <img className={styles['image']} src='/images/whyus3.png' alt='' width='50%' height='auto' />
                <div className={styles['spacer']}></div>
                <div className={styles['content2']}>
                    <div className={styles['heading-wrapper']}>

                        {/* <h2>About us</h2> */}
                    </div>
                    <p>
                        The possibilities are boundless, and the interaction even more so,
                        with several, dedicated view-sharing platforms for segments including
                        equities, commodities, and international markets. What distinguishes us
                        from the competition? We consider all of your questions and feedback,
                        and we will always be there for you, whether you win or lose.
                    </p>
                </div>

            </section>

        </div>
    )
}
