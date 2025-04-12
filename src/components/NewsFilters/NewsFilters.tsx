import { getCategories } from "@api/apiNews";
import { useFetch } from "@helpers/hooks/useFetch";
import styles from "./styles.module.css";
import Categories from "@components/Categories";
import Search from "@components/Search";
import Slider from "@components/Slider";
import { CategoriesApiResponse, IFilters } from "@interfaces/index";
interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

function NewsFilters({ filters, changeFilter }: Props) {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );
  return (
    <div className={styles.filters}>
      {" "}
      {dataCategories ? (
        <Slider>
          <Categories
            
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
}

export default NewsFilters;
