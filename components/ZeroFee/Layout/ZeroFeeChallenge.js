import Faqs from "..//Faqs/Faqs";
import Hero from "../Hero/Hero";
import RightPlace from "../RightPlace/RightPlace";
import Community from "../../Course/CommunityAccess/Community";
import Snackbar from "../../SnackBar";
import Navbar from "../../Navbar";
import WhatDoIGet from "../WhatDoIGet/WhatDoIGet";
import Subscription from "../Subscription/Subscription";
import Link from "next/link";
const ZeroFeeChallenge = () => {
  return (
    <>
      <Snackbar
        message={[
          "New batch on forex trading starting  on april 13th ‼️ ",
          <Link target="_blank" href="/course/forex/" rel="noopener noreferrer" key={1}>
            <a id="offprice" >
              REGISTER NOW
            </a>
          </Link>,
          " ‼️",
        ]}
      />

      <br />
      <Navbar />
      <Hero />
      <div className="section-spacer"></div>
      <div className="section-spacer"></div>
      <WhatDoIGet />
      <div className="section-spacer"></div>
      <Subscription />
      <div className="section-spacer"></div>
      <Faqs />
      <Community />
      <RightPlace />
    </>
  );
};
export default ZeroFeeChallenge;
