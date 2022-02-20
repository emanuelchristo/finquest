import { motion } from 'framer-motion'
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

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.2,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: -100 },
	show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, mass: 1 } },
}

export default function Benefits() {
	return (
		<div className='margin'>
			<section className={styles['benefits']}>
				<motion.h2
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0, transition: { delay: 0.25, type: 'spring', stiffness: 60 } }}
				>
					Benefits
				</motion.h2>
				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false }}
					className={styles['content-wrapper']}
				>
					{benefits.map((item, index) => (
						<Benefit key={index} iconLink={item.iconLink} title={item.title} body={item.body} />
					))}
				</motion.div>
			</section>
		</div>
	)
}

function Benefit({ iconLink, title, body }) {
	return (
		<motion.div variants={item} className={styles['benefit']}>
			<motion.img
				initial={{ scale: 0, opacity: 0, rotate: '120deg' }}
				whileInView={{
					scale: 1,
					opacity: 1,
					rotate: 0,
					transition: { delay: 0.6, type: 'spring', stiffness: 80, mass: 2 },
				}}
				src={iconLink}
				width='60px'
				height='auto'
			/>
			<motion.h3
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { delay: 0.25, duration: 0.75 } }}
			>
				{title}
			</motion.h3>
			<motion.p
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5, type: 'spring', stiffness: 60 } }}
			>
				{body}
			</motion.p>
		</motion.div>
	)
}
