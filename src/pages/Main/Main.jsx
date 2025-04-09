import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsLIst from "../../components/NewsList/NewsLIst";
import Skeleton from "../../components/Skeleton/Skeleton";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const res = await getNews();
        console.log(res);
        setNews(res.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      {!isLoading ? (
        <NewsLIst news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
    </div>
  );
}

export default Main;
