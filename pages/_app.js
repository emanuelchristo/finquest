import '../assets/fonts/gilroy/stylesheet.css'
import '../styles/variables.css'
import '../styles/global.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Snackbar from '../components/SnackBar'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Finquest - Start learning how to invest &amp; trade in stock market easily.</title>
				<link rel='icon' type='image/png' href='/favicon.png'></link>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />

		</div>
	)
}

export default MyApp
