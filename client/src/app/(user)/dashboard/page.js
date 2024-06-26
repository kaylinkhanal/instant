'use client'
import React, {useEffect, useState } from 'react'
import vehicleType from '../../../../config/vehicleType.json'

import DashboardCard from './dashboardCard'
import { Button } from '@nextui-org/react'
import { setSelectedVehicle } from '@/redux/reducerSlices/ridesSlice'
import { useDispatch, useSelector } from 'react-redux'
import Maps from '@/component/maps/page'
import { getDistance } from 'geolib'
import { useRouter } from 'next/navigation'
const UserDashboard = () => {

  const {pickUpCoords, destinationCoords , selectedPickUpAddress,selectedDestinationAddress,}= useSelector(state=>state.location)
  const dispatch = useDispatch()
  const {selectedVehicle} = useSelector(state=>state.ride)
  const distance = getDistance(
    { latitude: pickUpCoords[0], longitude: pickUpCoords[1] },
    { latitude: destinationCoords[0] , longitude: destinationCoords[1]  }
)/1000

  useEffect(()=>{
    const pricePerUnitKm = vehicleType[selectedVehicle].pricePerUnitKm
    let initialPrice = pricePerUnitKm * distance
    setTotalPrice(initialPrice)
  },[selectedVehicle,selectedPickUpAddress,selectedDestinationAddress])

  const [totalPrice, setTotalPrice] = useState('')


  return (
    <div >
       <DashboardCard distance={distance} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
   
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