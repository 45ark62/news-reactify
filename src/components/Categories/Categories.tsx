import  { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
interface Props {
  categories: string[];
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }:Props, ref:ForwardedRef<HTMLDivElement>) => {
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
              key={category}
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
