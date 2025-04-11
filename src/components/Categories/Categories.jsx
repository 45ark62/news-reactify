import React, { forwardRef } from "react";
import styles from "./styles.module.css";

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
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
);
Categories.displayName = "Categories";
export default Categories;
