
import { MapContainer, TileLayer,Marker,Popup, useMap } from 'react-leaflet'


import React, { useState } from 'react'

import "leaflet/dist/leaflet.css";

import {  iconPerson  } from './icon';
import { useDispatch, useSelector } from 'react-redux';
import { setPickUpAddress } from '@/redux/reducerSlices/locationSlice';

const Map = () => {
 const dispatch = useDispatch()
 const {pickUpCoords}= useSelector(state=>state.location)
 const [ center, setCenter] = useState([27.70169, 85.3206])
  const handleDragEnd = async(e) => {
    const latLng = Object.values(e.target._latlng)

   const res= await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latLng[0]}&lon=${latLng[1]}&format=json&apiKey=490f9173e6a6441b98f94295be7b750d`)
   const data = await res.json()
   dispatch(setPickUpAddress(data.results[0].formatted))

    setCenter(latLng)
  }
  return (

 <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  
   <Marker eventHandlers={{
    dragend: handleDragEnd
   }}  draggable position={pickUpCoords}
   >
      </Marker>
    {/* <Marker draggable position={[27.70169, 85.3206]}>
      <Popup>
       Destination
      </Popup>
    </Marker> */}

  </MapContainer>
   
  )
}

export default Map