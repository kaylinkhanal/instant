'use client'
import CustomCard from '@/component/card/page'
import { Button } from '@nextui-org/react'
import React, {useState, useEffect} from 'react'

const RideHistory = () => {
  const [rideList, setRideList] = useState([])
  const fetchListOfRides =async()=>{
   const res=  await fetch('http://localhost:8000/rides')
   const data = await res.json()
   setRideList(data)
  }

  useEffect(()=>{
    fetchListOfRides()
  }, [] )
    return (
      <div>
        <div className='flex p-4'>
        {rideList.map((item,id)=>{
          return  <CustomCard item={item}/>
        })}
  
    
        </div>

      </div>
    )
  }
  
export default RideHistory