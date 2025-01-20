// app/loading.js
import React from 'react';
import styles from './loading.module.css'; // Import the CSS module

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}
