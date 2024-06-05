import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db from "../../data/productos.json";

const ItemDetailed = () => {

  const {id} = useParams();
  // useEffect(()=>{
  //   console.log('Recibido el id, ', id);
  //   return ()=>{
  //     console.log('No se que cosa ', id);
  //   }
  // },[id])

  return (
    <div>
        <h1>{id}</h1>
        <h2>Hola estamos probando el detailed prodcuts</h2>
    </div>
  )
}

export default ItemDetailed
