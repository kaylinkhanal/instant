import React from 'react'
import UserDashboard from './(user)/dashboard/page'
import UserLayout from './(user)/layout'


const MainPage = () => {
  return (
    <UserLayout>
      <UserDashboard/>
    </UserLayout>
  )
}

export default MainPage