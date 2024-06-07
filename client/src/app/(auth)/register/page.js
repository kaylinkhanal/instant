'use client'
import { Button, Image, Input, RadioGroup, Radio } from '@nextui-org/react'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';

import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
const register = () => {
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('*Required'),
      email: Yup.string()
      .min(2, '*Too Short!')
      .max(50, '*Too Long!')
      .required('*Required'),
      password: Yup.string().min(8, '*Password must be 8 characters or more!')
      .max(50, 'Too Long!').required('*Required'),
      phoneNumber: Yup.string().max(11, '*Too Long!').min(9, '*Invalid Number!')
      .required('*Required')
    
      .matches(/^[0-9]+$/, '*Must be a number'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], '*Passwords do not match'),
      role: Yup.string().required('*Please Select an option')
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      fullName: '',
      email: '',
      password: '',
      role: '',
      confirmPassword: ''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      registerUser(values)
    },
  });

 const registerUser =async (values) => {
  try{
    const res=  await fetch('http://localhost:8000/register',{
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    toast(data.msg)
  }catch(err){
    toast(err);
  }

 }

  return (
    <form onSubmit={formik.handleSubmit}>

            <h2 className="text-center text-3xl font-extrabold">
            Sign Up
            </h2>
            <Input 
             id="phoneNumber"
             name="phoneNumber"
             onChange={formik.handleChange}
             value={formik.values.phoneNumber}
            type="text" label = "Phone Number" variant="underlined" className="w-full m-4" placeholder="Enter Phone Number" />
            <div className='text-red-500 text-small'>{formik.errors?.phoneNumber}</div>

            <Input
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            type="text" label = "Full Name"
             variant="underlined" 
             className="w-full m-4"
              placeholder="Enter Name" />
              <div className='text-red-500 text-small'>
              {formik.touched.fullName && formik.errors?.fullName}</div>

            <Input
             id="email"
             name="email"
             onChange={formik.handleChange}
             value={formik.values.email}
            type="email" label = "Email" variant="underlined" className="w-full m-4" placeholder="Enter email" />
            <div className='text-red-500 text-small'>
              {formik.touched.email && formik.errors?.email}</div>
            
            <Input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            type="password" label = "Password" variant="underlined" className="w-full m-4" placeholder="Enter your password" />
            <div className='text-red-500 text-small'>
              { formik.touched.password && formik.errors?.password}</div>

            <Input
                 id="confirmPassword"
                 name="confirmPassword"
                 onChange={formik.handleChange}
                 value={formik.values.confirmPassword}
            type="password" label = "Confirm Password" variant="underlined" className="w-full m-4" placeholder="Enter your password again" />
           <div className='text-red-500 text-small'>{
           
           formik.touched.confirmPassword && formik.errors?.confirmPassword}</div>
            <RadioGroup
              label="Select Role"
              orientation="horizontal"
              className="m-4"
              id="role"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
            >
              <Radio value="rider">Rider</Radio>
              <Radio value="passenger">Passenger</Radio>
            </RadioGroup>
            <div className='text-red-500 text-small m-1'>
              {formik.touched.role && formik.errors?.role}</div>
            
            <Button  type="submit" className="w-full bg-blue-500 text-white"> Create an account </Button>
            <p className="text-sm m-2 text-center">Already have an account? <a as={Link} href="/" className="text-blue-600 font-semibold hover:underline">Login here</a></p>
 
    </form>
  )
}

export default register