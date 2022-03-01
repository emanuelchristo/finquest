import styles from './benefits.module.css'

const benefits = [
	{
		iconLink: '/icons/benefit-6.png',
		title: 'Cohort-based program',
		body: "Our cohort-based programs help you navigate the complexity of trading, uncover your own unique version of 'better' and take charge of your continued growth and renewal.",
	},
	{
		iconLink: '/icons/benefit-2.png',
		title: 'Live market assistance',
		body: 'Mentors come online during market hours to trade live, along with you. Real-time guidance and application promotes confidence.',
	},
	{
		iconLink: '/icons/benefit-4.png',
		title: 'Pre and post market discussion',
		body: 'There will be a special session every evening where we discuss about the events that happened during the market hours, and make students plot charts for the next trading session.',
	},
	{
		iconLink: '/icons/benefit-1.svg',
		title: 'Community access',
		body: "Join more traders like you. Explore what's new and get updates on the recent trends of trading and investing.",
	},

	{
		iconLink: '/icons/benefit-3.png',
		title: 'Learn financial hacks',
		body: 'Learn how money works & how you can take advantage of it. Promise, no boring classes/lessons included.',
	},

	{
		iconLink: '/icons/benefit-5.png',
		title: 'Trading camps',
		body: "We provide our students with an experience of a destination trading camp's are held we plan to locations like HImalayas, Wayanad or Munnar.",
	},
]

export default function Benefits() {
	return (
		<div id='benefits' className='margin'>
			<section className={styles['benefits']}>
				<h2>The finQ experience</h2>
				<div className={styles['content-wrapper']}>
					{benefits.map((item, index) => (
						<Benefit key={index} iconLink={item.iconLink} title={item.title} body={item.body} />
					))}
				</div>
			</section>
		</div>
	)
}

function Benefit({ iconLink, title, body }) {
	return (
		<div className={styles['benefit']}>
			<img src={iconLink} width='60px' height='auto' />
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	)
}
