import styles from './iconandtext.module.css'
function IconAndText({ iconLink, title, body }) {
	return (
		<div className={styles['benefit']}>
			<div className={styles['heading-wrapper']}>
				<img src={iconLink} width='60px' height='auto' />
				<h3>{title}</h3>
			</div>
			<p>{body}</p>
		</div>
	)
}
export default IconAndText