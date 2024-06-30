'use client'
import Map from '@/component/maps/page'
import React, { useEffect } from 'react'
import { io } from "socket.io-client";

const socket = io("http://localhost:8000/");

const RiderTrips = () => {
  useEffect(()=>{
    socket.on('connection');
  },[])


  return (
    <div >
        <Map/>
    </div>
  )
}

export default RiderTrips