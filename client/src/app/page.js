'use client'
import { Button, Input, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToken, addUserDetails } from '@/redux/reducerSlices/userSlice';
import { useRouter } from 'next/navigation';


const login = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string()
    .min(3,'Invalid phoneNumber')
    .max(50,'Invalid phoneNumber')
    .required("*Cannot be empty")
    ,

    password: Yup.string()
    .min(3,'Invalid password')
    .max(50, 'Invalid Password')
    .required('*Cannot be empty')
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber:'',
      password:'',
    
    },

    validationSchema:SignupSchema,
    onSubmit: values => {
      loginUser(values)
    },
  });


 const loginUser =async (values) => {
  try{
    const res=  await fetch('http://localhost:8000/login',{
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    toast(data.msg)
    dispatch(addToken(data.token))
    dispatch(addUserDetails(data.user))
    console.log(res)
    if(res.statusText == 'OK'){
      router.push('/home')
    }

  }catch(err){
    toast(err.msg);
  }

 }
  return (
    <form onSubmit={formik.handleSubmit}>
<div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
        <div className=" border p-8 rounded border-gray-300 bg-white">
          <Image src="instantlogo.png" alt="logo" className='w-20 mx-36' />
          <h2 className="text-center text-3xl font-extrabold">
            Log in to your account
          </h2>
              <Input variant="underlined" 
              id="phoneNumber" 
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              type="text" 
              className="w-full m-4"
              label="Phone Number" />
              <div className='text-red-500 text-small m-1'>{formik.errors?.phoneNumber}</div>

              <Input type="password" 
              id="password" 
              onChange={formik.handleChange}
              value={formik.values.password}   
              variant="underlined" 
              className="w-full m-4"
               label="Password" />
               <div className='text-red-500 text-small m-1'>{formik.errors?.password}</div>

              <Button type="submit"  className="w-full text-white bg-blue-500 m-4"> Log in </Button>
              <p className="text-sm m-2 text-center">Are You New? <a as={Link} href="/register" className="text-blue-600 font-semibold hover:underline">Create an account</a></p>
        </div>
      </div>
      </form>
  )
}

export default login