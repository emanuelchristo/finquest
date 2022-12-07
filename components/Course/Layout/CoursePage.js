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

const CoursePage = () => {
  const [snackbar, setSnackbar] = useState(false);
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
      <Snackbar trigger={snackbar} />
      <Navbar />
      <Hero />
      <Subscription />
      <EnrollmentDate />
      <WhatYouWillLearn />
      <HowWillYouSpent />
      <StartNow />
      <WhoIsThisFor />
      <Curriculum />
      <CourseFee />
      <CommunityLayout />
      <Faqs />
      <Demo />
    </>
  );
};

export default CoursePage;
