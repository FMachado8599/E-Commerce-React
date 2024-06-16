import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DataContext } from '../DataContext'

const Navbar = () => {
  return (
    <nav>
        <ul className='linksList'>
            <li>
              <NavLink to="/" activeclassname="activeNavLink" className="navLink" >Inicio</NavLink>
            </li>
            <li onClick={() => setSelectedCategory(category.id === selectedCategory ? "" : category.id)}>
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
  )
}

export default Navbar
