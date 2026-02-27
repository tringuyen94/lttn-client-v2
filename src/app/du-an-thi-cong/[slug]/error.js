'use client';

import Link from 'next/link';
import styles from '../../error.module.css';

export default function ProjectDetailError({ error, reset }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>⚠</div>
      <h2 className={styles.errorTitle}>Không thể tải thông tin dự án</h2>
      <p className={styles.errorMessage}>
        {error?.message ||
          'Dự án không tồn tại hoặc hệ thống đang gặp sự cố. Vui lòng thử lại.'}
      </p>
      <div className={styles.errorActions}>
        <button onClick={reset} className={styles.retryBtn}>
          Thử lại
        </button>
        <Link href="/du-an-thi-cong" className={styles.homeBtn}>
          Danh sách dự án
        </Link>
      </div>
    </div>
  );
}
