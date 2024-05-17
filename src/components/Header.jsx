import React from 'react'
import Navbar from './Navbar'
import { Carrito } from './Carrito'
import logo from "../multimedia/react.svg"


export const Header = () => {
  return (
    <header className="header">
      <div className='logoTitle'>
        <img src={logo} alt="Logo de la tienda" />
        <h1>FacuCloth</h1>
      </div>
      <Navbar />
      <Carrito />
    </header>
  )
}
