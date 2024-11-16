import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router'
import SideBar from './sidebar'

const AdminLayout = () => {
  return (
    <>
        <Navbar/>
        <SideBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AdminLayout