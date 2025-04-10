import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getCategories, getNews } from "../../api/apiNews";
import NewsLIst from "../../components/NewsList/NewsLIst";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

function Main() {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const res = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
      });
      console.log(res);
      setNews(res.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const res = await getCategories();
      
      setCategories(['All',...res.categories]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
  fetchCategories();
},[])
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage,selectedCategory]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    if (currentPage < totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div className={styles.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsLIst news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Main;
