import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';

export const ItemListContainer = ({ selectedCategory }) => {
  const { productos } = useContext(DataContext);

  // Calcular el precio máximo de los productos
  const maxProductPrice = Math.max(...productos.map(producto => parseFloat(producto.precio)));

  const [minPrice, setMinPrice] = useState(0.0);
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);

  const filteredProducts = productos.filter(producto => {
    const price = parseFloat(producto.precio);
    return (selectedCategory === "" || producto.categoria_id === selectedCategory) && price >= minPrice && price <= maxPrice;
  });

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
            <img className='imgProduct' src={producto.img} alt={producto.nombre} />
            <h2 className='productName'>{producto.nombre}</h2>
            <div className='productInfo'>
              <Link className='irDetalle' to={`/producto/${producto.id}`}>Ver mas</Link>
              <h3 className='productPrice'>{producto.precio}<span className='currency'>USD</span></h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





