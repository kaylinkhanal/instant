'use client'
import React, {useEffect, useState} from 'react'
import vehicleType from '../../../../config/vehicleType.json'
import getDistance from 'geolib/es/getDistance';
import {Progress} from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { Autocomplete,AutocompleteItem, Button, Input } from '@nextui-org/react'
import { setCurrentMapState, setDestinationAddress, setDestinationCords, setPickUpAddress, setPickUpCords } from '@/redux/reducerSlices/locationSlice'
import axios from 'axios';
import { useRouter } from 'next/navigation';
const DashboardCard = (props) => {
  const router = useRouter()
  const {pickUpCoords, destinationCoords, selectedPickUpAddress,selectedDestinationAddress,currentMapState}= useSelector(state=>state.location)
  const dispatch = useDispatch()
    const {selectedVehicle} = useSelector(state=>state.ride)
    const [riderSearchStart,setRiderSearchStart] = useState(false)
    const {userDetails, isLoggedIn} = useSelector(state=>state.user)
    const [value, setValue] = React.useState(0);
    const [searchResult, setSearchResult] = useState([])
    const [isPriceUpdated, setIsPriceUpdated] = useState(false)
    const [defaultPrice, setDefaultPrice] = useState(0)
    useEffect(()=>{
      setIsPriceUpdated(false)
    },[selectedVehicle])
    const [searchId, setSearchId]= useState(null)

    useEffect(()=>{
      console.log(searchId, searchResult)
      if(searchId && searchResult[searchId]?.geometry?.coordinates){
        debugger;
        if(currentMapState=== 'pickup'){
          dispatch(setPickUpCords(searchResult[searchId].geometry.coordinates))
        }else{
          dispatch(setDestinationCords(searchResult[searchId].geometry.coordinates))
        }
      }
    
    },[searchId])




  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);


    const updatePrice = (action)=> {
      debugger;
      if(!isPriceUpdated) {
        setDefaultPrice(props.totalPrice)
      }
      setIsPriceUpdated(true)
      if(Math.abs(defaultPrice-props.totalPrice) <= 500 ){
        action=== 'inc' ? props.setTotalPrice(props.totalPrice +100) : props.setTotalPrice(props.totalPrice -100)
      }
    }
    const fetchPlacesAutocomplete = async(address, type) => {
      try{
        if(type == 'pickup'){
          dispatch(setPickUpAddress(address))
        }else{
          dispatch(setDestinationAddress(address))
        }
        if(address){
          const res=   await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=490f9173e6a6441b98f94295be7b750d&limit=5`)
          const data = await res.json()
            setSearchResult(data.features)
            console.log("data",data)
        }
      }catch(err){
        console.log(err)
      }
 
    }

  const sendConfrimationRequest = async()=>{

    if(!isLoggedIn){
      return router.push('/login')
    }
    dispatch(setCurrentMapState('destination'))
    setRiderSearchStart(true)
   await axios.post('http://localhost:8000/rides', {
      pickUpCoords,
      destinationCoords,
      destination: selectedDestinationAddress,
      pickUp: selectedPickUpAddress,
      vehicleType:selectedVehicle,
      price: props.totalPrice,
      passengerId: userDetails._id,
      distance: props.distance
    })


  }

  return (
    <div >
        <div  style={{position:'relative',top:'100px',zIndex:999}} className='flex p-2 bg-white  shadow-lg m-12'>
          <div className='text-4xl w-[40%] p-12'>
          <strong>Faster</strong> <br/> more convenient<br/> in a new way
 
          <Autocomplete 
        label="Enter pick up location" 
        className="max-w-xs" 
        isDisabled={ currentMapState === 'destination'}
        inputValue={selectedPickUpAddress}
        onSelectionChange={(key)=> setSearchId(key)}
        onInputChange={(text)=> fetchPlacesAutocomplete(text ,'pickup')}
      >
            {searchResult.map((item,id) => (
          <AutocompleteItem   key={id} value={item?.features?.properties?.formatted}>
            {item?.properties?.formatted}
          </AutocompleteItem>
        ))}
      </Autocomplete>
  
       {currentMapState === 'destination' &&   
          <Autocomplete 
          label="Enter destination location" 
          className="max-w-xs" 
          inputValue={selectedDestinationAddress}
          onSelectionChange={(key)=> setSearchId(key)}
          onInputChange={(text)=> fetchPlacesAutocomplete(text, 'destination')}
        >
          {searchResult.map((item,id) => (
            <AutocompleteItem  key={id} value={item?.features?.properties?.formatted}>
              {item?.properties?.formatted}
            </AutocompleteItem>
          ))}
        </Autocomplete>
       }
          {currentMapState === 'pickup' ? (
            <Button
            onClick={()=> dispatch(setCurrentMapState('destination'))}
            className="bg-black rounded-none text-white my-6">Confirm Pick Up</Button>
          ): (
            <Button
            onClick={()=>sendConfrimationRequest()}
            className="bg-black rounded-none text-white my-6">Confirm Destination</Button>
          )}
   
          </div>
          <div className='p-4'>
            <Image src={"/"+selectedVehicle+'.png' }  className='h-200' height={500} width={500}/>
            
            <div className='p-2 border bg-black text-white border-black m-2'>
         
              {riderSearchStart &&   (<>
                <div className=' flex justify-center  items-center text-sm font-mono text-[#1AC964]'> Searching Riders NearBy. Please wait.
                <Button className='bg-[#1AC964] m-2'>Cancel</Button>
                </div>
                <Progress
                aria-label="Searching Rides..."
                size="md"
                value={ value }
                color="success"
                className="max-w-md"
              />
              </>)}
          { pickUpCoords[0] && destinationCoords[0] && selectedPickUpAddress && selectedDestinationAddress && (
          <>
            Estimated Price:  <Button  disabled={riderSearchStart} onClick={()=>updatePrice('dec')} className=' bg-white text-black m-2 text-2xl'>-</Button >  {props.totalPrice}  
             <Button disabled={riderSearchStart}  onClick={()=>updatePrice('inc')} className='bg-white text-black m-2 text-2xl'>+</Button> 
            <p>   Estimated Distance: {props.distance} km </p>
          </>
          
        ) } 
            </div>

          </div>

        </div>
    </div>
  )
}

export default DashboardCard