import Faqs from '../components/ZeroFee/Faqs';
import Hero from '../components/ZeroFee/Hero'
import TopTrader from '../components/ZeroFee/TopTrader';
import Community from '../components/Course/CommunityAccess/Community';
import Snackbar from '../components/SnackBar';
import Navbar from '../components/Navbar';

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
      <Faqs/>
      <Community/>
      <TopTrader/>
    </div>
  );
};
export default ZeroFee;
