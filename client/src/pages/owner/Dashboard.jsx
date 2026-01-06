import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets';

const Dashboard = () => {

  const [data, setData] = useState({
    totalCars: 0, 
    totalBookings: 0, 
    pendingBookings: 0, 
    completBookings: 0, 
    recentBookings: [],
    monthlyRvenue: 0,
  });

  useEffect(()=>{
    setData(dummyDashboardData)
  },[])
  return (
    <div className=''>

    </div>
  )
}

export default Dashboard