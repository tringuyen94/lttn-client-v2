import React from 'react';
import styles from './product-item.module.css';

import Image from 'next/image';
import { baseURL } from '@/services/baseURL.services';
import Link from 'next/link';

export default function ProductItem({ product }) {
  const { product_name, product_slug, product_images } = product;

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <Image
          alt={product_slug}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={`${baseURL}/${product_images[0]}`}
          fill
        />
      </div>
      <div className={styles.productBody}>
        <h5 className={styles.productName}>{product_name}</h5>
      </div>
      <div className={styles.viewDetail}>
        <Link
          href={`/danh-sach-san-pham/${product_slug}`}
          className={styles.viewDetailBtn}
        >
          Chi tiết
        </Link>
      </div>
    </div>
  );
}
