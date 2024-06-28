import React, { useContext } from 'react'
import carrito from '../../multimedia/icons/oven.png';
import { CartContext } from '../DataContext';

export const CartWidget = ({showOffCanvas}) => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className='carritoContainer'>
      <div>
        <p className='cartQuantity'>{ cartQuantity() }</p>
      </div>
      <img className='carrito' onClick={() => showOffCanvas(true)} src={carrito} alt="icono carrito" />
    </div>
  )
}
