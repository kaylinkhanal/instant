'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Progress } from "@nextui-org/react";
import { IoMdCash } from "react-icons/io";

const CurrentRides = () => {
    const [currentRides, setCurrentRides] = useState([])
    useEffect(()=>{
        fetchAllRides()
    },[])

    const fetchAllRides =async()=>{
     const {data}= await axios.get('http://localhost:8000/rides')
     setCurrentRides(data)
    }
  return (
    <div >
        {currentRides.length> 0 && currentRides.map((item)=>{
            return(
            <div className='flex justify-center items-center bg-white text-black shadow-lg m-2'>
                <div className=' p-6 m-2 rounded'>{item.pickUp}</div>
                <div className='flex flex-col text-small p-4'> {item.vehicleType}<Progress size="sm" color='success' isIndeterminate aria-label="Loading..."className="max-w-md" />
                {item.distance} KM</div> 
                <div className=' p-4 m-2 rounded'>{item.destination} </div>
                <div className='flex flex-col' > <IoMdCash color='green' size={26}/><strong><span style={{fontSize:"15px"}}>Rs: {item.price}</span></strong></div>
                
            </div>
            
        )
        })}
    </div>
  )
}

export default CurrentRides