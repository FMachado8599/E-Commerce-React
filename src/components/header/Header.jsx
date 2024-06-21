import React from 'react'
import Navbar from './Navbar'
import { CartWidget } from './CartWidget'
import logo from "../../multimedia/ico_1.0.svg"
import { Link, NavLink } from 'react-router-dom'
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
        <img src={logo} className='mainLogo' alt="Logo de la tienda" style={{ cursor: 'pointer', height: '50px' }}/>
      </Link>
        <h1>Doux</h1>
      </div>
      <Navbar />
      <CartWidget showOffCanvas={setShowOffCanvas} />
      <Offcanvas show={showOffCanvas} onHide = { () => setShowOffCanvas (false) } placement='end' >
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Horno</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <CartProductList />
        </OffcanvasBody>
      </Offcanvas>
    </header>
  )
}
