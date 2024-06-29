import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext, ToastContext } from '../DataContext';
import { Link } from 'react-router-dom';
import { db } from "../../firebase/config"
import { doc, getDoc} from "firebase/firestore"
import { CSSTransition } from 'react-transition-group';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailed = () => {
  // const { producto , setProductos } = useContext(DataContext);
  const { id } = useParams();
  const { addToCart, removeFromCart, cart, deleteFromCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const [ producto, setProductos ] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showQuantityDiv, setShowQuantityDiv] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then((response) => {

        setProductos({ ...response.data(), id: response.id});
      })
  }, [id])

  useEffect(() => {
    const productInCart = cart.find((item) => item.id === id);
    if (productInCart) {
      setQuantity(productInCart.quantity);
      setShowQuantityDiv(true);
    } else {
      setQuantity(1);
      setShowQuantityDiv(false);
    }
  }, [cart, id]);


  const handleRemoveFromCart = (producto) => {
    removeFromCart(producto);
    showToast(` ${producto.nombre} x ${quantity}`);
  };
  
  const handleAddToCart = (producto) => {
    addToCart(producto);
    showToast(` ${producto.nombre} x ${quantity}`);
    setShowQuantityDiv(true);
  };

  const handleIncreaseQuantity = () => {

    setQuantity((prevQuantity) => prevQuantity + 1 );
    addToCart({ ...producto, quantity: quantity + 1 });
    showToast(` ${producto.nombre} x ${quantity + 1 }`);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      handleRemoveFromCart(producto);
      showToast(`${producto.nombre} x ${quantity - 1}`);
    } else {
      setQuantity(0);
      setShowQuantityDiv(false);
      deleteFromCart(producto);
      showToast(`${producto.nombre} fuera del horno`);
    }
  };


  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 200);  // Espera 1 segundo
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className='spinnerContainer'>
        <Spinner className='spinner' animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
        <h1>Cargando...</h1>
      </div>

    );
  }

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
            <div className={`${showQuantityDiv ? 'addedToCartSection':'addToCartSection'}`}>

              {showQuantityDiv &&(
                <CSSTransition
                in={showQuantityDiv}
                timeout={300}
                classNames="quantityDiv"
                unmountOnExit
                >
                <div className='quantityDiv'>
                  <button className="actionButton" onClick={() => handleDecreaseQuantity(producto)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-dash actionIcon" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                    </svg>
                  </button>
                  <p className='addedQuantity'>{quantity}</p>
                  <button className="actionButton" onClick={() => handleIncreaseQuantity(producto)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-plus actionIcon" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                  </button>
                </div>
                </CSSTransition>
              )}
              <button className={`${showQuantityDiv ? 'addedToCart':'buyButton'}`} onClick={() => !showQuantityDiv && (handleAddToCart(producto)) } >Añadir al horno</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItemDetailed
