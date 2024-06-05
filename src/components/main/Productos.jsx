import React from 'react'
import CategoryNav from './CategoryNav'
import { ItemListContainer } from './ItemListContainer'
import { useState } from 'react'

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  return (
    <div>
      <CategoryNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <ItemListContainer greeting={'Productos'}/>
    </div>
  )
}

export default Productos
