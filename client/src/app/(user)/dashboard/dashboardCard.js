
import React from 'react'
import vehicleType from '../../../../config/vehicleType.json'

import { useSelector } from 'react-redux'
import Image from 'next/image'
import { Button, Input } from '@nextui-org/react'
const DashboardCard = (props) => {
    const {selectedVehicle} = useSelector(state=>state.ride)
  return (
    <div >
        <div  style={{position:'relative',top:'100px',zIndex:99}} className='flex p-2 bg-white  shadow-lg m-12'>
          <div className='text-4xl w-[40%] p-12'>
          <strong>Faster</strong> <br/> more convenient<br/> in a new way
          <Input className='my-6' placeholder='Enter PickUp Address'/>
          <Input placeholder='Enter Destination Address'/>
          <Button className="bg-black rounded-none text-white my-6">Search Rides</Button>
          </div>
          <div className='p-4'>
            <Image src={"/"+selectedVehicle+'.png' }  className='h-200' height={500} width={500}/>
            
            <div className='p-2 border bg-black text-white border-black m-2'>
            Estimated Price:  <Button onClick={()=>props.setTotalPrice(props.totalPrice +100)} className=' bg-white text-black m-2 text-2xl'>-</Button >  {props.totalPrice}   <Button className='bg-white text-black m-2 text-2xl'>+</Button>  
            </div>
          </div>

        </div>
    </div>
  )
}

export default DashboardCard