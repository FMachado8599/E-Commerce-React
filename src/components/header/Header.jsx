import React from 'react'
import Navbar from './Navbar'
import { CartWidget } from './CartWidget'
import logo from "../../multimedia/ico_1.0.svg"


export const Header = () => {
  return (
    <header className="header">
      <div className='logoTitle'>
        <img src={logo} className='mainLogo' alt="Logo de la tienda" />
        <h1>Doux</h1>
      </div>
      <Navbar />
      <CartWidget />
    </header>
  )
}
