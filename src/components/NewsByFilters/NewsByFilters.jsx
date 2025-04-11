import { useFilters } from "@helpers/hooks/useFilters";
import { useDebounce } from "@helpers/hooks/useDebounce";
import { useFetch } from "@helpers/hooks/useFetch";
import { getNews } from "@api/apiNews";
import { DATA_MOCK, PAGE_SIZE, TOTAL_PAGES } from "@constants";
import React from "react";
import styles from "./styles.module.css";
import NewsList from "@components/NewsList";
import NewsFilters from "@components/NewsFilters";
import PaginationWrapper from "@components/PaginationWrapper";

function NewsByFilters() {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };
  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };
  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />
      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        {" "}
        <NewsList
          isLoading={isLoading}
          news={data?.news ? data.news : DATA_MOCK}
        />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;
