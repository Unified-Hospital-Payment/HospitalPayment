import React from 'react'
import Sidebar from "./Dashboard/Sidebar/index"

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='w-1/6'>
      <Sidebar/>
      </div>
      <div className='bg-white w-1/5'>

      </div>
    </div>
  )
}

export default Dashboard
