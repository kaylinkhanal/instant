'use client'
import { Button, Image, Input, RadioGroup, Radio } from '@nextui-org/react'
import Link from 'next/link'
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
      password: Yup.string().min(2, '*Too Short!')
      .max(50, 'Too Long!').required('*Required'),
      phoneNumber: Yup.string().max(20, '*Too Long!').min(2, '*Too Short!')
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
      debugger;
    },
  });

 

  return (
    <form onSubmit={formik.handleSubmit}>
<div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
      <div className="border p-8 rounded border-gray-300 bg-white">
            <Image src="instantlogo.png" alt="logo" className='w-20 mx-40' />
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
              <div className='text-red-500 text-small'>{formik.errors?.fullName}</div>

            <Input
             id="email"
             name="email"
             onChange={formik.handleChange}
             value={formik.values.email}
            type="email" label = "Email" variant="underlined" className="w-full m-4" placeholder="Enter email" />
            <div className='text-red-500 text-small'>{formik.errors?.email}</div>
            
            <Input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            type="password" label = "Password" variant="underlined" className="w-full m-4" placeholder="Enter your password" />
            <div className='text-red-500 text-small'>{formik.errors?.password}</div>

            <Input
                 id="confirmPassword"
                 name="confirmPassword"
                 onChange={formik.handleChange}
                 value={formik.values.confirmPassword}
            type="password" label = "Confirm Password" variant="underlined" className="w-full m-4" placeholder="Enter your password again" />
           <div className='text-red-500 text-small'>{formik.errors?.confirmPassword}</div>
            <RadioGroup
              label="Select Role"
              orientation="horizontal"
              className="m-4"
              id="role"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
            >
              <Radio value="Rider">Rider</Radio>
              <Radio value="Passenger">Passenger</Radio>
            </RadioGroup>
            <div className='text-red-500 text-small m-1'>{formik.errors?.role}</div>
            
            <Button  type="submit" className="w-full bg-blue-500 text-white"> Create an account </Button>
            <p className="text-sm m-2 text-center">Already have an account? <a as={Link} href="/" className="text-blue-600 font-semibold hover:underline">Login here</a></p>
          
      </div>
    </div>
    </form>
  )
}

export default register