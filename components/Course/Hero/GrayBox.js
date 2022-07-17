import React from 'react'

const GrayBox = ({imagepath,content1,content2}) => {
  return (
   <div className='bg-card-bg flex flex-col items-center justify-center py-4 px-6 w-52 h-32 rounded-2xl'>
   <img src={imagepath} alt="" width="20" height="20" />
   <div className='text-center text-base font-semibold'>{content1}</div>
   <div className='text-center text-base font-semibold'>{content2}</div>
   </div>
  )
}

export default GrayBox