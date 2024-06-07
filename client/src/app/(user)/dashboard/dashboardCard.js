import React from 'react'
import vehicleType from '../../../../config/vehicleType.json'

import { useSelector } from 'react-redux'
import Image from 'next/image'
const DashboardCard = () => {
    const {selectedVehicle} = useSelector(state=>state.ride)
  return (
    <div >
        <div  style={{position:'relative',top:'100px'}} className='flex p-2 bg-white  shadow-lg m-12'>
          <div className='text-4xl w-[40%] p-12'>
          <strong>Faster</strong> <br/> more convenient<br/> in a new way
          </div>
          <div className='p-4'>
            <Image src={"/"+selectedVehicle+'.png' }  className='h-200' height={500} width={500}/>
          </div>
      
        </div>
    </div>
  )
}

export default DashboardCard