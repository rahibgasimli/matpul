import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="logo">MatPul</h2>
        <ul className="menu d-flex">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
        <div className='d-flex align-items-center'>
          <form>
            <input type="search" name="" id="" />
            <button>Search</button>
          </form>
          <div className="basket">
            <Link to="/cart"><CiShoppingCart /></Link>
            <Link to="/favorite"><MdOutlineFavoriteBorder/></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar