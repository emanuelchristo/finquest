import '../assets/fonts/gilroy/stylesheet.css'
import '../styles/variables.css'
import '../styles/global.css'
import Head from 'next/head'
import Snackbar from '../components/SnackBar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Finquest - Start learning how to invest &amp; trade in stock market easily.</title>
				<link rel='icon' type='image/png' href='/favicon.png'></link>
			</Head>
			<Snackbar message=' 🎉  Flat ₹2499 off for first 50 people!' />
			<Navbar />
			<Component {...pageProps} />
			<Footer />

		</div>
	)
}

export default MyApp
