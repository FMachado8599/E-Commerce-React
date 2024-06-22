import React from 'react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../DataContext';

const CartProductList = () => {
  
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  useEffect(() =>{
  }, [cart])

  return (
    <div>
      {cart.map((producto) => (
          <div key={producto.id} className='productoCarrito d-flex justify-content-center'>
            <img className='imgProduct' style={{width:'50px', height:'50px'}} src={producto.img} alt={producto.nombre} />
            <h2 className='productName'>{producto.nombre}</h2>
            <h3 className='productPrice'>{producto.precio}<span className='currency'>USD</span></h3>
            <div className='productInfo'>
              <div>
                <button className="btn btn-secondary" onClick={() => removeFromCart(producto)} >-</button>
                <p>{producto.quantity}</p>
                <button className="btn btn-success" onClick={() => addToCart(producto)} >+</button>
              </div>

              <h3 className='productPrice'>{(producto.precio*producto.quantity).toFixed(1)}<span className='currency'>USD</span></h3>
            </div>
            <button className="btn btn-danger" onClick={() => deleteFromCart(producto)} >X</button>
          </div>
        ))}
    </div>
  )
}

export default CartProductList
