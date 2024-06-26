import React from 'react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../DataContext';
import { Link } from 'react-router-dom';


const CartProductList = ({setShowOffCanvas}) => {
  
  const { cart, addToCart, removeFromCart, deleteFromCart, precioTotal } = useContext(CartContext);

  console.log(precioTotal)

  return (
    <div className='cart'>
      <div>
        <div>
          {cart.map((producto) => (
              <div key={producto.id} className='productoCarrito d-flex'>
                <img className='imgCartProduct' src={producto.img} alt={producto.nombre} />
                <div className='cartProductInfo'>
                  <div className='cartNameRow'>
                    <h2 className='cartProductName'>{producto.nombre}</h2>
                    <button className="deleteCartProductButton" onClick={() => deleteFromCart(producto)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x deleteIcon" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    </button>
                  </div>
                  <p className='cartProductQuantity'>Cantidad: {producto.quantity}</p>
                  <div className='cartActionsRow'>
                    <h3 className='cartProductPrice'>{producto.precio}<span className='currency'>USD</span></h3>
                    <div className='cartProductActions'>
                        <button className="cartProductActionButton" onClick={() => removeFromCart(producto)} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-dash actionIcon" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                          </svg>
                        </button>
                        <p>{producto.quantity}</p>
                        <button className="cartProductActionButton" onClick={() => addToCart(producto)} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-plus actionIcon" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                          </svg>
                        </button>
                    </div>
                  </div>
        
                </div>
              </div>
            ))}
        </div>
        <div className='cartTotals'>
          <h2>Total:</h2>
          <h3>{precioTotal()} <span>USD</span></h3>
        </div>
      </div>
      <div className='goToCheckout'>
        <Link to='/checkout' onClick={() => setShowOffCanvas(false)} className='goToCheckoutButton'>
          Finalizar compra
        </Link>
      </div>
    </div>

  )
}

export default CartProductList;
