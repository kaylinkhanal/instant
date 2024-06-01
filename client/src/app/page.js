'use client'
import { Button, Input, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const login = () => {

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
    .min(3,'Invalid Username')
    .max(50,'Invalid Username')
    .required("*Cannot be empty") ,

    password: Yup.string()
    .min(3,'Invalid password')
    .max(50, 'Invalid Password')
    .required('*Cannot be empty')
  });

  const formik = useFormik({
    initialValues: {
      username:'',
      password:'',
    
    },

    validationSchema:SignupSchema,
    onSubmit: values => {
      debugger;
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
<div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
        <div className=" border p-8 rounded border-gray-300 bg-white">
          <Image src="instantlogo.png" alt="logo" className='w-20 mx-36' />
          <h2 className="text-center text-3xl font-extrabold">
            Log in to your account
          </h2>
              <Input variant="underlined" 
              id="username" 
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text" 
              className="w-full m-4"
              label="Phone Number or Email Address" />
              <div className='text-red-500 text-small m-1'>{formik.errors?.username}</div>

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