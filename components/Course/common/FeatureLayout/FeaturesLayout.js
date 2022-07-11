import styles from './featurelayout.module.css'
import IconAndText from '../IconAndText/IconAndText'
const features = [
	{
		iconLink: '/icons/benefit-6.png',
		title: 'Money management techniques',
		
	},
	{
		iconLink: '/icons/benefit-2.png',
		title: 'Price action strategies',
		
	},
	{
		iconLink: '/icons/benefit-4.png',
		title: 'Momentum scanner tool',
		
	},
	{
		iconLink: '/icons/benefit-1.svg',
		title: 'Chart pattern analysis',
		
	},
	{
		iconLink: '/icons/benefit-pace.png',
		title: 'Position sizing'
	},

	{
		iconLink: '/icons/benefit-goal.png',
		title: 'Intelligent target and stop loss',
	},
]

export default function FeaturesLayout() {
	return (
		<div id='benefits' className='margin'>
			<section className={styles['benefits']}>
				<div className={styles['content-wrapper']}>
					{features.map((item, index) => (
						<IconAndText key={index} iconLink={item.iconLink} title={item.title} body={item.body} />
					))}
				</div>
			</section>
		</div>
	)
}

