import React from 'react';
import ProductItem from './product-item';
import Pagination from '@/components/pagination/pagination';
import EmptyState from '@/components/empty-state/empty-state';
import styles from './product-list.module.css';

const ABOVE_FOLD_COUNT = 8;

export default function ProductList({ products, pagination }) {
  if (!products || products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.productListWrapper}>
      <p className={styles.productListTotal}>
        Tìm thấy <strong>{pagination.total}</strong> sản phẩm
      </p>
      <div className={styles.productList}>
        {products.map((item, index) => (
          <div key={item._id}>
            <ProductItem product={item} priority={index < ABOVE_FOLD_COUNT} />
          </div>
        ))}
      </div>
      <Pagination pagination={pagination} />
    </div>
  );
}
