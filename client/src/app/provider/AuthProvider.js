'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'


const AuthProvider = ({children}) => {
//     const router = useRouter()

//     const {isLoggedIn } = useSelector(state=>state.user)
//    useEffect(()=>{
//     if(!isLoggedIn){
//         router.push('/')
//     }
//    },[])
  return (
    <div className=''>{children}</div>
  )
}

export default AuthProvider