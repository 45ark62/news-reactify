import { formatTimeAgo } from "@helpers/formatTimeAgo";
import React from "react";
import styles from "./styles.module.css";
import Image from "@components/Image";

function NewsBanner({ item }) {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3>{item?.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item?.published)} by {item?.author}
      </p>
    </div>
  );
}

export default NewsBanner;
