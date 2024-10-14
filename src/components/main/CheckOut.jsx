import { useContext, useState} from 'react';
import { CartContext } from '../DataContext';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import menos from '../../multimedia/icons/menos.svg'
import mas from '../../multimedia/icons/mas.svg'

const CheckOut = () => {
    const { cart, addToCart, removeFromCart, deleteFromCart, precioTotal, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const [ pedidoId, setPedidoId ] = useState("");
    const [ cliente, setCliente ] = useState({});
    const [ cartSummary, setCartSummary ] = useState([])
    const [ priceSummary, setPriceSummary ] = useState([])
    const [ orderDateSummary, setOrderDateSummary] = useState()

    const send = (data) => {

        setCliente(data);
        setCartSummary(cart);
        setPriceSummary(precioTotal());
        const orderDate = new Date().toLocaleDateString('es-ES');
        setOrderDateSummary(orderDate);

        const pedido = {
            cliente: data,
            productos: cart,
            total: precioTotal(),
            fecha: orderDate
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            clearCart()
        })

    }

  if (pedidoId) {
    
    return (
        <div className="invoice">
          <div className='mainPedidoInfo'>
            <h1 className="thanksTitle">Muchas gracias por tu compra!</h1>
            <div className='orderConfirmation'>
              <svg xmlns="http://www.w3.org/2000/svg" class="confirmationTick" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <p>Tu orden con ID <span>#{pedidoId}</span> esta siendo procesada</p>
            </div>
            <p className='textConfirmationEmail'>Te hemos enviado un email a <span>{cliente.email}</span> con tu confirmacion de pedido y el recibo. Si el email no llega en el correr de los proximos 2 minutos, por favor revise su carpeta de spam para ver si el email fue redirigido hacia ahi</p>
          </div>
          <div className='summaryPedido'>
              <div className='detallesTecnicos'>
                <div className='detallesSeparacion'>
                  <h3>Detalles del Pedido</h3>
                  <p className='detalleIdPedido'>#{pedidoId}</p>
                </div>
                <p className='date'>{orderDateSummary}</p>
              </div>
              <div className='detallesPedido'>
                <div className='datosCliente'>
                  <h3 className='titleDatos'>Datos de cliente</h3>
                  <p><span>Nombre: </span>{cliente.nombre}</p>
                  <p><span>Email: </span>{cliente.email}</p>
                  <p><span>Telefono/Celular: </span>{cliente.telefono}</p>
                </div>
                <div>
                  <h3 className='titleDatos'>Total: {priceSummary} USD</h3>
                </div>
                <div className='datosEmpresa'>
                  <h3 className='titleDatos'>Doux SAS</h3>
                  <p><span>RUT: </span>218784970020</p>
                  <p><span>Telefono: </span>2345 9876</p>
                  <p><span>Celular: </span>+598 95 872 982</p>
                  <p><span>Email: </span>ventas@doux.com.uy</p>
                </div>
              </div>
              <h4>Productos:</h4>
              <ul className='itemsSummary'>
                {cartSummary.map((producto, index) => (
                        <li key={index} className='summaryProductInfo'>
                            <div className="summaryProductImgContainer">
                              <img src={producto.thumbnail} alt="" className='summaryProductImg' />
                            </div>
                            <div className="summaryProductDataContainer">
                              <h3 className='summaryProductName'>{producto.nombre}</h3>
                              <p className='summaryProductQuantity'>x{producto.quantity}</p>
                              <p className='summaryProductPrice'>{producto.precio}<span className='currency'> USD</span></p>
                              <p className='summaryProductPrice'>{producto.precio*producto.quantity} USD</p>
                            </div>
                        </li>
                    ))}
              </ul>
              <div className='totalOrden'>
                <p><span>Sub total: </span>{priceSummary-(priceSummary*0.22).toFixed(3)}</p>
                <p><span>IVA: </span> {(priceSummary*0.22).toFixed(2)}</p>
                <p><span>Total: </span>{priceSummary}</p>
              </div>
          </div>
        </div>
    )
  }

  return (
    <div className='checkout'>
        <h2 className='tituloCheckout'>Checkout</h2>
        <div className='checkoutProcedure'>
            <div>
              <div className='checkoutSummary'>
                  {cart.map((producto) => (
                    <div key={producto.id} className='productCheckout d-flex'>
                      <img className='imgProductCheckout' src={producto.img} alt={producto.nombre} />
                      <div className='checkoutProductInfo'>
                        <div className='checkoutNameRow'>
                          <h2 className='checkoutProductName'>{producto.nombre}</h2>
                          <button className="deleteCartProductButton" onClick={() => deleteFromCart(producto)} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x deleteIcon" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                          </button>
                        </div>
                        <p className='checkoutProductQuantity'>Cantidad: {producto.quantity}</p>
                        <div className='checkoutActionsRow'>
                          <h3 className='checkoutProductPrice'>{producto.precio}<span className='currency'>USD</span></h3>
                          <div className='checkoutProductActions'>
                              <button className="checkoutProductActionButton" onClick={() => removeFromCart(producto)} >
                                <img className='actionIcon' src={menos} alt="-" />
                              </button>
                              <button className="checkoutProductActionButton" onClick={() => addToCart(producto)} >
                                <img className='actionIcon' src={mas} alt="+" />
                              </button>
                          </div>
                        </div>
              
                      </div>
                    </div>
                  ))}
              </div>
              {precioTotal === 0 ? 
                    <div className='emptyOrderContainer'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg>
                      <p className='totalOrderEmpty'>carrito vacio</p>
                    </div> 
                   : <p className='totalOrder'>TOTAL: {precioTotal()} USD</p>

                  }    
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

                <button className='sendFormButton' type='send'>Comprar</button>
            </form>
        </div>

    </div>
  )
}

export default CheckOut
