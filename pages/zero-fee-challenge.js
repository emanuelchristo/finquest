import Faqs from '../components/ZeroFee/Faqs/Faqs';
import Hero from '../components/ZeroFee/Hero/Hero'
import RightPlace from '../components/ZeroFee/RightPlace/RightPlace';
import Community from '../components/Course/CommunityAccess/Community';
import Snackbar from '../components/SnackBar';
import Navbar from '../components/Navbar';
import WhatDoIGet from '../components/ZeroFee/WhatDoIGet/WhatDoIGet';
import Subscription from '../components/ZeroFee/Subscription/Subscription';

const ZeroFee = () => {
  return (
    <div id="about" className="margin">
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
    </div>
  );
};
export default ZeroFee;
