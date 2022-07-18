import React from 'react'
import Button from '../common/Buttons/Button'
import FeaturesLayout from '../common/FeatureLayout/FeaturesLayout'
const WhatYouWillLearn = () => {

  return (
    <>
    <div className="margin">

    <h2 className='md:text-center mb-2'>What You will Learn</h2>
    <div className="flex">

    <Button ButtonText="Curriculum" IconName="Book" BgColor="buttongreen" TextColor="white"/>
    </div>
<FeaturesLayout indicator="whatyouwilllearn"/>
    </div>
    </>
  )
}

export default WhatYouWillLearn