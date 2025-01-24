'use client';

import React, { useEffect, useState } from 'react';
import styles from './dropdown-filter.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DropDownFilter({ info }) {
  const { nameFilter, title, optionsFilter } = info;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState('');
  const handleChange = (value) => setFilter(value);

  const renderOptions = () => {
    switch (nameFilter) {
      case 'brand':
        return (
          <select
            name={nameFilter}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="">Tất cả</option>
            {optionsFilter.map((o) => (
              <option value={o._id} key={o._id}>
                {o.brand_name}
              </option>
            ))}
          </select>
        );

      case 'category':
        return (
          <select
            name={nameFilter}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="">Tất cả</option>
            {optionsFilter.map((o) => (
              <option value={o._id} key={o._id}>
                {o.category_name}
              </option>
            ))}
          </select>
        );
      case 'isNew':
        return (
          <select
            name={nameFilter}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="">Tất cả</option>
            {optionsFilter.map((o, index) => (
              <option value={o} key={index}>
                {o === true ? 'Mới' : 'Cũ'}
              </option>
            ))}
          </select>
        );
      default:
        break;
    }
  };

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (filter) {
      currentParams.set(nameFilter, filter); // Only set 'isNew' if a value is selected
    } else {
      currentParams.delete(nameFilter); // If it's "All Products", remove the filter
    }
    // Push the updated URL with searchParams to the router
    router.replace(`/danh-sach-san-pham/?${currentParams.toString()}`);
  }, [filter, nameFilter, searchParams, router]);

  return (
    <div className={styles.filterWrapper}>
      <h4>{title}</h4>
      {renderOptions()}
    </div>
  );
}
