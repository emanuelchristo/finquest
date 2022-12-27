import About from "../components/About";
import Associated from "../components/Associated";
import Benefits from "../components/Benefits";
import Community from "../components/Community";
import Consultation from "../components/Demo";
import Faqs from "../components/Faqs";
import Features from "../components/Features";

import Header from "../components/Header";
import Letstalk from "../components/Letstalk";
import Pricing from "../components/Pricing";
import Quote from "../components/Quote";
import Reviews from "../components/Reviews";
import Rocket from "../components/Rocket";
import Store from "../components/Store";
import Snackbar from "../components/SnackBar";
import UpcomingEvents from "../components/UpcomingEvents";
export default function Home() {
  return (
    <div id="home">
      <Snackbar
        message={[
          "🎉🎉 Flat ",
          <span id="offprice" key={1}>
            ₹7500 off for beginners !
          </span>,
          " (First 100 learners only)",
        ]}
      />
      <Header />
      <Associated />
      <div className="section-spacer"></div>
      <About />
      <div className="section-spacer"></div>
      <Rocket />
      <div className="section-spacer"></div>
      <Benefits />
      <div className="section-spacer"></div>
      <Quote />
      <div className="section-spacer"></div>
      <Features />
      <div className="section-spacer"></div>
      <Pricing />
      <div className="section-spacer"></div>
      <Reviews />
      <div className="section-spacer"></div>
      <Consultation />
      <div className="section-spacer"></div>
      <Store />
      <div className="section-spacer"></div>
      <Faqs />
      <UpcomingEvents/>
      <div className="section-spacer"></div>
      <Letstalk />
      <div className="section-spacer"></div>
      <Community />
    </div>
  );
}
