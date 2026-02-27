import React from 'react';
import styles from './product-skeleton.module.css';

function SkeletonCard() {
  return (
    <div className={styles.skeletonCard} aria-hidden="true">
      <div className={`${styles.skeletonImage} ${styles.shimmer}`} />
      <div className={styles.skeletonBody}>
        <div className={`${styles.skeletonTitle} ${styles.shimmer}`} />
        <div className={`${styles.skeletonMeta} ${styles.shimmer}`} />
      </div>
    </div>
  );
}

export default function ProductSkeleton({ count = 12 }) {
  return (
    <div role="status" aria-label="Đang tải sản phẩm...">
      <div className={styles.skeletonHeader}>
        <div className={`${styles.skeletonCount} ${styles.shimmer}`} />
      </div>
      <div className={styles.skeletonGrid}>
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      <span className="sr-only">Đang tải sản phẩm...</span>
    </div>
  );
}
