import { getLatestNews } from "@api/apiNews";
import { useFetch } from "@helpers/hooks/useFetch";
import { DATA_MOCK } from "@constants";
import React from "react";
import styles from "./styles.module.css";
import BannersList from "@components/BannersList";

function LatestNews() {
  const { data, isLoading } = useFetch(getLatestNews);
  return (
    <section className={styles.section}>
      <BannersList
        banners={data?.news ? data.news : DATA_MOCK}
        isLoading={isLoading}
      />
      {/* data && data.news*/}
    </section>
  );
}

export default LatestNews;
