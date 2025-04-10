import React from "react";
import styles from "./styles.module.css";
function Search({ keywords, setKeywords }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript"
      />
    </div>
  );
}

export default Search;
