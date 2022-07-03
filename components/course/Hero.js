import { FaGraduationCap, FaStar } from 'react-icons/fa';
import { BiLineChart } from 'react-icons/bi';
export default function Hero() {
    return (
        <div >
            {/* className="px-4 py-16 mx-auto flex-row gap-10 w-screen max-w-screen-2xl flex justify-center sm:max-w-xl md:max-w-full md:px-0 md:py-0 lg:max-w-screen-xl lg:px-8 lg:py-20" */}
            <div className="
            flex 
            xm:flex-col-reverse xm:mx-8
            sm:items-center
            xl:flex-row xl:w-10/12 xl:px-4 xl:py-16 xl:row-gap-10 xl:items-center xl:mx-auto
              gap-x-16 p-0   ">
                <div className="flex flex-col justify-center w-3/5 ">
                    <a
                        href="#"
                        className="items-center font-bold inline-block bg-[#2DB24E] text-[#ffffff] text-center text-xs leading-5 w-24 rounded-md py-1 mb-4">
                        BEGINNER
                    </a>
                    <div className="max-w-xl mb-6">
                        <h1 className="max-w-lg mb-8 font-sans text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl sm:leading-none">
                            Lorem ipsum dolor
                            sit amet.

                        </h1>
                        <div className="flex flex-row justify-between sm:grid-cols-2 ">
                            <div>
                                <p className="text-[#000000] font-medium pb-3">Trusted by 500+ learners</p>
                                <a
                                    href="#"
                                    className="px-6 py-3 rounded-full flex flex-row-reverse tracking-tight text-center w-24 bg-[#FBD929] font-bold justify-center items-center xl:p-2 xl:text-lg xl:font-medium xl:text-current">
                                    <FaStar className="order-last" />&nbsp;
                                    4.6/5
                                </a>
                            </div>
                            <div>
                                <p className="text-[#000000] font-bold">$500</p>
                                <span className='text-[#959DA8] font-medium'>Min capital</span>
                            </div>
                            <div>
                                <p className="text-[#000000] font-bold">Malayalam</p>
                                <span className='text-[#959DA8] font-medium'>Language</span>
                            </div>
                            <div>
                                <p className="text-[#000000] font-bold">1 month</p>
                                <span className='text-[#959DA8] font-medium'>Duration</span>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="items-center text-secondary inline-block font-bold bg-[#163AF4] text-[#ffffff] py-3 px-5 text-center text-sm leading-5 w-56 rounded-full">
                        Enroll for $5999
                    </a>
                    <div className="flex flex-row flex-nowrap my-6 gap-x-3 justify-between sm:grid-cols-2 h-36 ">
                        <div className="bg-[#F4F7F9] py-5 rounded-lg text-center text-lg font-semibold w-4/12 ">
                            <p className=" w-full py-2 px-6  text-lg text-[#000000]">
                                <div className='flex place-content-center'>
                                    <span className='text-3xl'><FaGraduationCap /></span>
                                </div>Zero fee<div>Challenge</div>
                            </p>
                        </div>
                        <div className="bg-[#F4F7F9] py-5 rounded-lg text-center font-semibold w-4/12">
                            <p className="py-2 px-6  text-lg text-[#000000]">
                                <div className='flex place-content-center'>
                                    <span className='text-3xl'><BiLineChart /></span>
                                </div>
                                Small group session
                                <div >
                                    1 : 5
                                </div>
                            </p>
                        </div>
                        <div className="bg-[#F4F7F9] py-5 rounded-lg text-center text-lg font-semibold w-4/12">
                            <p className="w-full py-2 px-6  text-lg text-[#000000]">
                                <div className='flex place-content-center '>
                                    <span className='text-3xl'><BiLineChart /></span>
                                </div>
                                Live Trading
                                <div >
                                    flexible Trading
                                </div>
                            </p>
                        </div>
                    </div>
                    <p className="text-[#000000]">last date to apply-<span className='font-bold'>29 June</span>---Upcoming cohort - <span className='font-bold'>1 July</span></p>
                </div>
                <div>
                    <img
                        alt="No alt"
                        src="./images/course-img_1.png"
                        className="object-cover float-left h-120  w-100  "
                    />
                </div>
            </div>
        </div>
    )
}