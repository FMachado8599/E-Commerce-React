import React from 'react'
import Image from 'react-bootstrap/Image';
import ImagenProducto from "../multimedia/pc_zeus1.webp"

export const ItemListContainer = () => {
  return (

    <div className="productos">
      <h1>Esto es un e-commerce de productos</h1>
      <h2>Estoy tratando de tener paciencia con REACT</h2>
          <Image src={ImagenProducto} thumbnail />
    </div>
  )
}



