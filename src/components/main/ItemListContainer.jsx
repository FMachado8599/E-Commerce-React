import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext, DataContext, ToastContext } from '../DataContext';
import menos from '../../multimedia/icons/menos.svg'
import mas from '../../multimedia/icons/mas.svg'
import carrito from '../../multimedia/icons/oven.svg';

export const ItemListContainer = ({selectedCategory = ""}) => {
  const { productList } = useContext(DataContext);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);



    // const maxProductPrice = Math.max(...productos.map(producto => parseFloat(producto.precio)));
    // setMaxPrice(maxProductPrice);

    // const filteredProducts = productos.filter(producto => {
    //   // const price = parseFloat(producto.precio);
    //   return (selectedCategory === "" || producto.category_id === selectedCategory);
    // });

  const handleAddToCart = (producto) => {
    addToCart(producto);
    showToast(` ${producto.nombre} x ${producto.quantity??1}`);
    console.log(cart.quantity)
  };

  const handleRemoveFromCart = (producto) => {
    removeFromCart(producto);
    showToast(` ${producto.nombre} x ${producto.quantity??1}`);
  };

  const getProductQuantityInCart = (IdProducto) => {
    const productInCart = cart.find(item => item.id === IdProducto)
    return productInCart ? productInCart.quantity : 0;
  }


  return (
    <section className="espacioProductos">   
      <h1 className='tituloItemListContainer'>Productos</h1>

      {/* <div className="filter">
        <div className='filterNodes'>
          <label className='priceLabel'>
            Minimo:
            <input
              className='priceInput'
              type="range"
              min="0.0"
              max={maxProductPrice}
              step="0.1"
              value={minPrice}
              onChange={e => {
                const value = parseFloat(e.target.value);
                if (value <= maxPrice) setMinPrice(value);
              }}
            />
          </label>
          <label className='priceLabel'>
            Maximo:
            <input
              className='priceInput'
              type="range"
              min="0.0"
              max={maxProductPrice}
              step="0.1"
              value={maxPrice}
              onChange={e => {
                const value = parseFloat(e.target.value);
                if (value >= minPrice) setMaxPrice(value);
              }}
            />
          </label>
        </div>
        <div className='rangeLabel'>
          <span>USD {minPrice.toFixed(1)}</span>
          <p> - </p>
          <span>USD {maxPrice.toFixed(1)}</span>
        </div>
      </div> */}

      <div className='productList'> 
        {productList
        .filter(producto => (producto.categoria_id === selectedCategory || selectedCategory === ""))
        // .filter(producto => (minPrice <= producto.precio && producto.precio <= maxPrice))
        .map( productoFiltrado => (
          <div key={productoFiltrado.id} className='producto'>
            <Link to={`/producto/${productoFiltrado.id}`}>
              <img className='imgProduct' src={productoFiltrado.thumbnail} alt={productoFiltrado.nombre} loading='lazy'/>
            </Link>
            <h3 className='productPrice'>{productoFiltrado.precio}<span className='currency'>USD</span></h3>
            <h2 className='productName'>{productoFiltrado.nombre}</h2>
            <div className='productInfo'>
              <div className='quantityDiv'>
                <button className="productRemoveButton" onClick={() => handleRemoveFromCart(productoFiltrado)} >
                  <img className='actionIcon' src={menos} alt="Simbolo de menos" />
                </button>
                <p className='addedQuantity'>{getProductQuantityInCart(productoFiltrado.id)}</p>
                <button className="productAddButton" onClick={() => handleAddToCart(productoFiltrado)} >
                  <img className='actionIcon' src={mas} alt="Simbolo de mas" />
                </button>
              </div>
              <div onClick={() => handleAddToCart(productoFiltrado)} className='buyButton'>
                <img src={carrito} className='iconBuyButton'  alt="" />
                <p>AGREGAR</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





