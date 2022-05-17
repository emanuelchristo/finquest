export default function Features() {
    return (
        <div className="py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="gap-12 grid sm:grid-cols-2 xl:grid-cols-3 xl:gap-16 xl:flex 2xl:flex">
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                            <span>
                                <img src="https://img.icons8.com/bubbles/100/000000/truck.png" />
                            </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-center mb-2">
                            Free Shipping
                        </h3>
                        <p className="text-lg text-center mb-2">
                            All purchases over $199 are eligible for free shipping via USPS First Class Mail.
                        </p>

                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                            <span>
                                <img src="https://img.icons8.com/bubbles/100/00000/card-in-use.png" />
                            </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-center mb-2">
                            Easy Payments
                        </h3>
                        <p className="text-lg text-center mb-2">
                            All payments are processed instantly over a secure payment protocol.
                        </p>

                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                            <span>
                                <img src="https://img.icons8.com/bubbles/100/000000/money.png" />
                            </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-center mb-2">
                            Money-Back Guarantee
                        </h3>
                        <p className="text-lg text-center mb-2">
                            If an item arrived damaged or you&apos;ve changed your mind, you can send it back for a full refund.
                        </p>

                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                            <span>
                                <img src="https://img.icons8.com/bubbles/100/000000/good-quality.png" />
                            </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-center mb-2">
                            Finest Quality
                        </h3>
                        <p className="text-lg text-center mb-2">
                            Designed to last, each of our products has been crafted with the finest materials.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}