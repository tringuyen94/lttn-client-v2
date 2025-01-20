'use client';
import React from 'react';
import styles from './reset-button.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

const _QUERIES = [
  'product_name',
  'brand',
  'category',
  'isNew',
  'capacity[gte]',
  'capacity[lte]',
];

export default function ResetButton() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleReset = () => {
    const currentParams = new URLSearchParams(searchParams.toString());
    _QUERIES.forEach((query) => currentParams.delete(query));
    router.replace('/danh-sach-san-pham');
  };

  return (
    <button className={styles.btnReset} onClick={handleReset}>
      Reset
    </button>
  );
}
