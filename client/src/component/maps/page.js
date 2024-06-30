import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import React, { useState } from "react";

import "leaflet/dist/leaflet.css";

import { iconDestination, iconPickup } from "./icon";
import { useDispatch, useSelector } from "react-redux";
import {
  setDestinationAddress,
  setDestinationCords,
  setPickUpAddress,
  setPickUpCords,
} from "@/redux/reducerSlices/locationSlice";
import CurrentRides from "../current-rides/page";

const Map = () => {
  const dispatch = useDispatch();
  const { pickUpCoords, destinationCoords, currentMapState } = useSelector(
    (state) => state.location
  );
  const {userDetails} = useSelector(state=>state.user)
  const [center, setCenter] = useState([27.70169, 85.3206]);
  const handleDragEnd = async (e) => {
    const latLng = Object.values(e.target._latlng);

    const res = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latLng[0]}&lon=${latLng[1]}&format=json&apiKey=490f9173e6a6441b98f94295be7b750d`
    );
    const data = await res.json();
    dispatch(setPickUpAddress(data.results[0].formatted));
    dispatch(setPickUpCords([latLng[1], latLng[0]]));
    debugger;
    setCenter(latLng);
  };

  const handleDragEndDestination = async (e) => {
    const latLng = Object.values(e.target._latlng);

    const res = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latLng[0]}&lon=${latLng[1]}&format=json&apiKey=490f9173e6a6441b98f94295be7b750d`
    );
    const data = await res.json();
    dispatch(setDestinationAddress(data.results[0].formatted));
    dispatch(setDestinationCords([latLng[1], latLng[0]]));
    debugger;
    setCenter(latLng);
  };
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <div
        style={{
          position: "absolute",
          border: "1px dashed black ",
          zIndex: 999,
          left: "50px",
        }}
      >
         <div 
     style={{position:'absolute',height: '100vh', overflow:'scroll',  borderRadius:"15px", padding:"10px", zIndex:999 , left:'10px', top:'10px'}}>
  { userDetails.role === 'rider' &&  <div className=' font-extrabold text-large  bg-white p-4 rounded-md'><p className=' font-mono '>Incoming Ride Request......</p></div>}
    {userDetails.role === 'rider' &&  <CurrentRides />}
        </div>
     
      </div>
      <Marker
        eventHandlers={{
          dragend: handleDragEnd,
        }}
        draggable={currentMapState === "destination" ? false : true}
        position={pickUpCoords}
        icon={iconPickup}
      ></Marker>
      {(currentMapState !== "pickup" || userDetails.role == 'rider') && (
        <Marker
          eventHandlers={{
            dragend: handleDragEndDestination,
          }}
          draggable={true}
          position={destinationCoords}
          icon={iconDestination}
        ></Marker>
      )}
    </MapContainer>
  );
};

export default Map;
