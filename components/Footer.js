import { BsInstagram, BsTwitter, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
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
					<span className={styles['copyright']}>&copy; 2022 - All rights reserved</span>
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
								<Link href='/#about'>
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
								<a>
									<div className={styles['social-wrapper']}>
										<BsInstagram className={styles['social-icon']} />
										<span>Instagram</span>
									</div>
								</a>
							</li>
							<li>
								<a>
									<div className={styles['social-wrapper']}>
										<BsTwitter className={styles['social-icon']} />
										<span>Twitter</span>
									</div>
								</a>
							</li>
							<li>
								<a>
									<div className={styles['social-wrapper']}>
										<BsWhatsapp className={styles['social-icon']} />
										<span>Whatsapp</span>
									</div>
								</a>
							</li>
							<li>
								<a>
									<div className={styles['social-wrapper']}>
										<BsLinkedin className={styles['social-icon']} />
										<span>LinkedIn</span>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className={styles['link-group']}>
						<h3>Company</h3>
						<ul>
							<li>
								<a>Privacy Policy</a>
							</li>
							<li>
								<a>Terms of Service</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles['bottom']}>
				<p>Built with ❤️ and lots of ☕️ in Kerala</p>
			</div>
		</footer>
	)
}
