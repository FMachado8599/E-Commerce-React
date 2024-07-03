import { useContext, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config"
import { DataContext } from '../DataContext';

const CategoryNav = ({ selectedCategory, setSelectedCategory }) => {

  const { categoryList, setCategoryList } = useContext(DataContext);

    useEffect(() => {
        const categoryRef = collection(db, "categoria");
    
    
        getDocs(categoryRef).
          then((respuesta) => {
            setCategoryList(
              respuesta.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }))
            );
        });
      }, [setCategoryList]);

  return (
    <nav className='categoryNav'>
        <ul className='categoryList'>
            {
                categoryList.map((category) =>{
                    return (
                        
                        <li key={category.id}
                        onClick={() =>  setSelectedCategory(category.id === selectedCategory ? "" : category.id)}
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
 

