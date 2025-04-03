import React from 'react';
import styles from './category-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { baseURL } from '@/services/baseURL.services';

export default function CategoryItem({ category }) {
  return (
    <Link
      href={`/danh-sach-san-pham?category=${category._id}`}
      className={styles.categoryItem}
    >
      <div className={styles.categoryItemImage}>
        <Image
          src={`${baseURL}/${category.category_image}`}
          alt={category.category_slug}
          fill
        />
      </div>
      <div className={styles.categoryItemBody}>
        <h3>{category.category_name}</h3>
      </div>
    </Link>
  );
}
