import styles from './tabs.module.css'

export default function Tabs({ tabs, selected, onClick }) {
	return (
		<div className={styles['tabs']}>
			{tabs.map((tab) => (
				<Tab
					key={tab.value}
					title={tab.title}
					selected={selected === tab.value}
					onClick={() => onClick(tab.value)}
				/>
			))}
		</div>
	)
}

function Tab({ selected, title, onClick }) {
	return (
		<div onClick={onClick} className={`${styles['tab']} ${selected ? styles['selected'] : ''}`}>
			{title}
		</div>
	)
}
