import React, { useEffect, useState, useContext } from 'react';
import Image from 'react-bootstrap/Image';
import ImagenFondo from "../../multimedia/panes1.webp";
import db from "../../data/productos.json";
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';

export const ItemListContainer = ({selectedCategory}) => {
 
  const { productos } = useContext(DataContext);

  return (

    <section className="espacioProductos">   
      <h1 className='tituloItemListContainer'>Productos</h1>
      <div className='productList'>
        {
        productos.filter( producto => (selectedCategory === "" || producto.categoria_id === selectedCategory )).map((producto)=>{
            return(
            <div key={producto.id} className='producto'>
              <img className='imgProduct' src={producto.img} alt={producto.nombre} />
              <h2 className='productName'>{producto.nombre}</h2>
              <div className='productInfo'>
                <Link className='irDetalle' to={`/producto/${producto.id}`}>Ver mas</Link>
                <h3 className='productPrice'>{producto.precio}<span className='currency'>USD</span></h3>
              </div>
            </div>
            )
          })

          }
      </div>
    </section>
  )
}



