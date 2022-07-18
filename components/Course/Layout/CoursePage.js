import React from 'react'
import Faqs from '../Faq/Faqs'
import WhatYouWillLearn from '../WhatYouWillLearn/WhatYouWillLearn'
import FeaturesLayout from '../common/FeatureLayout/FeaturesLayout'
import WhoIsThisFor from '../WhoIsThisFor/WhoIsThisFor'
import HowWillYouSpent from '../HowWillYouSpen/HowWillYouSpent'
import Curriculum from '../CurriculumBuilt/Curriculum'
import CommunityLayout from '../CommunityAccess/CommunityLayout'
import GotAQuestion from '../GotAQuestion/GotAQuestion'
import CourseFee from '../CourseFee/CourseFee'
import Hero from '../Hero/Hero'
const CoursePage = () => {
  return (
    <>
    <Hero/>
<WhatYouWillLearn/>

<HowWillYouSpent/>
<WhoIsThisFor/>
    <Curriculum/>
    <CommunityLayout/>
    <CourseFee/>
    <Faqs/>
    <GotAQuestion/>

    
    </>
  )
}

export default CoursePage