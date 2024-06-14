'use client'
import React, {useEffect, useState} from 'react'
import vehicleType from '../../../../config/vehicleType.json'

import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { Autocomplete,AutocompleteItem, Button, Input } from '@nextui-org/react'
import { setPickUpAddress, setPickUpCords } from '@/redux/reducerSlices/locationSlice'
const DashboardCard = (props) => {
  const [formState, setFormState] = useState('pickUpState')
  const {pickUpCoords,selectedPickUpAddress}= useSelector(state=>state.location)
  const dispatch = useDispatch()
    const {selectedVehicle} = useSelector(state=>state.ride)
    const [searchResult, setSearchResult] = useState([])
  const [searchId, setSearchId]= useState(null)
  useEffect(()=>{
    console.log(searchId, searchResult)
    if(searchId && searchResult[searchId]?.geometry?.coordinates){
      debugger;
      dispatch(setPickUpCords(searchResult[searchId].geometry.coordinates))
    }
  
  },[searchId])

    const updatePrice = (action)=> {
      if(Math.abs(props.initialPrice-props.totalPrice) <= 500 ){
        action=== 'inc' ? props.setTotalPrice(props.totalPrice +100) : props.setTotalPrice(props.totalPrice -100)
      }
    }
    const fetchPlacesAutocomplete = async(address) => {
      try{
        dispatch(setPickUpAddress(address))
        if(address){
          const res=   await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=490f9173e6a6441b98f94295be7b750d&limit=5`)
          const data = await res.json()
            setSearchResult(data.features)
        }
      }catch(err){
        console.log(err)
      }
 
    }
  return (
    <div >
        <div  style={{position:'relative',top:'100px',zIndex:999}} className='flex p-2 bg-white  shadow-lg m-12'>
          <div className='text-4xl w-[40%] p-12'>
          <strong>Faster</strong> <br/> more convenient<br/> in a new way
          <Autocomplete 
        label="Enter pick up location" 
        className="max-w-xs" 
        isDisabled={ formState === 'destinationState'}
        inputValue={selectedPickUpAddress}
        onSelectionChange	={(key)=>console.log(key)}
        onInputChange={(text)=> fetchPlacesAutocomplete(text)}
      >
        {searchResult.map((item,id) => (
          <AutocompleteItem  key={id} value={item?.features?.properties?.formatted}>
            {item?.properties?.formatted}
          </AutocompleteItem>
        ))}
      </Autocomplete>
   
       {formState === 'destinationState' &&    <Input placeholder='Enter Destination Address'/>}
        
          <Button
          onClick={()=> setFormState('destinationState')}
          className="bg-black rounded-none text-white my-6">Confirm Pick Up</Button>
          </div>
          <div className='p-4'>
            <Image src={"/"+selectedVehicle+'.png' }  className='h-200' height={500} width={500}/>
            
            <div className='p-2 border bg-black text-white border-black m-2'>
            Estimated Price:  <Button onClick={()=>updatePrice('dec')} className=' bg-white text-black m-2 text-2xl'>-</Button >  {props.totalPrice}  
             <Button  onClick={()=>updatePrice('inc')} className='bg-white text-black m-2 text-2xl'>+</Button> 
        
            </div>
          </div>

        </div>
    </div>
  )
}

export default DashboardCard