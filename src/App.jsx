import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from './layout/user'
import AdminLayout from './layout/admin'
import Home from './pages/user/home/index'
import Detail from './pages/user/detail/index'
import Contact from './pages/user/contact/index'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'
import Users from './pages/admin/Users'
import Search from './pages/user/search'
import Login from './layout/user/Auth/Login'
import { productApi } from './services/base'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLayout/>}>
            <Route element={<Home/>} index/>
            <Route path=":id" element={<Detail/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route element={<Dashboard/>} index/>
            <Route element={<Products/>} path='products'/>
            <Route element={<Users/>} path='users'/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
