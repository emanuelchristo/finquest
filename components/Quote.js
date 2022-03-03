import styles from './quote.module.css'

export default function Quote() {
	return (
		<div className='margin'>
			<section className={styles['quote']}>
				<div className={styles['content']}>
					<h3>
						Program designed and led by Incredible<span> Founders &amp; Leaders</span>
					</h3>
					<p>
						We have been running Cohort programs and have coached 400+ Founders &amp; Leaders in various
						programs to scale their startup &amp; business ideas. We have been getting a 91+ NPS score for
						our program structure and process. Our Founders and Leaders network helps each other in the
						community to overcome challenges and grow their businesses.
					</p>
				</div>
				<img src='/images/quote.png' alt='' width='368px' height='auto' className={styles['image']} />
			</section>
		</div>
	)
}
