import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles['footer']}>
			<div className={styles['top']}>
				<div className={styles['left']}>
					<Link href='/' passHref>
						<img className={styles['logo']} src='/images/logo-white.svg' height='32px' width='auto' />
					</Link>
					{/* <span className={styles['copyright']}>&copy; 2022 - All rights reserved</span> */}
				</div>
				<div className={styles['right']}>
					<div className={styles['link-group']}>
						<h3>Site</h3>
						<ul>
							<li>
								<Link href='/'>
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href='/about'>
									<a>About us</a>
								</Link>
							</li>
							<li>
								<Link href='/#memberships'>
									<a>Memberships</a>
								</Link>
							</li>
							<li>
								<Link href='/#faqs'>
									<a>FAQs</a>
								</Link>
							</li>
						</ul>
					</div>

					<div className={styles['link-group']}>
						<h3>Social</h3>
						<ul>
							<li>
								<a
									href='https://instagram.com/finquest_?utm_medium=copy_link'
									rel='noreferrer'
									target='_blank'
								>
									<div className={styles['social-wrapper']}>
										<BsInstagram className={styles['social-icon']} />
										<span>Instagram</span>
									</div>
								</a>
							</li>
							<li>
								<a
									href='https://www.youtube.com/channel/UC9U93Qk1XZcDbp36iSj6Fcg'
									rel='noreferrer'
									target='_blank'
								>
									<div className={styles['social-wrapper']}>
										<BsYoutube className={styles['social-icon']} />
										<span>Youtube</span>
									</div>
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/Finquest-102198582285743/'
									rel='noreferrer'
									target='_blank'
								>
									<div className={styles['social-wrapper']}>
										<BsFacebook className={styles['social-icon']} />
										<span>Facebook</span>
									</div>
								</a>
							</li>
							<li>
								<a href='https://twitter.com/Finquestsip' rel='noreferrer' target='_blank'>
									<div className={styles['social-wrapper']}>
										<BsTwitter className={styles['social-icon']} />
										<span>Twitter</span>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className={styles['link-group']}>
						<h3>Company</h3>
						<ul>
							<li>
								<Link href='/privacy-policy'>
									<a>Privacy Policy</a>
								</Link>
							</li>
							<li>
								<Link href='/terms-of-service'>
									<a>Terms of Service</a>
								</Link>
							</li>
							<li>
								<Link href='/payment-refund-and-cancellation-policy'>
									<a>Refund &amp; Cancellation</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles['bottom']}>
				<p>Build with ❤️ for 🇮🇳 who love to invest &amp; trade</p>
			</div>
		</footer>
	)
}
