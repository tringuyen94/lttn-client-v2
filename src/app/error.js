'use client';

import Link from 'next/link';
import styles from './error.module.css';

export default function GlobalError({ error, reset }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>⚠</div>
      <h2 className={styles.errorTitle}>Đã xảy ra lỗi</h2>
      <p className={styles.errorMessage}>
        {error?.message || 'Hệ thống gặp sự cố. Vui lòng thử lại sau.'}
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
