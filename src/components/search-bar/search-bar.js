'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './search-bar.module.css';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

const SearchBar = ({}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('product_name') || ''
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const currentParams = new URLSearchParams(searchParams.toString());
    if (debouncedSearchTerm) {
      currentParams.set('product_name', debouncedSearchTerm);
    } else {
      currentParams.delete('product_name');
    }
    router.replace(`/danh-sach-san-pham?${currentParams.toString()}`);
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.search}>
      <form role="search" aria-label="Tìm kiếm sản phẩm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="product-search" className="sr-only">Tìm kiếm sản phẩm</label>
        <input
          id="product-search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nhập tên cần tìm..."
          autoComplete="off"
        />
        <FaSearch className={styles.searchIcon} aria-hidden="true" />
      </form>
    </div>
  );
};

export default SearchBar;
