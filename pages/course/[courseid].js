import React from "react";
import CoursePage from "../../components/Course/Layout/CoursePage";
const Course = ({sheetdata}) => {
  const defaultData = [
    [ 'starter', '6 weeks', '20 Apr 2023', '16 Apr 2023' ],
    [ 'advanced', '8 Weeks', '25 Apr 2023', '16 Apr 2023' ],
    [ 'forex', '12 weeks', '10 Apr 2023', '15 Apr 2023' ]
  ]
  return <CoursePage sheetdata={sheetdata ?? defaultData}/>;
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