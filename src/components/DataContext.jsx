import React, { createContext, useState, useEffect } from 'react';
import productosData from '../data/productos.json';
import categoriasData from '../data/categorias.json';

const DataContext = createContext();
const ToastContext = createContext();
const CartContext = createContext();


const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
const [count, setCount] = useState(0);
  useEffect(() => {
    setProductos(productosData);
    setCategorias(categoriasData);
  }, [count]);

  const showToast = (message) => {
    setToastMessage(message);
    setShow(true);
  };

  return (
    <DataContext.Provider value={{ productos, categorias }}>
      <ToastContext.Provider value={{ showToast, show, setShow, toastMessage }}>
        {children}
      </ToastContext.Provider>
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider, ToastContext };