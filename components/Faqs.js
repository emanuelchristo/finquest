import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styles from './faqs.module.css'

export default function Faqs() {
	const [faqs, setFaqs] = useState([
		{
			open: false,
			question: 'Can fresh beginners join the stock market membership program?',
			answer: `Absolutely! You can start from the ground-up and learn all about stock trading and still benefit from our program. The basics are vital in the learing process and the sooner you learn it right, the more consistent the results.`,
		},
		{
			open: false,
			question: 'What is the duration of the programs?',
			answer: `The Programs lasts for 4 to 8 weeks. Once in, the students received One year access to loads of resources, live support and a community to help excel.`,
		},
		{
			open: false,
			question: 'What do I require to start trading?',
			answer: `Trading doesn't ask for a lot. An internet connected device, a demat account with at least 500/- in funds and the spark for financial freedom! We recommended Zerodha and Angel Broking for Indian Markets, due to low brokerages and excellent customer support.`,
		},
		{
			open: false,
			question: 'How do I pay fees for the courses?',
			answer: `We accept all credit cards, debit cards and UPI. International clients can use Razorpay or Paypal.`,
		},
	])

	function handleClick(index) {
		let temp = faqs.map((item, indx) => {
			if (index === indx) return { ...item, open: !item.open }
			return { ...item, open: false }
		})
		setFaqs(temp)
	}

	return (
		<div className='margin'>
			<section className={styles['faqs']}>
				<div className={styles['heading-wrapper']}>
					<h2>FAQs</h2>
					<div className={styles['faqs-count']}>{faqs.length}</div>
				</div>
				<div className={styles['content']}>
					{faqs.map((item, index) => (
						<Faq
							key={index}
							question={item.question}
							answer={item.answer}
							open={item.open}
							onClick={() => handleClick(index)}
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
