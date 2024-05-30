'use client'
import { Button, Input, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
<div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
        <div className=" border p-8 rounded border-gray-300 bg-white">
          <Image src="instantlogo.png" alt="logo" className='w-20 mx-36' />
          <h2 className="text-center text-3xl font-extrabold">
            Log in to your account
          </h2>
              <Input variant="underlined" type="email" className="w-full m-4" label="Email address" />
              <Input type="password" variant="underlined" className="w-full m-4" label="Password" />
              <Button type="button" className="w-full text-white bg-blue-500 m-4"> Log in </Button>
              <p className="text-sm m-2 text-center">Are You New? <a as={Link} href="/register" className="text-blue-600 font-semibold hover:underline">Create an account</a></p>
        </div>
      </div>
  )
}

export default login