import About from '../components/About'
import Associated from '../components/Associated'
import Benefits from '../components/Benefits'
import Consultation from '../components/Consultation'
import Faqs from '../components/Faqs'
import Header from '../components/Header'

export default function Home() {
	return (
		<div>
			<Header />
			<Associated />
			<About />
			<Benefits />
			<Consultation />
			<Faqs />
		</div>
	)
}
