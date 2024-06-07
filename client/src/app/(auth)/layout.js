import { Image } from '@nextui-org/react'
import React from 'react'

const layout = ({children}) => {
  return (
<div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
      <div className="border p-8 rounded border-gray-300 bg-white">
            <Image src="instantlogo.png" alt="logo" className='w-20 mx-40' />
            {children}
            </div>
   </div>
  )
}

export default layout