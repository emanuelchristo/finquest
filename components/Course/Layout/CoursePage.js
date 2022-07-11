import React from 'react'
import Faqs from '../Faq/Faqs'
import WhatYouWillLearn from '../WhatYouWillLearn/WhatYouWillLearn'
import FeaturesLayout from '../common/FeatureLayout/FeaturesLayout'
import WhoIsThisFor from '../WhoIsThisFor/WhoIsThisFor'
import HowWillYouSpent from '../HowWillYouSpen/HowWillYouSpent'
import Curriculum from '../CurriculumBuilt/Curriculum'
const CoursePage = () => {
  return (
    <>
<WhatYouWillLearn/>

<HowWillYouSpent/>
<WhoIsThisFor/>
    <Curriculum/>
    <Faqs/>
    
    </>
  )
}

export default CoursePage