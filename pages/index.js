import Head from 'next/head'
import About from '../components/About'
import Associated from '../components/Associated'
import Benefits from '../components/Benefits'
import Community from '../components/Community'
import Consultation from '../components/Consultation'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Letstalk from '../components/Letstalk'
import Pricing from '../components/Pricing'
import Quote from '../components/Quote'
import Reviews from '../components/Reviews'

export default function Home() {
	return (
		<div id='home'>
			<Head>
				<title>Finquest - Start learning how to invest &amp; trade in stock market easily.</title>
				<link rel='icon' type='image/png' href='/favicon.png'></link>
			</Head>
			<Header />
			<Associated />
			<div className='section-spacer'></div>
			<About />
			<div className='section-spacer'></div>
			<Benefits />
			<div className='section-spacer'></div>
			<Quote />
			<div className='section-spacer'></div>
			<Pricing />
			<div className='section-spacer'></div>
			<Reviews />
			<div className='section-spacer'></div>
			<Consultation />
			<div className='section-spacer'></div>
			<Faqs />
			<div className='section-spacer'></div>

			<Letstalk />
			<div className='section-spacer'></div>

			<Community />

			<Footer />
		</div>
	)
}
