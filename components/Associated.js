import styles from './associated.module.css'

export default function Associated() {
	return (
		<div className='margin'>
			<div className={styles['associated']}>
				<img src='/images/upstox.svg' alt='Upstox' height='38px' width='auto' />
				<img src='/images/trading-view.svg' alt='Trading View' height='38px' width='auto' />
				<img src='/images/zerodha.svg' alt='Zerodha' height='38px' width='auto' />
			</div>
		</div>
	)
}
