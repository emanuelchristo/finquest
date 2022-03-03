import styles from './quote.module.css'

export default function Quote() {
	return (
		<div className='margin'>
			<section className={styles['quote']}>
				<div className={styles['content']}>
					<h3>
						Program designed and led by Incredible<span> Founders &amp; Leaders</span>
					</h3>
					<p className=' max-w-2xl'>Program designed and led by incredible Traders &amp; Leaders</p>
					<p className='  max-w-2xl mt-3'>
						Traders and leaders who are market ready to earn profit in the stock market through thier
						dynamic trading methods.
					</p>
				</div>
				<img src='/images/quote.png' alt='' width='368px' height='auto' className={styles['image']} />
			</section>
		</div>
	)
}
