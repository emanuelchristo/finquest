import React from "react";
import CoursePage from "../../components/Course/Layout/CoursePage";
import { google } from "googleapis";
const Course = ({ title, starter, advanced,forex }) => {
  return <CoursePage starter={starter} advanced={advanced} forex={forex} />;
};

// export async function getServerSideProps() {
//   const res = await fetch(process.env.api_url)
//   const data = await res.json()
//   return { props: { data } }
// }
export default Course;

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
