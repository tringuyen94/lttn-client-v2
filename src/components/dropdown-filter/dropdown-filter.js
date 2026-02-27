'use client';

import React from 'react';
import styles from './dropdown-filter.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DropDownFilter({ info }) {
  const { nameFilter, title, optionsFilter } = info;
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectId = `filter-${nameFilter}`;

  const handleChange = (value) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (value) {
      currentParams.set(nameFilter, value);
    } else {
      currentParams.delete(nameFilter);
    }
    router.replace(`/danh-sach-san-pham/?${currentParams.toString()}`);
  };

  const renderOptions = () => {
    switch (nameFilter) {
      case 'brand':
        return (
          <select
            id={selectId}
            name={nameFilter}
            aria-label={`Lọc theo ${title}`}
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
            id={selectId}
            name={nameFilter}
            aria-label={`Lọc theo ${title}`}
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
            id={selectId}
            name={nameFilter}
            aria-label={`Lọc theo ${title}`}
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

  return (
    <div className={styles.filterWrapper}>
      <label htmlFor={selectId}><h4>{title}</h4></label>
      {renderOptions()}
    </div>
  );
}
