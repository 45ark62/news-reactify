import React from 'react'
import styles from './styles.module.css'

function Categories({ categories, setSelectedCategory,selectedCategory}) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button onClick={()=>{setSelectedCategory(category);}}
          className={selectedCategory === category ? styles.active : styles.item} key={category.id}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories