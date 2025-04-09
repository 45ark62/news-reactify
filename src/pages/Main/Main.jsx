import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import {getNews} from '../../api/apiNews'
import NewsLIst from "../../components/NewsList/NewsLIst";

function Main() {
    const [news,setNews]=useState([])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        console.log(res);
        setNews(res.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className={styles.main}>
      {news.length > 0? <NewsBanner item={news[0]}/>:null}
      <NewsLIst news={news}/>
    </div>
  );
}

export default Main;
