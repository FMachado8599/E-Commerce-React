import React from 'react'
import carrito from '../../multimedia/icons/oven.png';

export const CartWidget = () => {
  return (
    <div className='carritoContainer'>
      <img className='carrito' src={carrito} alt="icono carrito" />
    </div>
  )
}
