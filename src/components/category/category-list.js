import React from 'react';
import CategoryItem from './category-item';
import styles from './category-list.module.css';
import { fetchCategories } from '@/services/categories.services';

export default async function CategoryList() {
  const categories = await fetchCategories();
  return (
    <div className={styles.categoryList}>
      {categories
        ? categories.map((item) => {
            return (
              <div className={styles.categoryItemWrapper} key={item._id}>
                <CategoryItem category={item} />
              </div>
            );
          })
        : null}
    </div>
  );
}
