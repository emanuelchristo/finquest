import styles from './quote.module.css'

export default function Quote() {
	return (
		<div className='margin'>
			<section className={styles['quote']}>
				<div className={styles['content']}>
					<h3>
						Program designed and led by incredible{' '}
						<span className={styles['blue']}>Traders &amp; Leaders</span>
					</h3>
					<p>
						Traders and leaders who are market ready to earn profit in the stock market through thier
						dynamic trading methods.
					</p>
				</div>
				<img src='/images/quote.png' alt='' width='368px' height='auto' className={styles['image']} />
			</section>
		</div>
	)
}
