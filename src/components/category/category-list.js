import React from 'react';
import CategoryItem from './category-item';
import styles from './category-list.module.css';
import { fetchCategories } from '@/services/categories.services';

export default async function CategoryList() {
  const categories = await fetchCategories();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <span className={styles.accent} />
          <h2 className={styles.heading}>Danh mục sản phẩm</h2>
          <p className={styles.description}>
            Khám phá các dòng sản phẩm điện công nghiệp chính hãng
          </p>
        </div>
        <div className={styles.grid}>
          {categories
            ? categories.map((item) => (
                <CategoryItem key={item._id} category={item} />
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
