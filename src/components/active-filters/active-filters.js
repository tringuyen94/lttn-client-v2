'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';
import styles from './active-filters.module.css';

export default function ActiveFilters({ categories, brands }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeFilters = [];

  const categoryId = searchParams.get('category');
  if (categoryId) {
    const cat = categories.find((c) => c._id === categoryId);
    if (cat) activeFilters.push({ key: 'category', label: cat.category_name });
  }

  const brandId = searchParams.get('brand');
  if (brandId) {
    const br = brands.find((b) => b._id === brandId);
    if (br) activeFilters.push({ key: 'brand', label: br.brand_name });
  }

  const isNew = searchParams.get('isNew');
  if (isNew) {
    activeFilters.push({
      key: 'isNew',
      label: isNew === 'true' ? 'Mới' : 'Cũ',
    });
  }

  const productName = searchParams.get('product_name');
  if (productName) {
    activeFilters.push({ key: 'product_name', label: `"${productName}"` });
  }

  if (activeFilters.length === 0) return null;

  const removeFilter = (key) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    if (key === 'category') {
      params.delete('capacity[gte]');
      params.delete('capacity[lte]');
    }
    router.replace(`/danh-sach-san-pham?${params.toString()}`);
  };

  return (
    <div
      className={styles.chips}
      role="list"
      aria-label="Bộ lọc đang áp dụng"
    >
      {activeFilters.map((f) => (
        <button
          key={f.key}
          className={styles.chip}
          onClick={() => removeFilter(f.key)}
          role="listitem"
          aria-label={`Xóa bộ lọc ${f.label}`}
        >
          {f.label}
          <FaTimes aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
