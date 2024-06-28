import React, { createContext, useState, useEffect } from 'react';
import productosData from '../data/productos.json';
import categoriasData from '../data/categorias.json';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const DataContext = createContext();
const ToastContext = createContext();
const CartContext = createContext();

const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [cart, setCart] = useState([])

  useEffect(() =>{
    const productRef = collection(db, "productos")
  
    getDocs(productRef)
    .then((respuesta) => {
      
      setProductos(
        respuesta.docs.map((doc) => {
          console.log(doc);
          return { ...doc.data(), id: doc.id, }
          
        })
      )
    })
  }, [categorias])
  


const [count, setCount] = useState(0);
  useEffect(() => {
    setProductos(productosData);
    setCategorias(categoriasData);
  }, [count]);

  const showToast = (message) => {
    setShow(true);
    setToastMessage(message);
  };
  
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
    <DataContext.Provider value={{ productos, categorias }}>
      <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, deleteFromCart, precioTotal, cartQuantity}}>
        <ToastContext.Provider value={{ showToast, show, setShow, toastMessage }}>
          {children}
        </ToastContext.Provider>
      </CartContext.Provider>
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider, ToastContext, CartContext };