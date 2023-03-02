import React from "react";
import CoursePage from "../../components/Course/Layout/CoursePage";
const Course = () => {
  return <CoursePage />;
};


// export async function getServerSideProps() {
//   const res = await fetch(process.env.api_url)
//   const data = await res.json()
//   return { props: { data } }
// }
export default Course;
