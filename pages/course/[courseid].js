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


export async function getServerSideProps() {
  const req = await fetch('http://localhost:3000/api/sheet');
  const res = await req.json();

  return {
    props: {
      sheetdata: res.data
    }
  }
}