'use client'
import UserCard from '@/component/userCard/page'
import { Button, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineSend } from "react-icons/ai";

const Home = () => {
    const [userList, setUserList]= useState([])
   const {selectedUser}= useSelector(state=>state.chat)
   const {userDetails}=  useSelector(state=>state.user)

    const [message, setMessage] = useState('')
    useEffect(()=>{
        fetchAllUsers()
    },[])

    const fetchAllUsers = async()=>{
        const res=  await fetch('http://localhost:8000/users')
          const data = await res.json()
          setUserList(data)
    }
    const sendMessage = async()=>{
        const res=  await fetch('http://localhost:8000/messages',{
            method: 'POST',
            body: JSON.stringify({
                message: message,
                senderId: userDetails._id,
                receiverId:selectedUser._id
            }),
            headers: { 'Content-Type': 'application/json' }
          })
          const data = await res.json()
    }
  return (
    <div className='flex'>
        <div  className='flex flex-col'>
        {userList.map((item)=>{
            return <UserCard item={item}/>
        })}
        </div>
      
      <div className='bg-pink-50 h-[100vh] p-2 w-[100vw]'>
      {selectedUser?.fullName}
      <div className='h-[80vh] m-2 bg-white'>

      </div>
      <div className='flex'>
      <Input onChange={(e)=> setMessage(e.target.value)} value={message} type="text" color='white' placeholder='enter msg'  />
      <Button onClick={()=>sendMessage()}> <AiOutlineSend /></Button>
      </div>
 
      </div>
       
    </div>
  )
}

export default Home