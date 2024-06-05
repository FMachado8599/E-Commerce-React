import React, { createContext, useState, useEffect } from 'react';
import productosData from '../data/productos.json';
import categoriasData from '../data/categorias.json';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setProductos(productosData);
    setCategorias(categoriasData);
  }, []);

  return (
    <DataContext.Provider value={{ productos, categorias }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };