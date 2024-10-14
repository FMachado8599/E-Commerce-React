import { createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

const DataContext = createContext();
const ToastContext = createContext();
const CartContext = createContext();

const DataProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [cart, setCart] = useState([])

//----------------------------------BACKEND DATA----------------------------------//
const [productList, setProductList] = useState([])
const [categoryList, setCategoryList] = useState([])

useEffect(() => {
  /* Traer datos de Firebase */
  const productRef = collection(db, "productos")

  getDocs(productRef)
    .then((respuesta) => {
      setProductList(respuesta.docs.map((doc) => {return { ...doc.data(), id: doc.id, }}))
  })
}, []);

//----------------------------------TOAST----------------------------------//

  const showToast = (message) => {
    setShow(true);
    setToastMessage(message);
  };
//----------------------------------CART----------------------------------//
  const deleteFromCart = product => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart); 
  }

  const removeFromCart = product => {
    const productInCart = cart.findIndex(item => item.id === product.id)
    
    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      if (newCart[productInCart].quantity === 1) {
        newCart.splice(productInCart, 1);
      } else {
        newCart[productInCart].quantity -= 1;
      }
      setCart(newCart);
    }

  }

  const addToCart = product => {

    const productInCart = cart.findIndex(item => item.id === product.id)
    
    if(productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      setCart(newCart)
    }
    else{
      setCart(prevState =>([
        ...prevState,
        {
          ...product,
          quantity:1
        }
      ]))
    }
  
  }

  const clearCart = () => {
    setCart([])
  }

  const precioTotal = () => {
    return cart.reduce((acc, producto) => acc + producto.precio * producto.quantity, 0);
  }

  const cartQuantity = () => {
    return cart.reduce((acc,producto) => acc + producto.quantity, 0);
  }

  return (
    <DataContext.Provider value={{ productList, setProductList, categoryList, setCategoryList }}>
      <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, deleteFromCart, precioTotal, cartQuantity}}>
        <ToastContext.Provider value={{ showToast, show, setShow, toastMessage }}>
          {children}
        </ToastContext.Provider>
      </CartContext.Provider>
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataProvider, DataContext, ToastContext, CartContext };