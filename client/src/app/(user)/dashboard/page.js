'use client'
import React from 'react'
import vehicleType from '../../../../config/vehicleType.json'

import DashboardCard from './dashboardCard'
import { Button } from '@nextui-org/react'
import { setSelectedVehicle } from '@/redux/reducerSlices/ridesSlice'
import { useDispatch, useSelector } from 'react-redux'

const UserDashboard = () => {
  const dispatch = useDispatch()
  const {selectedVehicle} = useSelector(state=>state.ride)
  return (
    <div >
       <DashboardCard/>
       <div className='bg-white'> 
       <div style={{margin:'80px' ,zIndex:99}} className=' flex justify-center my-6'>
        <div className='w=[40%]'>
          {Object.keys(vehicleType).map((item)=>{
            const isSelectedItem = item === selectedVehicle
            return (
              <Button onClick={()=>dispatch(setSelectedVehicle(item))} className={`p-4 ${isSelectedItem? 'bg-black': 'bg-white'} ${isSelectedItem? 'text-white': 'text-black'} rounded-none shadow-lg border border-black`}>
              {item}
            </Button>
            )
          })}
     
          </div>
    
       </div>
      

       </div>
   
       {selectedVehicle}
    </div>
  )
}

export default UserDashboard