import React from 'react'
import Navbar from './Navbar'
import { CartWidget } from './CartWidget'
import logo from "../multimedia/react.svg"


export const Header = () => {
  return (
    <header className="header">
      <div className='logoTitle'>
        <img src={logo} alt="Logo de la tienda" />
        <h1>FacuCloth</h1>
      </div>
      <Navbar />
      <CartWidget />
    </header>
  )
}
