'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

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
            return(<div className='flex justify-center items-center bg-white shadow-lg  m-2'>
                <div className=' p-4 m-2 rounded'>{item.pickUp}</div>
                <AiOutlineArrowRight/>
                <div className=' p-4 m-2 rounded'>desti</div>
            </div>)
        })}
    </div>
  )
}

export default CurrentRides