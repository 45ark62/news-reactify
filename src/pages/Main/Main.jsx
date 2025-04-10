import { useDebounce } from "../../helpers/hooks/useDebounce";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";
import { getCategories, getNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";

import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsLIst from "../../components/NewsList/NewsLIst";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useFilters } from "../../helpers/hooks/useFilters";

function Main() {
 const {filters,changeFilter}=useFilters({
   page_number: 1,
   page_size: PAGE_SIZE,
   category: null,
   keywords: "",
 })
 

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number',filters.page_number + 1);
    }
  };
  const handlePreviousPage = () => {
    if (filters.page_number> 1) {
      changeFilter('page_number',filters.page_number - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
      changeFilter('page_number',pageNumber);
  };
  return (
    <div className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={filters.category}
          selectedCategory={(category) => changeFilter('category',category)}
        />
      ) : null}

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords',keywords)} />

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news.length > 0 && data.news[0]}
      />
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
      <NewsLIst isLoading={isLoading} item={data?.news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </div>
  );
}

export default Main;
