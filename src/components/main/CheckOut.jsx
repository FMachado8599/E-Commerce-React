import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../DataContext';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { db } from "../../firebase/config"
import { collection, addDoc, getDocs} from "firebase/firestore"

const CheckOut = () => {
    const { cart, addToCart, removeFromCart, deleteFromCart, precioTotal, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const [pedidoId, setPedidoId] = useState("");

    const [pedidoData, setPedidoData] = useState(null);

    const send = (data) => {

        const pedido = {
            cliente: data,
            productos: cart,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            clearCart();
        })

    }

    useEffect(() =>{
      const pedidoRef = collection(db, "pedido")
    
      getDocs(pedidoRef)
      .then((respuesta) => {
        
        setPedidoData(
          respuesta.docs.map((doc) => {
            console.log(doc);
            return { ...doc.data(), id: doc.id, }
            
          })
        )
      })
    }, [])

  if (pedidoId) {
    return (
        <div className="Invoice">
            <h1 className="main-title">Muchas gracias por tu compra!</h1>
            <p>El id de tu pedido es: {pedidoId}</p>
            <p>Nos encargaremos de guardar el id de tu pedido hasta que recibas tu compra, siempre puedes consultarlo en tu perfil, en la seccion de pedidos</p>
            <div>
              {pedidoData && (
                  <div>
                      <h3>Detalles del Pedido</h3>
                      <p>Cliente: {JSON.stringify(pedidoData.cliente)}</p>
                      <p>Total: {pedidoData.total}</p>
                      <h4>Productos:</h4>
                      <ul>
                          {pedidoData.productos.map((producto, index) => (
                              <li key={index}>{JSON.stringify(producto)}</li>
                          ))}
                      </ul>
                  </div>
              )}
            </div>
        </div>
    )
  }

  return (
    <div className='checkout'>
        <h2 className='tituloCheckout'>Checkout</h2>
        <div className='checkoutProcedure'>
            <div className='checkoutSummary'>
            {cart.map((producto) => (
              <div key={producto.id} className='productCheckout d-flex'>
                <img className='imgProductCheckout' src={producto.img} alt={producto.nombre} />
                <div className='checkoutProductInfo'>
                  <div className='checkoutNameRow'>
                    <h2 className='checkoutProductName'>{producto.nombre}</h2>
                    <button className="deleteCartProductButton" onClick={() => deleteFromCart(producto)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x deleteIcon" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    </button>
                  </div>
                  <p className='checkoutProductQuantity'>Cantidad: {producto.quantity}</p>
                  <div className='checkoutActionsRow'>
                    <h3 className='checkoutProductPrice'>{producto.precio}<span className='currency'>USD</span></h3>
                    <div className='checkoutProductActions'>
                        <button className="checkoutProductActionButton" onClick={() => removeFromCart(producto)} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-dash actionIcon" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                          </svg>
                        </button>
                        <p>{producto.quantity}</p>
                        <button className="checkoutProductActionButton" onClick={() => addToCart(producto)} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-plus actionIcon" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                          </svg>
                        </button>
                    </div>
                  </div>
        
                </div>
              </div>
            ))}
            </div>
            <form className='checkoutForm' onSubmit={handleSubmit(send)}>
                
                <Form.Group className="mb-3 formLabel" controlId="formGroupNombre">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="name" placeholder="Ingresa tu nombre y apellido" {...register("nombre")} />
                </Form.Group>
                <Form.Group className="mb-3 formLabel" controlId="formGroupEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                </Form.Group>
                <Form.Group className="mb-3 formLabel" controlId="formGroupTelefono" >
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="phone" placeholder="Ingresa tu celular/teléfono" {...register("telefono")} />
                </Form.Group>

                <button className='sendFormButton' onClick={clearCart} type='send'>Comprar</button>
            </form>
        </div>

    </div>
  )
}

export default CheckOut
