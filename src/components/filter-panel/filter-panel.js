'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaFilter, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './filter-panel.module.css';

const FILTER_KEYS = ['category', 'brand', 'isNew', 'product_name'];

export default function FilterPanel({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const activeCount = FILTER_KEYS.filter((k) => searchParams.has(k)).length;

  return (
    <div className={styles.panel}>
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="filter-panel-content"
      >
        <FaFilter aria-hidden="true" />
        <span>Bộ lọc{activeCount > 0 ? ` (${activeCount})` : ''}</span>
        {isOpen ? (
          <FaChevronUp aria-hidden="true" />
        ) : (
          <FaChevronDown aria-hidden="true" />
        )}
      </button>
      <div
        id="filter-panel-content"
        className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
      >
        {children}
      </div>
    </div>
  );
}
