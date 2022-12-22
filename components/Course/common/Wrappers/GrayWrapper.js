import React from 'react'

const GrayWrapper = ({children}) => {
  return (
    <div className='bg-card-bg rounded-2xl p-7 grid gap-3.5 max-w-sm min-h-[8.875rem]'>
        {children}
    </div>
  )
}

export default GrayWrapper