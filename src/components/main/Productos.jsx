import { useState } from 'react'
import CategoryNav from './CategoryNav'
import { ItemListContainer } from './ItemListContainer'

const Productos = () => {

//----------------------------------PRODUCT FILTERS----------------------------------//  
  const [ selectedCategory, setSelectedCategory ] = useState("")
  // const [minPrice, setMinPrice] = useState(0.0);
  // const [maxPrice, setMaxPrice] = useState(Infinity);
  
  return (
    <div>
      <CategoryNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ItemListContainer selectedCategory={selectedCategory}/>
    </div>
  )
}

export default Productos
