import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import burger from "../../multimedia/icons/hamburger.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar d-flex align-items-center">
      <Button variant="primary" className="burgerButton d-lg-none" onClick={handleShow}>
        <img className='actionIcon' src={burger} alt="Simbolo de menos" />
      </Button>
      <nav variant="info" className="d-none d-lg-block">
            <ul className='linksList'>
                <li>
                  <NavLink to="/" activeclassname="activeNavLink" className="navLink" >Inicio</NavLink>
                </li>
                <li >
                  <NavLink to="/productos" activeclassname="active" className="navLink" >Productos</NavLink>
                </li>
                <li>
                  <NavLink to="/sobre_nosotros" activeclassname="active" className="navLink" >Sobre Nosotros</NavLink>
                </li>
                <li>
                  <NavLink to="/contacto" activeclassname="active" className="navLink" >Contacto</NavLink>
                </li>
            </ul>
          </nav>
      <Offcanvas show={show} onHide={handleClose} responsive="lg" className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul>
                <li>
                  <NavLink to="/" activeclassname="activeNavLink" className="navLink" >Inicio</NavLink>
                </li>
                <li >
                  <NavLink to="/productos" activeclassname="active" className="navLink" >Productos</NavLink>
                </li>
                <li>
                  <NavLink to="/sobre_nosotros" activeclassname="active" className="navLink" >Sobre Nosotros</NavLink>
                </li>
                <li>
                  <NavLink to="/contacto" activeclassname="active" className="navLink" >Contacto</NavLink>
                </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>

  )
}

export default Navbar
