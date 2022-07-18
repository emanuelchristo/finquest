import React from 'react'
import Button from '../common/Buttons/Button'
import FeaturesLayout from '../common/FeatureLayout/FeaturesLayout'
const WhatYouWillLearn = () => {
  return (
    <>
    <div className="margin">

    <h2 className='md:text-center mb-2'>What You will Learn</h2>
    <Button ButtonText="Curriculum" IconName="Book" BgColor="buttongreen" TextColor="white"/>
<FeaturesLayout/>
    </div>
    </>
  )
}

export default WhatYouWillLearn