'use client'
import React, {useEffect, useState } from 'react'
import vehicleType from '../../../../config/vehicleType.json'

import DashboardCard from './dashboardCard'
import { Button } from '@nextui-org/react'
import { setSelectedVehicle } from '@/redux/reducerSlices/ridesSlice'
import { useDispatch, useSelector } from 'react-redux'
import Maps from '@/component/maps/page'
const UserDashboard = () => {
  const dispatch = useDispatch()
  const {selectedVehicle} = useSelector(state=>state.ride)

  useEffect(()=>{
    const pricePerUnitKm = vehicleType[selectedVehicle].pricePerUnitKm
    const distance = 3.5
    let initialPrice = pricePerUnitKm * distance
    setTotalPrice(initialPrice)
  },[selectedVehicle])
  const [totalPrice, setTotalPrice] = useState('')
    // function isMaxTime(time){
    //   if(time > 18 || time<6){
    //     price = price+100
    //   }
    // }
    // isMaxTime(10)
    // price


  return (
    <div >
       <DashboardCard totalPrice={totalPrice} setTotalPrice={setTotalPrice} initialPrice={'100'}/>
   
       <div className='bg-white'> 
       <div style={{zIndex:999}} className=' flex justify-center'>
        <div className='w=[40%]' style={{marginTop:'30px', zIndex:999}}>
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
       <div style={{marginTop: '-70px'}}>
    <Maps />
        
       </div>

       </div>
   

    </div>
  )
}

export default UserDashboard