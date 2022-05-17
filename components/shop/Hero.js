import styles from './hero.module.css'

import {
	motion
}

	from 'framer-motion'

export default function Hero() {
	return (<div className='margin'> <div className="grid gap-12 mx-auto mb-24 max-w-screen-xl text-left lg:my-20 lg:gap-20 xl:items-center xl:mb-24 xl:grid-cols-5 sm:mb-10 md:grid-cols-2"> <div className="order-2 col-span-1 text-gray-700 xl:col-span-2 md:order-1"> <h2 className="m-0 max-w-xl text-2xl leading-8 text-gray-900 font-bold sm:text-3xl sm:leading-9 md:text-4xl md:leading-10 lg:font-bold lg:text-4xl xl:text-5xl "> Goodies for Traders </h2> <p className="flex mx-0 mt-6 mb-0 max-w-xl text-lg leading-relaxed xl:leading-7"> <span className="flex items-center text-gray-500 text-sm gap-1"> <svg className="w-6 h-6 text-green-500"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"> <path strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M5 13l4 4L19 7"
		/> </svg> </span> &nbsp; 100% Free to use </p> <p className="flex mx-0 mt-6 mb-0 max-w-xl text-lg leading-relaxed xl:leading-7"> <span className="flex items-center text-gray-500 text-sm gap-1"> <svg className="w-6 h-6 text-green-500"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"> <path strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M5 13l4 4L19 7"
			/> </svg> </span> &nbsp; 80+ High-Quality Products </p> <p className="flex mx-0 mt-6 mb-0 max-w-xl text-lg leading-relaxed xl:leading-7"> <span className="flex items-center text-gray-500 text-sm gap-1"> <svg className="w-6 h-6 text-green-500"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"> <path strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M5 13l4 4L19 7"

				/> </svg> </span> &nbsp; Customer friendly service </p> <a className={
					styles['action-link']
				}

					href='#products'> <motion.button whileHover={
						{
							scale: 1.05
						}
					}

						whileTap={
							{
								scale: 0.95
							}
						}

						className={
							styles['action-button']
						}

					> Buy Now </motion.button> </a> </div> <div className="order-1 col-span-1 text-gray-700 xl:pt-0 xl:col-span-3 md:order-2 md:pt-6"> <img alt="No alt"
						src='/images/shop/shop-hero-image.svg'
						className="block self-start  h-auto align-middle rounded-lg shadow-xs w-full mx-auto "

					/> <div className={
						styles['decorations']
					}

					> <img className={
						styles['blue-red']
					}

						src='/icons/blue-red.svg' alt='' /> <img className={
							styles['violet-yellow']
						}

							src='/icons/violet-yellow.svg' alt='' /> <div className={
								styles['green']
							}

							></div> <div className={
								styles['violet']
							}

							></div> <img className={
								styles['twinkle-1']
							}

								src='/icons/twinkle-2.svg' alt='' /> <img className={
									styles['twinkle-2']
								}

									src='/icons/twinkle-2.svg' alt='' /> <img className={
										styles['rupee']
									}

										src='/icons/rupee.svg' alt='' /> <img className={
											styles['safe']
										}

											src='/icons/safe.svg' alt='' /> <img className={
												styles['bank']
											}

												src='/icons/bank.svg' alt='' /> <img className={
													styles['piggy-bank']
												}

													src='/icons/piggy-bank.svg' alt='' /> <img className={
														styles['trend-up']
													}

														src='/icons/trend-up.svg' alt='' /> <img className={
															styles['rocket']
														}

															src='/icons/rocket.svg' alt='' /> <img className={
																styles['wallet']
															}

																src='/icons/wallet.svg' alt='' /> <img className={
																	styles['coins']
																}

																	src='/icons/coins.svg' alt='' /> <img className={
																		styles['curly-1']
																	}

																		src='/icons/curly-arrow.svg' alt='' /> <img className={
																			styles['curly-2']
																		}

																			src='/icons/curly-arrow.svg' alt='' /> </div> </div> </div></div>)
}