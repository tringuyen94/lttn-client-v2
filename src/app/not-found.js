// app/404.js
import React from 'react';
import styles from './not-found.module.css'; // Optional: Import CSS module for styling

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>Đường dẫn không tồn tại</p>
      <a href="/" className={styles.homeLink}>
        Trở về trang chủ
      </a>
    </div>
  );
};

export default NotFound;
