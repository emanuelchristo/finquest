import styles from './about.module.css'

export default function About() {
	return (
		<div id='about' className='margin'>
			<section className={styles['about']}>
				<img className={styles['image']} src='/images/about-us.webp' alt='' width='50%' height='auto' />
				<div className={styles['spacer']}></div>
				<div className={styles['content']}>
					<div className={styles['heading-wrapper']}>
						<div className={styles['square']}></div>
						<div className={styles['circle']}></div>
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
		</div>
	)
}
