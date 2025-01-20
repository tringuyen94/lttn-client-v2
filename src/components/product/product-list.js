import React, { Fragment } from 'react';
import productsServices from '@/services/products.services';
import ProductItem from './product-item';
import styles from './product-list.module.css';

export default async function ProductList({ products }) {
  return (
    <div className={styles.productListWrapper}>
      <div className={styles.productListTotal}>
        Số sản phẩm tìm thấy : <strong>{products.length}</strong>
      </div>
      <div className={styles.productList}>
        {products
          ? products.map((item) => {
              return (
                <div key={item._id}>
                  <ProductItem product={item} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
