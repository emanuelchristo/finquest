import React from "react";
import Faqs from "../../Faqs";

import WhatYouWillLearn from "../WhatYouWillLearn/WhatYouWillLearn";
import WhoIsThisFor from "../WhoIsThisFor/WhoIsThisFor";
import HowWillYouSpent from "../HowWillYouSpen/HowWillYouSpent";
import Curriculum from "../CurriculumBuilt/Curriculum";
import CommunityLayout from "../CommunityAccess/CommunityLayout";
import GotAQuestion from "../GotAQuestion/GotAQuestion";
import CourseFee from "../CourseFee/CourseFee";
import Hero from "../Hero/Hero";

import Navbar from "../../../components/Navbar";
import Subscription from "../Subscription/Subscription";
import EnrollmentDate from "../EnrollmentDate/EnrollmentDate";

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Subscription />
      <EnrollmentDate />
      <WhatYouWillLearn />
      <HowWillYouSpent />
      <WhoIsThisFor />
      <Curriculum />
      <CommunityLayout />
      <Faqs />
      <CourseFee />
      <GotAQuestion />
    </>
  );
};

export default CoursePage;
