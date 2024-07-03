import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
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
  )
}

export default Navbar
