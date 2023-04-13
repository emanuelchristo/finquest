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
import Link from "next/link";
import { google } from "googleapis";
export default function Home({ title, starter, advanced, forex }) {
  return (
    <div id="home">
      <Snackbar
        message={[
          `New batch on forex trading starting  on ${
            forex ? forex[2] : "april 13th"
          } ‼️ `,
          <Link
            target="_blank"
            href="/course/forex/"
            rel="noopener noreferrer"
            key={1}
          >
            <a id="offprice">REGISTER NOW</a>
          </Link>,
          " ‼️",
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
      <UpcomingEvents />
      <div className="section-spacer"></div>
      <Letstalk />
      <div className="section-spacer"></div>
      <Community />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const { id } = query;
  const range = `Sheet1!A1:D4`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });

  const [title, starter, advanced, forex] = response.data.values;

  return {
    props: {
      title,
      starter,
      advanced,
      forex,
    },
  };
}
