import logo from "../../multimedia/icons/croissant.svg"
import Navbar from './Navbar'
import OffCanvasNavbar from './OffCanvasNavbar'
import CartProductList from './CartProductList'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Button from 'react-bootstrap/Button';
import burger from "../../multimedia/icons/hamburger.svg";

export const Header = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setIsActive(!isActive);
  };

  return (

    <header className="header">
      <div className='logoTitle'>
        <Link to="/" className="navLink" >
          <img src={logo} className='mainLogo' alt="Logo de la tienda"/>
        </Link>
        <h1 className='pageTitle'>Doux</h1>
      </div>
      <div className='headerInteractions'>
        <Navbar/>
        <Button variant="primary" className="burgerButton d-lg-none" onClick={handleShow}>
          <img className='actionIcon' src={burger} alt="Simbolo de menos" />
        </Button>
        <CartWidget showOffCanvas={setShowOffCanvas} />
      </div>
      <Offcanvas show={showOffCanvas} keyboard onHide = { () => setShowOffCanvas (false) } placement='end' >
          <OffcanvasHeader closeButton>
            <OffcanvasTitle>Horno</OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <CartProductList setShowOffCanvas={setShowOffCanvas} />
          </OffcanvasBody>
      </Offcanvas>
      <Offcanvas className='d-lg-none offcanvas-Menu' show={show} keyboard onHide={handleClose} responsive="lg">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='offCanvasTitle'>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <OffCanvasNavbar/>
          </Offcanvas.Body>
      </Offcanvas>
    </header>
  )
}
