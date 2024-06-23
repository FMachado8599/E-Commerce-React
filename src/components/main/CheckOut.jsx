import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../DataContext';
import Form from 'react-bootstrap/Form';

const CheckOut = () => {
    const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  return (
    <div className='checkout'>
        <h2 className='tituloCheckout'>Checkout</h2>
        <div className='cartProcedure'>
            <div className='cartSummary'>
                Hola pianola
            </div>
            <Form className='cartForm'>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="name" placeholder="Ingresa tu nombre y apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form>
        </div>

    </div>
  )
}

export default CheckOut
