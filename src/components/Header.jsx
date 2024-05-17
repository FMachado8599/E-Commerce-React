import React from 'react'
import Navbar from './Navbar'
import { Carrito } from './Carrito'


export const Header = () => {
  return (
    <header className="header">
      <img src="../multimedia/react.svg" alt="Logo de la tienda" />
      <Navbar />
      <Carrito />
    </header>
  )
}
