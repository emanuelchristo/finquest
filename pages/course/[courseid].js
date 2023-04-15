import React from "react";
import CoursePage from "../../components/Course/Layout/CoursePage";
const Course = ({sheetdata}) => {
  const defaultData = [
    {
      course: 'starter',
      duration: '6 weeks',
      start_date: '2023-04-19T18:30:00.000Z',
      week_end_date: '2023-04-15T18:30:00.000Z'
    },
    {
      course: 'advanced',
      duration: '8 Weeks',
      start_date: '2023-04-24T18:30:00.000Z',
      week_end_date: '2023-04-15T18:30:00.000Z'
    },
    {
      course: 'forex',
      duration: '12 weeks',
      start_date: '2023-04-09T18:30:00.000Z',
      week_end_date: '2023-04-14T18:30:00.000Z'
    }
  ]
  return <CoursePage sheetdata={sheetdata}/>;
};


// export async function getServerSideProps() {
//   const res = await fetch(process.env.api_url)
//   const data = await res.json()
//   return { props: { data } }
// }
export default Course;


export async function getServerSideProps() {
  const req = await fetch('https://script.google.com/macros/s/AKfycbz50wC_KLEM1Jt7iglgp7qO6qoxPr6cBHVMFncGltu_pbXBLx1qNyGb2K_zW2txMNbB/exec');
  const res = await req.json();
console.log(res.data);
  return {
    props: {
      sheetdata: res.data
    }
  }
}