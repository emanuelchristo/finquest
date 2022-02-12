import styles from './benefits.module.css'

const benefits = [
	{
		iconLink: '/icons/benefit-1.png',
		title: 'Ultricies aliquam sollicitudin',
		body: 'Ullamcorper viverra nunc magna eu in molestie et. Urna, amet enim sed eget suscipit proin. Volutpat phasellus turpis cursus vitae',
	},
	{
		iconLink: '/icons/benefit-2.png',
		title: 'Sapien lectus quam cras mollis',
		body: 'Justo, ultricies vestibulum quis fringilla viverra ut metus id. Sollicitudin dignissim bibendum rutrum et facilisi. Nulla condimentum quis tincidunt.',
	},
	{
		iconLink: '/icons/benefit-3.png',
		title: 'Quis ipsum eget sodales sociis',
		body: 'Ac ac pulvinar vivamus diam. Cras purus, diam dictum ultrices massa tempus. Risus vitae massa.',
	},
	{
		iconLink: '/icons/benefit-4.png',
		title: 'A dolor rhoncus metus nec',
		body: 'Iaculis est dictum vulputate morbi. Dignissim arcu nunc, commodo aliquet sed tempor imperdiet tristique id. Tempus vulputate nibh.',
	},
]

export default function Benefits() {
	return (
		<div className='margin'>
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
			<img src={iconLink} width='60px' height='auto' />
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	)
}
