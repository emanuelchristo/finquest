import styles from './about1.module.css'

export default function About1() {
    return (
        <div id='about' className='margin'>
            <div id='contact' className='margin'>
                <section className={styles['letstalk']}>
                    <div className={styles['heading-wrapper']}>
                        <img
                            className={styles['decoration']}
                            src='/images/lets-talk-decoration.svg'
                            width='60px'
                            height='auto'
                            alt=''
                        />
                        <h2>About Us</h2>
                    </div>

                </section>
            </div>
        </div>
    )
}
