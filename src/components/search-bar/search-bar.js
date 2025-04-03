'use client';
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (debouncedSearchTerm) {
      currentParams.set('product_name', debouncedSearchTerm);
    } else {
      currentParams.delete('product_name');
    }
    router.replace(`/danh-sach-san-pham?${currentParams.toString()}`);
  }, [debouncedSearchTerm]); // Only fetch when the debounced term changes

  return (
    <div className={styles.search}>
      <form>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nhập tên cần tìm..."
        />
        <FaSearch className={styles.searchIcon} />
      </form>
    </div>
  );
};

export default SearchBar;
