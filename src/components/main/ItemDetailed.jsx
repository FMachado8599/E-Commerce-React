import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext, CartContext } from '../DataContext';
import { Link } from 'react-router-dom';
import { db } from "../../firebase/config"
import { doc, getDoc} from "firebase/firestore"

const ItemDetailed = () => {
  // const { producto , setProductos } = useContext(DataContext);
  const { id } = useParams();
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (producto) => {
    addToCart(producto);
    showToast(` ${producto.nombre} x ${producto.quantity??1}`);
  };

  const handleRemoveFromCart = (producto) => {
    removeFromCart(producto);
    showToast(` ${producto.nombre} x ${producto.quantity??1}`);
  };
  
  const [ producto, setProductos ] = useState(null);

  useEffect(() => {

    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then((response) => {

        setProductos({ ...response.data(), id: response.id});
      })
  }, [id])


  if (!producto){
    return(
      <div className='productoError'>
        <p className='mensajeProductoError'>PRODUCTO NO ENCONTRADO</p>
        <p className='detalleProductoError'>El producto ya no existe</p>
      </div>
    )
  }
  

  return ( 
    
    <div className='productAlignContainer'>
      <div className='productCardContainer'>
        <Link className='buttonVolver' to={`/productos`}>↩ Volver</Link>
        <div className='productCard'>
          <img className='productDetailedImg' src={producto.img} alt="Imagen del producto" />
          <div className='productDetailedInfo'>
            <h1>{producto.nombre}</h1>
            <h2 className='productDetailedPrice'>${producto.precio}</h2>
            <p className='productDetailedDescription'>{producto.descripcion}</p>
            <button className='buyButton' onClick={() => handleAddToCart(producto)} >Añadir al horno</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItemDetailed
