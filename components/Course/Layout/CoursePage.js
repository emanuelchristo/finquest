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
const CoursePage = () => {
  return (
    <>
<WhatYouWillLearn/>

<HowWillYouSpent/>
<WhoIsThisFor/>
    <Curriculum/>
    <CommunityLayout/>
    <Faqs/>
    <CourseFee/>
    <GotAQuestion/>

    
    </>
  )
}

export default CoursePage