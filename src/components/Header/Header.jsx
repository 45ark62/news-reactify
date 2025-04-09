import React from 'react'
import styles from "./styles.module.css";
import { formatDate } from '../../helpers/formatDate';

function Header() {
    
  return (
    <header className={styles.header}>
      <h1 className={styles.title}> NEWS REACTIFY</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
}

export default Header