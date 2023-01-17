import Faqs from '..//Faqs/Faqs';
import Hero from '../Hero/Hero'
import RightPlace from '../RightPlace/RightPlace';
import Community from '../../Course/CommunityAccess/Community';
import Snackbar from '../../SnackBar';
import Navbar from '../../Navbar';
import WhatDoIGet from '../WhatDoIGet/WhatDoIGet';
import Subscription from '../Subscription/Subscription';

const ZeroFeeChallenge = () => {
  return (
    <>
       <Snackbar
        message={[
          "🎉 Flat ",
          <span id="offprice" key={1}>
            ₹7500 off for beginners!
          </span>,
          " (First 100 learners only) 🎉",
        ]}
      />
      <Navbar />
      <Hero/>
      <div className="section-spacer"></div>
      <div className="section-spacer"></div>
      <WhatDoIGet/>
      <div className="section-spacer"></div>
      <Subscription/>
      <div className="section-spacer"></div>
      <Faqs/>
      <Community/>
      <RightPlace/>
    </>
  );
};
export default ZeroFeeChallenge;
