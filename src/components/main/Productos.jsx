import React from 'react'
import CategoryNav from './CategoryNav'
import { ItemListContainer } from './ItemListContainer'

const Productos = () => {
  return (
    <div>
      <CategoryNav/>
      <ItemListContainer greeting={'Productos'}/>
    </div>
  )
}

export default Productos
