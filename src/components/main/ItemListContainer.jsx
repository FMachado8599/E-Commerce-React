import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext, CartContext, ToastContext } from '../DataContext';


export const ItemListContainer = ({ selectedCategory }) => {
  const { productos } = useContext(DataContext);
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  
  const maxProductPrice = Math.max(...productos.map(producto => parseFloat(producto.precio)));

  const [minPrice, setMinPrice] = useState(0.0);
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);

  const filteredProducts = productos.filter(producto => {
    const price = parseFloat(producto.precio);
    return (selectedCategory === "" || producto.categoria_id === selectedCategory) && price >= minPrice && price <= maxPrice;
  });

  const handleAddToCart = (producto) => {
    addToCart(producto);
    showToast(` ${producto.nombre} x ${producto.quantity??1}`);
  };

  const handleRemoveFromCart = (producto) => {
    removeFromCart(producto);
    showToast(` ${producto.nombre} x ${producto.quantity??1}`);
  };

  return (
    <section className="espacioProductos">   
      <h1 className='tituloItemListContainer'>Productos</h1>

      <div className="filter">
        <label>
          Min Price:
          <input
            type="range"
            min="0.0"
            max={maxProductPrice}
            step="0.1"
            value={minPrice}
            onChange={e => {
              const value = parseFloat(e.target.value);
              if (value <= maxPrice) setMinPrice(value);
            }}
          />
        </label>
        <label>
          Max Price:
          <input
            type="range"
            min="0.0"
            max={maxProductPrice}
            step="0.1"
            value={maxPrice}
            onChange={e => {
              const value = parseFloat(e.target.value);
              if (value >= minPrice) setMaxPrice(value);
            }}
          />
        </label>
        <div>
          <span>Min: ${minPrice.toFixed(2)}</span>
          <span>Max: ${maxPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className='productList'>
        {filteredProducts.map((producto) => (
          <div key={producto.id} className='producto'>
            <Link to={`/producto/${producto.id}`}>
              <img className='imgProduct' src={producto.thumbnail} alt={producto.nombre} />
            </Link>
            <h3 className='productPrice'>{producto.precio}<span className='currency'>USD</span></h3>
            <h2 className='productName'>{producto.nombre}</h2>
            <div className='productInfo'>
              <button className="productRemoveButton" onClick={() => handleRemoveFromCart(producto)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-dash actionIcon" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                </svg>
              </button>
              <p>{producto.quantity??1}</p>
              <button className="productAddButton" onClick={() => handleAddToCart(producto)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-plus actionIcon" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
              </button>
              <button onClick={() => handleAddToCart(producto)} className='buyButton'>AGREGAR AL HORNO</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





