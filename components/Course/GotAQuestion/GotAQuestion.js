import React from 'react'
import Button from '../common/Buttons/Button'
import Image from 'next/image'
const GotAQuestion = () => {
  return (
    <>
    <div className="grid margin grid-cols-2 md:grid-cols-1 justify-center items-center space-x-16 ">
        <div className="grid space-y-2 md:row-start-2">
            <div>
            <div className="relative top-3 right-4">

    <img src="/icons/questionicon.png" alt="" width="77px" height="52px"/>
            </div>
     <h2>Got a question</h2>

            </div>
     <p>We are happy to answer any questions you may have. Ask us anything about the mentorship programs, course structure or live trading sessions.</p>
     <div>

        <Button ButtonText="Talk to us" IconName="whatsapp" BgColor="buttonblue" TextColor="white"/>
     </div>
        </div>
        <div className='md:row-start-1'>

        <Image src="/images/question.png" alt="" width="478px" height="363px" quality={100}/>
        </div>
       
    </div>
    </>
  )
}

export default GotAQuestion