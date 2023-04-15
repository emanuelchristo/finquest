import React, { useState, useEffect } from "react";
import Faqs from "../Faqs/Faqs";

import WhatYouWillLearn from "../WhatYouWillLearn/WhatYouWillLearn";
import WhoIsThisFor from "../WhoIsThisFor/WhoIsThisFor";
import HowWillYouSpent from "../HowWillYouSpen/HowWillYouSpent";
import Curriculum from "../CurriculumBuilt/Curriculum";
import CommunityLayout from "../CommunityAccess/CommunityLayout";

import CourseFee from "../CourseFee/CourseFee";
import Hero from "../Hero/Hero";

import Subscription from "../Subscription/Subscription";
import EnrollmentDate from "../EnrollmentDate/EnrollmentDate";
import StartNow from "../StartNow/StartNow";
import Demo from "../Demo/Demo";
import Snackbar from "../SnackBar/SnackBar";
import Navbar from "../Navbar/Navbar";
import UpcomingBatches from "../UpcomingBatches/UpcomingBatches";
import TopTrader from "../TopTrader/TopTrader";
import OurSubscription from "../OurSubscriptions/OurSubscriptions";
import { useRouter } from "next/router";

const CoursePage = ({sheetdata}) => {
  const router = useRouter();
  const [selectedCourseId,setSelectedCourseId] = useState(router.query)
  const { courseid } = router.query;
  const [snackbar, setSnackbar] = useState(false);
  useEffect(()=>{
    if(router.query.courseid){
      setSelectedCourseId(router.query.courseid);
    }
  },[router])

  if (courseid=='starter')
      sheetdata=sheetdata[0]
  else if(courseid=='professional')
      sheetdata=sheetdata[1]
  else if(courseid=='forex')
      sheetdata=sheetdata[2]

  useEffect(function mount() {
    function onScroll() {
      var y = window.scrollY;
      if (y >= 1200 && screen.width <= 500) {
        setSnackbar(true);
      } else if (y >= 1000 && screen.width < 900) {
        setSnackbar(true);
      } else if (y >= 800 && screen.width > 900) {
        setSnackbar(true);
      } else {
        setSnackbar(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <>
      <Snackbar trigger={snackbar} sheetdata={sheetdata}/>
      <Navbar />
      <Hero />
      <Subscription />
      <EnrollmentDate sheetdata={sheetdata}/>
      <WhatYouWillLearn />
      <HowWillYouSpent />
      <WhoIsThisFor />
      <Curriculum />
      <StartNow />
      <UpcomingBatches courseid={courseid} sheetdata={sheetdata}/>
      {courseid!='forex'?
      <OurSubscription courseid={selectedCourseId}/>:
      <CourseFee />
      }
      <CommunityLayout />
      <Faqs />
      <Demo />
      <TopTrader/>
    </>
  );
};

export default CoursePage;
