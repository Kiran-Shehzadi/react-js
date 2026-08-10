import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-18 pt-3  flex items-center gap-5 h-[90vh]  px-10'>
        <LeftContent />
        <RightContent users={props.users}  />
    </div>
  )
}

export default Page1Content