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
                        onClick={() => setSelectedCategory(category.id === selectedCategory ? "" : category.id)}
                        className={selectedCategory === category.id ? 'CategoryItemSelected' : 'categoryItem'}>
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
 

