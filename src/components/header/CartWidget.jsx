import React from 'react'
import carrito from '../../multimedia/icons/oven.png';

export const CartWidget = ({showOffCanvas}) => {

  return (
    <div className='carritoContainer'>
      <img className='carrito' onClick={() => showOffCanvas(true)} src={carrito} alt="icono carrito" />
    </div>
  )
}
