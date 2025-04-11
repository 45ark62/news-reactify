import React from "react";
import styles from "./styles.module.css";

function Categories({ categories, setSelectedCategory, selectedCategory }) {
  return (
    <div className={styles.categories}>
      <button
        onClick={() => {
          setSelectedCategory(null);
        }}
        className={selectedCategory ? styles.active : styles.item}
      >
        All
      </button>
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category);
            }}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
