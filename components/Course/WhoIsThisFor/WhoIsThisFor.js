import React from 'react'
import Button from '../common/Buttons/Button'
import FeaturesLayout from '../common/FeatureLayout/FeaturesLayout'
const WhoIsThisFor = () => {
  return (
    <>
    <div className='margin'>
<div className='flex'>
    <h2 className='md:text-center'>Who is this for</h2>
    <img src="/images/sparkle.png" alt=""width="70px" height="50px" className='imageclass md:hidden'/>

</div>
    <Button ButtonText="Enroll for &#8377;5999" IconName="card" BgColor="buttonyellow" TextColor="black"/>
    <FeaturesLayout/>
    </div>
    </>
  )
}

export default WhoIsThisFor