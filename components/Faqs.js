import styles from './faqs.module.css'

const faqs = [
	{
		question: 'Can fresh beginners join the stock market membership program?',
		answer: `Absolutely! You can start from the ground-up and learn all about stock trading and still benefit from our program. The basics are vital in the learing process and the sooner you learn it right, the more consistent the results.`,
	},
	{
		question: 'What is the duration of the programs?',
		answer: `The Programs lasts for 4 to 8 weeks. Once in, the students received One year access to loads of resources, live support and a community to help excel.`,
	},
	{
		question: 'What do I require to start trading?',
		answer: `Trading doesn't ask for a lot. An internet connected device, a demat account with at least 500/- in funds and the spark for financial freedom! We recommended Zerodha and Angel Broking for Indian Markets, due to low brokerages and excellent customer support.`,
	},
	{
		question: 'How do I pay fees for the courses?',
		answer: `We accept all credit cards, debit cards and UPI. International clients can use Razorpay or Paypal.`,
	},
]

export default function Faqs() {
	return (
		<div className='margin'>
			<section className={styles['faqs']}>
				<div>
					<h2>FAQs</h2>
					<div>4</div>
				</div>
				<div className={styles['content']}>
					{faqs.map((item, index) => (
						<Faq key={index} question={item.question} answer={item.answer} />
					))}
				</div>
			</section>
		</div>
	)
}

function Faq({ question, answer }) {
	return (
		<div>
			<h3>{question}</h3>
			<p>{answer}</p>
		</div>
	)
}
