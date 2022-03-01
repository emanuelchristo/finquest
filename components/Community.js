import styles from './community.module.css'

export default function Community() {
	return (
		<div className='margin'>
			<section className={styles['community']}>
				<img className={styles['image']} src='/images/community.png' alt='' width='260px' height='auto' />
				<h2>Join the community</h2>
				<p>Explore what&apos;s new and get updates on the recent trends of trading and investing.</p>
				<div className={styles['pills-wrapper']}>
					<div className={`${styles['pill']} ${styles['white']}`}>
						Free unlimited access for enrolled members
					</div>
					<div className={styles['pill']}>
						<span style={{ fontWeight: 600 }}>₹499</span> per year for others
					</div>
				</div>
				<img
					className={styles['arrow-1']}
					src='/images/community-arrow.svg'
					width='140px'
					height='auto'
					alt=''
				/>
				<img
					className={styles['arrow-2']}
					src='/images/community-arrow.svg'
					width='140px'
					height='auto'
					alt=''
				/>
				<div className={styles['footer-bar']}></div>
			</section>
		</div>
	)
}
