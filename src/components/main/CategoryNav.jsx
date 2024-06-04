import React from 'react'
import categorias from "../../data/categorias.json"
import { Link, NavLink } from 'react-router-dom'

const CategoryNav = () => {
  return (
    <nav className='categoryNav'>
        <ul className='categoryList'>
            {
                categorias.map((category) =>{
                    return (
                        <li className='categoryNavItem'>
                            <NavLink to={`/categoria/${category.nombre}`} activeclassname="activeNavLink" className={"categoryItem"}>
                                {category.nombre}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default CategoryNav



