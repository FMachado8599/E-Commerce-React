import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../DataContext';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

const CheckOut = () => {
    const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const send = (data) => {

        const pedido = {
            cliente: data,
            productos: cart,
            total: "1000"
        }
        console.log(pedido);
    }

  return (
    <div className='checkout'>
        <h2 className='tituloCheckout'>Checkout</h2>
        <div className='cartProcedure'>
            <div className='cartSummary'>
                Hola pianola
            </div>
            <form className='cartForm' onSubmit={handleSubmit(send)}>
                
                <Form.Group className="mb-3" controlId="formGroupNombre">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="name" placeholder="Ingresa tu nombre y apellido" {...register("nombre")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupTelefono" >
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="phone" placeholder="Ingresa tu celular/teléfono" {...register("telefono")} />
                </Form.Group>

                <button className='sendFormButton' type='send'>Comprar</button>
            </form>
        </div>

    </div>
  )
}

export default CheckOut
