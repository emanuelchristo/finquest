import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styles from './faqs.module.css'
import Tabs from './Tabs'

export default function Faqs() {
	const [faqs, setFaqs] = useState([
		{
			id: 1,
			open: false,
			question: 'Can fresh beginners join the stock market membership program?',
			answer: `Absolutely! You can start from the ground-up and learn all about stock trading and still benefit from our program. The basics are vital in the learing process and the sooner you learn it right, the more consistent the results.`,
			tab: 'general',
		},
		{
			id: 2,
			open: false,
			question: 'What is the duration of the programs?',
			answer: `The Programs lasts for 4 to 8 weeks. Once in, the students received One year access to loads of resources, live support and a community to help excel.`,
			tab: 'learning',
		},
		{
			id: 3,
			open: false,
			question: 'What do I require to start trading?',
			answer: `Trading doesn't ask for a lot. An internet connected device, a demat account with at least 500/- in funds and the spark for financial freedom! We recommended Zerodha and Angel Broking for Indian Markets, due to low brokerages and excellent customer support.`,
			tab: 'learning',
		},
		{
			id: 4,
			open: false,
			question: 'How do I pay fees for the courses?',
			answer: `We accept all credit cards, debit cards and UPI. International clients can use Razorpay or Paypal.`,
			tab: 'payment',
		},
		{
			id: 5,
			open: false,
			question: 'I am in a different time-zone. Can I join the program?',
			answer: `We live in a flat world; as long as you can manage your joining time, we welcome you to join the program. (Eg: USA, APAC, Middle East, etc.)`,
			tab: 'general',
		},
		{
			id: 6,
			open: false,
			question: 'How is this worth the price?',
			answer: `Quite frankly, because it works, we measure your success by program KPIs. Our program has many sessions and each session has an outcome. We have been getting a 91 NPS score for our program structure and process to help them achieve several outcomes. Twenty incredible Traders who have built huge portfolios or have super expertise will be in this program to coach you. As a result, you will gain high value and several outcomes.`,
			tab: 'payment',
		},
		{
			id: 7,
			open: false,
			question: 'Will I get access to mentors?',
			answer: `The program mentors will host their expertise sessions to share learnings, best practices and Q&A sessions for the cohort. You get to interact with them during their session and when they are available in the community hub`,
			tab: 'learning',
		},
		{
			id: 8,
			open: false,
			question: 'I am working in a company, can I attend?',
			answer: `Yes, this program is designed for Professionals, Founders, CXOs and Leaders.`,
			tab: 'general',
		},
	])

	const [tab, setTab] = useState('general')

	function handleClick(id) {
		let temp = faqs.map((item) => {
			if (item.id === id) return { ...item, open: !item.open }
			return { ...item, open: false }
		})
		setFaqs(temp)
	}

	return (
		<div id='faqs' className='margin'>
			<section className={styles['faqs']}>
				<div className={styles['heading-wrapper']}>
					<h2>FAQs</h2>
					<div className={styles['faqs-count']}>{faqs.length}</div>
				</div>
				<div className={styles['tab-wrapper']}>
					<Tabs
						tabs={[
							{ title: 'General', value: 'general' },
							{ title: 'Learning', value: 'learning' },
							{ title: 'Payment', value: 'payment' },
						]}
						selected={tab}
						onClick={setTab}
					/>
				</div>
				<div className={styles['content']}>
					{faqs
						.filter((item) => item.tab === tab)
						.map((item) => (
							<Faq
								key={item.id}
								question={item.question}
								answer={item.answer}
								open={item.open}
								onClick={() => handleClick(item.id)}
							/>
						))}
				</div>
			</section>
		</div>
	)
}

const faqAnimation = {
	initial: {
		height: 0,
	},
	animate: {
		height: 'auto',
	},
	exit: {
		height: 0,
	},
}

function Faq({ question, answer, open, onClick }) {
	return (
		<div className={`${styles['faq']} ${open ? styles['open'] : ''}`}>
			<div>
				<h3 className={styles['question']}>{question}</h3>
				<AnimatePresence>
					{open && (
						<motion.p
							variants={faqAnimation}
							initial='initial'
							animate='animate'
							exit='exit'
							className={styles['answer']}
						>
							{answer}
						</motion.p>
					)}
				</AnimatePresence>
			</div>
			<div className={styles['arrow-wrapper']} onClick={onClick}>
				<svg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M1 1.5L9 9.5L17 1.5' stroke='black' strokeWidth='2' />
				</svg>
			</div>
		</div>
	)
}
