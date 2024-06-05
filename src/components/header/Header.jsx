import React from 'react'
import Navbar from './Navbar'
import { CartWidget } from './CartWidget'
import logo from "../../multimedia/ico_1.0.svg"
import { Link, NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <header className="header">
      <div className='logoTitle'>
      <Link to="/" className="navLink" >
        <img src={logo} className='mainLogo' alt="Logo de la tienda" style={{ cursor: 'pointer', height: '50px' }}/>
      </Link>
        <h1>Doux</h1>
      </div>
      <Navbar />
      <CartWidget />
    </header>
  )
}
