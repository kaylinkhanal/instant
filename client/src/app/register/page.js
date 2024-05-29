'use client'
import { Button, Image, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const register = () => {
  return (
<div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
      <div className="border p-8 rounded border-gray-300 bg-white">
            <Image src="instantlogo.png" alt="logo" className='w-20 mx-40' />
            <h2 className="text-center text-3xl font-extrabold">
            Sign Up
            </h2>
            <Input type="text" label = "Username" variant="underlined" className="w-full m-4" placeholder="Username" />
            <Input type="email" label = "Email" variant="underlined" className="w-full m-4" placeholder="Enter email" />
            <Input type="password" label = "Password" variant="underlined" className="w-full m-4" placeholder="Enter your password" />
            <Input type="password" label = "Confirm Password" variant="underlined" className="w-full m-4" placeholder="Enter your password again" />
            <Button as={Link} href="/" type="button" className="w-full bg-blue-500 text-white"> Create an account </Button>
          <p className="text-sm m-2 text-center">Already have an account? <a as={Link} href="/" className="text-blue-600 font-semibold hover:underline">Login here</a></p>
      </div>
    </div>
  )
}

export default register