import NavBar from '@/component/navbar/page'
import React from 'react'

const UserLayout = ({children}) => {
  return (
    <div className='bg-black'>
        <NavBar/>
        {children}
        </div>
  )
}

export default UserLayout