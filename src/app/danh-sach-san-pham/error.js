'use client';

import Link from 'next/link';
import styles from '../error.module.css';

export default function ProductListError({ error, reset }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>⚠</div>
      <h2 className={styles.errorTitle}>Không thể tải danh sách sản phẩm</h2>
      <p className={styles.errorMessage}>
        {error?.message ||
          'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng và thử lại.'}
      </p>
      <div className={styles.errorActions}>
        <button onClick={reset} className={styles.retryBtn}>
          Thử lại
        </button>
        <Link href="/" className={styles.homeBtn}>
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
