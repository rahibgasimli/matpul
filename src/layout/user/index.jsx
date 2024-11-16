import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router'

const UserL = () => {
  return (
    <>
      <header className='d-flex'>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default UserL