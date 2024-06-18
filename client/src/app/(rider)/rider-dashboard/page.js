'use client'
import RiderCard from '@/component/riderCard/page'
import React from 'react'

const RiderDashboard = () => {
  return (
    <div className='flex justify-center items-center m-12 text-white'> 
        <RiderCard link="/rider-dashboard" title="DASHBOARD" image="https://cdn-icons-png.flaticon.com/512/6820/6820955.png"/>
        <RiderCard link="/rider-trips" title="MY TRIPS" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcQE0rs6vO8_UB81x5X_VE-7mCjHupIelZA&s"/>
    </div>
  )
}

export default RiderDashboard