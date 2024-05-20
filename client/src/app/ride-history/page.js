'use client'
import { Button, Input } from '@nextui-org/react'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'


const Card = (props) => {
    return (
      <div  className='p-4 m-12 shadow-lg w-[20%]'>
        {props.msg}
      </div>
    )
  }

  const Body =()=>{
    return (
        <Card msg="happy dashain"/>
    )
  }

  const Footer =()=>{
    return (
        <Card msg="happy teej"/>
    )
  }

const RideHistory = () => {
    return (
      <div>
        <Body/>
        <Footer/>

      </div>
    )
  }
  
  const RideHistory2 = () => {
  
    return (
      <div>
        <Footer/>
      </div>
    )
  }
  


  const Main =()=>{
    const z = useSelector(state=>state.product.wishListItems)
    return (
        <div>
          {JSON.stringify(z)}
            <RideHistory/>
            <RideHistory2/>
        </div>
    )
  }

  //parent child component
  // -> parent is a bigger peice
  // -> parent is super set of child

export default Main

