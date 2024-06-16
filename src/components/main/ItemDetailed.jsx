import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../DataContext';
import ProductBackground from '../../multimedia/panes1.webp';

const ItemDetailed = () => {
  const { productos} = useContext(DataContext);
  const {id} = useParams();

  const producto = productos.find(producto=> producto.id === parseInt(id));

  if (!producto){
    return(
      <div className='productoError'>
        <p className='mensajeProductoError'>PRODUCTO NO ENCONTRADO</p>
        <p className='detalleProductoError'>El producto ya no existe</p>
      </div>
    )
  }
  

  return ( 
    <div className='productCardContainer'>
      <div className='productCard'>
        <img className='productDetailedImg' src={producto.img} alt="" />
        <div className='productDetailedInfo'>
          <h1>{producto.nombre}</h1>
          <h2 className='productDetailedPrice'>${producto.precio}</h2>
          <p className='productDetailedDescription'>{producto.descripcion}</p>
          <button className='buyButton'>Añadir al horno</button>
        </div>
      </div>
    </div>

  )
}

export default ItemDetailed
