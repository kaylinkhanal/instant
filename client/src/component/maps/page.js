
import { MapContainer, TileLayer,Marker,Popup, useMap } from 'react-leaflet'


import React from 'react'

import "leaflet/dist/leaflet.css";

import {  iconPerson  } from './icon';
import { useSelector } from 'react-redux';

const Map = () => {
 const {pickUpCoords}= useSelector(state=>state.location)

  return (

 <MapContainer center={[27.70169, 85.3206]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  
   <Marker  draggable position={pickUpCoords}
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