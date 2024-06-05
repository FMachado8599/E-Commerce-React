import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DataContext } from '../DataContext';
import { useContext } from 'react';

const CategoryNav = ({ selectedCategory, setSelectedCategory }) => {
    const { categorias } = useContext(DataContext);
  return (
    <nav className='categoryNav'>
        <ul className='categoryList'>
            {
                categorias.map((category) =>{
                    return (
                        <li key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        style={{ cursor: 'pointer', fontWeight: selectedCategory === category.id ? 'bold' : 'normal' }}>
                        {category.nombre}
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default CategoryNav



