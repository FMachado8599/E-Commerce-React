import Navbar from './Navbar'
import { CartWidget } from './CartWidget'
import logo from "../../multimedia/icons/croissant.svg"
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import { useState } from 'react'
import CartProductList from './CartProductList'

export const Header = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  return (

    <header className="header">
      <div className='logoTitle'>
        <Link to="/" className="navLink" >
          <img src={logo} className='burger' alt="Logo de la tienda"/>
        </Link>
        <h1 className='pageTitle'>Doux</h1>
      </div>
      <Navbar />
      <CartWidget showOffCanvas={setShowOffCanvas} />
      <Offcanvas show={showOffCanvas} onHide = { () => setShowOffCanvas (false) } placement='end' >
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Horno</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <CartProductList setShowOffCanvas={setShowOffCanvas} />
        </OffcanvasBody>
      </Offcanvas>
    </header>
  )
}
