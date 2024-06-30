'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Progress } from "@nextui-org/react";
import { IoMdCash } from "react-icons/io";
import { setNewLocations } from '@/redux/reducerSlices/locationSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { io } from "socket.io-client";

const socket = io("http://localhost:8000/");

const CurrentRides = () => {
    useEffect(()=>{
        socket.on('rides',(rides)=>{
            setCurrentRides(rides)
        })
      },[socket])
    const dispatch  = useDispatch()
    const [currentRides, setCurrentRides] = useState([])
    const { cardSelectionId,} = useSelector(state=>state.location)
    const { userDetails} = useSelector(state=>state.user)

    const statusTextOptions = [
        {name:'Accept Ride', value:'accepted'},
         {name: 'I have Picked Up The Passenger', value:'pickedUp'},
        {name :'I Completed My Drive', value:'completed'}
    ]
    const [currentStatus, setCurrentStatus] = useState(0)
    useEffect(()=>{
        fetchAllRides()
    },[])


   

    const fetchAllRides =async()=>{
     const {data}= await axios.get('http://localhost:8000/rides')
     setCurrentRides(data)
    }

    const changeStatus = async(item) => {
        try{
       
            setCurrentStatus(currentStatus + 1)
            setCurrentRides([item])
          
            if(currentStatus == 2){
                //suggest currently it is in picked up and we are about to completed
                fetchAllRides()
                setCurrentStatus(0)
                toast('Congrats you have completed your previous drive!! Onto the next one!!')
            }
        const {data}= await axios.patch('http://localhost:8000/ride-status/'+item._id, {
            status: statusTextOptions?.[currentStatus]?.value,
            riderId: userDetails._id
        })
        if(data && currentStatus === 0){
                socket.emit('acceptedRideDetails', data.ride)
        }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div >
        {currentRides.length> 0 ? currentRides.map((item)=>{
            return(
            <div onClick={()=>dispatch(setNewLocations(item))} style={{backgroundColor: cardSelectionId==item._id ? 'crimson': '#FFFDD0' }} className={`flex justify-center items-center text-black shadow-lg m-2 p-4 rounded-md`}>
                <div className=' p-6 m-2 rounded'>{item.pickUp}</div> 
                <div className='flex flex-col text-small p-4 max-w-md'> {item.vehicleType}<Progress size="sm" color='success' isIndeterminate aria-label="Loading..." />
                {item.distance} KM</div> 
                <div className=' p-4 m-2 rounded'>{item.destination} </div>
                <div className='flex flex-col' > <IoMdCash color='green' size={26}/><strong><span style={{fontSize:"15px"}}>Rs: {item.price}</span></strong></div>
                { cardSelectionId==item._id && <div><Button onClick={()=> changeStatus(item)} className='bg-white rounded m-2 '>{statusTextOptions?.[currentStatus]?.name}</Button></div>}
            </div>
            
        )
        }): <div className='flex justify-center items-center bg-white text-black shadow-lg m-2 p-4 rounded-md'>No rides request now!!</div>}
    </div>
  )
}

export default CurrentRides