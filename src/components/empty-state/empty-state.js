import React from 'react';
import Link from 'next/link';
import { FaBoxOpen } from 'react-icons/fa';
import styles from './empty-state.module.css';

export default function EmptyState({
  title = 'Không tìm thấy sản phẩm',
  description = 'Không có sản phẩm nào phù hợp với bộ lọc hiện tại. Hãy thử thay đổi bộ lọc hoặc xem tất cả sản phẩm.',
  showReset = true,
}) {
  return (
    <div className={styles.emptyState} role="status">
      <FaBoxOpen className={styles.icon} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {showReset && (
        <Link href="/danh-sach-san-pham" className={styles.resetLink}>
          Xem tất cả sản phẩm
        </Link>
      )}
    </div>
  );
}
