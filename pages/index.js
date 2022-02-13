import About from '../components/About'
import Associated from '../components/Associated'
import Benefits from '../components/Benefits'
import Consultation from '../components/Consultation'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'

export default function Home() {
	return (
		<div>
			<Header />
			<Associated />
			<About />
			<Benefits />
			<Pricing />
			<Reviews />
			<Consultation />
			<Faqs />
			<Footer />
		</div>
	)
}
