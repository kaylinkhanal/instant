'use client'
import NavBar from '@/component/navbar/page'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


const RiderLayout = ({children}) => {
    const router = useRouter()
    const {isLoggedIn} = useSelector(state=>state.user)
useEffect(()=>{
    if(!isLoggedIn){
        router.push('/login')
    }
},[])
  return (
    <div className='bg-black h-[100vh]'>
        <NavBar/>
        {children}
      
        </div>
  )
}

export default RiderLayout