import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const Review = () => {
  return (
    <div className='md:flex md:justify-center md:flex-col md:items-center'>
          <div className="font-medium text-base whitespace-nowrap">
            Trusted by 500+ learners
          </div>
          <div className="bg-green flex rounded-full w-16 p-2">
            <AiFillStar color="white" />
            <div className="text-white text-sm">4.6/5</div>
          </div>
        </div>
  )
}

export default Review