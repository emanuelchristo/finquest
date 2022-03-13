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
		body: 'Community for traders and investors to find peers, seek mentorship and discover best practices. We empower young traders and investors to make their road to success more delightful and less lonely.',
	},
	{
		iconLink: '/icons/benefit-pace.png',
		title: 'Learn at your own pace',
		body: 'This course is designed to be very easy to learn. You can take the course at a time convenient for you. We also offer weekend parties if you are a full-time or  student.',
	},

	{
		iconLink: '/icons/benefit-hack.png',
		title: 'Learn financial hacks',
		body: 'Learn how money works & how you can take advantage of it. Promise, no boring classes/lessons included.',
	},

	{
		iconLink: '/icons/benefit-5.png',
		title: 'Trading camps',
		body: "An experience of a destination trading camp's at Himalayas, Wayanad or Munnar. These camps help to generate a very power-packed brainstorm section, to develop ideas & indeed connection to earn trade better.",
	},

	{
		iconLink: '/icons/benefit-goal.png',
		title: 'Set & achieve goals',
		body: "Plan and save funds for your short and long term needs. Set goals and start investing to complete them early through SIP's.",
	},
]

export default function Benefits() {
	return (
		<div id='benefits' className='margin'>
			<section className={styles['benefits']}>
				<h2>Benefits</h2>
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
			<div className={styles['heading-wrapper']}>
				<img src={iconLink} width='60px' height='auto' />
				<h3>{title}</h3>
			</div>
			<p>{body}</p>
		</div>
	)
}
