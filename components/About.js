import styles from './about.module.css'

export default function About() {
	return (
		<section className={styles['about']}>
			<img src='/images/about-us.png' alt='' width='50%' height='auto' />
			<div className={styles['spacer']}></div>
			<div className={styles['content']}>
				<div className={styles['heading-wrapper']}>
					<div className={styles['square']}></div>
					<div className={styles['circle']}></div>
					<h2>About us</h2>
				</div>
				<p>
					Et aliquam non maecenas ut donec. Morbi nisl pretium viverra porta dolor gravida in. Feugiat nec
					varius sapien eu blandit massa, quam id. Mattis amet id facilisis habitasse molestie. Eu vulputate
					ut turpis in consequat etiam ultricies arcu.
				</p>
			</div>
		</section>
	)
}
