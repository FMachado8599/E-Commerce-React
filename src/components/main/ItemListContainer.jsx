import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import ImagenFondo from "../../multimedia/panes1.webp";
import db from "../../data/productos.json";
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {
 
  let [productos, setProductos] = useState([]);

  const productosDb = () =>{
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve(db);
      })

    })
  }
  
  useEffect(()=>{
    productosDb()
    .then((res)=> {
      setProductos(res);
    })

  }, [CategoryNav])

  return (

    <section className="espacioProductos">
      <Image className='fondoProductos' src={ImagenFondo} thumbnail />      
      <h1>{greeting}</h1>
      <div className='productList'>
        {productos.map((producto)=>{
            return(
            <div key={producto.id} className='producto'>
              <img src="../../multimedia/panes1.webp" alt="Imagen producto"/>
              <h2>{producto.nombre}</h2>
              <h3>{producto.precio}</h3>
              <p>{producto.descripcion}</p>
              <Link className='irDetalle' to={`/producto/${producto.id}`}>Ir a detalle</Link>
            </div>
            )
          })

          }
      </div>
    </section>
  )
}



