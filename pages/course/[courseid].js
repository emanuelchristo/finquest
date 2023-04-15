import React from "react";
import CoursePage from "../../components/Course/Layout/CoursePage";
const Course = ({sheetdata}) => {
  return <CoursePage sheetdata={sheetdata}/>;
};


// export async function getServerSideProps() {
//   const res = await fetch(process.env.api_url)
//   const data = await res.json()
//   return { props: { data } }
// }
export default Course;


export async function getServerSideProps() {

  return {
    props: {
      sheetdata: [
        [ 'starter', '6 weeks', '22 Apr 2023', '16 Apr 2023' ],
        [ 'advanced', '8 Weeks', '25 Apr 2023', '16 Apr 2023' ],
        [ 'forex', '12 weeks', '10 Apr 2023', '15 Apr 2023' ]
      ]
    }
  }
}