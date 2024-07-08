import { useContext } from 'react'
import { CartContext } from '../DataContext';
import { Link } from 'react-router-dom';
import menos from '../../multimedia/icons/menos.svg'
import mas from '../../multimedia/icons/mas.svg'


const CartProductList = ({setShowOffCanvas}) => {
  
  const { cart, addToCart, removeFromCart, deleteFromCart, precioTotal } = useContext(CartContext);

  return (
    <div className='cart'>
      <div>
        <div>
          {cart.map((producto) => (
              <div key={producto.id} className='productoCarrito d-flex'>
                <img className='imgCartProduct' src={producto.thumbnail} alt={producto.nombre} />
                <div className='cartProductInfo'>
                  <div className='cartNameRow'>
                    <h2 className='cartProductName'>{producto.nombre}</h2>
                    <button className="deleteCartProductButton" onClick={() => deleteFromCart(producto)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x deleteIcon" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    </button>
                  </div>
                  <p className='cartProductQuantity'>Cantidad: {producto.quantity}</p>
                  <div className='cartActionsRow'>
                    <h3 className='cartProductPrice'>{producto.precio}<span className='currency'>USD</span></h3>
                    <div className='cartProductActions'>
                        <button className="cartProductActionButton" onClick={() => removeFromCart(producto)} >
                          <img className='actionIcon' src={menos} alt="Simbolo de menos" />
                        </button>
                        <p>{producto.quantity}</p>
                        <button className="cartProductActionButton" onClick={() => addToCart(producto)} >
                          <img className='actionIcon' src={mas} alt="Simbolo de mas" />
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
