import React from 'react';
import styles from './category-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { baseURL } from '@/services/baseURL.services';

export default function CategoryItem({ category }) {
  return (
    <Link
      href={`/danh-sach-san-pham?category=${category._id}`}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={`${baseURL}/${category.category_image}`}
          alt={category.category_name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{category.category_name}</h3>
        <span className={styles.arrow}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </Link>
  );
}
