import React, { Suspense } from 'react';
import ProductList from '@/components/product/product-list';
import { fetchProducts } from '@/services/products.services';
import SearchBar from '@/components/search-bar/search-bar';
import { fetchCategories } from '@/services/categories.services';
import { fetchBrands } from '@/services/brands.services';
import DropDownFilter from '@/components/dropdown-filter/dropdown-filter';
import ProductSkeleton from '@/components/product/product-skeleton';
import CapacityFilter from '@/components/capacity-filter/capacity-filter';
import ResetButton from '@/components/reset-button/reset-button';
import FilterPanel from '@/components/filter-panel/filter-panel';
import ActiveFilters from '@/components/active-filters/active-filters';
import styles from './page.module.css';

export const metadata = {
  title: 'Danh sách sản phẩm',
  description:
    'Danh sách biến tần, HMI, PLC, cảm biến Mitsubishi, Fuji chính hãng Nhật Bản. Sản phẩm mới và cũ với nhiều mức công suất.',
  openGraph: {
    title: 'Danh sách sản phẩm - LTTN Electric',
    description:
      'Tìm kiếm biến tần, HMI, PLC, cảm biến Mitsubishi, Fuji chính hãng Nhật Bản tại LTTN Electric.',
  },
  alternates: {
    canonical: '/danh-sach-san-pham',
  },
};

async function Products({ query }) {
  const { products, pagination } = await fetchProducts(query);
  return <ProductList products={products} pagination={pagination} />;
}

export default async function ProductListPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams ? resolvedSearchParams : null;
  const [categories, brands] = await Promise.all([
    fetchCategories(),
    fetchBrands(),
  ]);

  const _FILTERINFO = [
    { nameFilter: 'category', title: 'Loại', optionsFilter: categories },
    { nameFilter: 'brand', title: 'Hãng', optionsFilter: brands },
    { nameFilter: 'isNew', title: 'Tình trạng', optionsFilter: [true, false] },
  ];

  if (brands.length === 0 || categories.length === 0) {
    return <div>Không có thông tin bộ lọc</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.toolbar} role="search" aria-label="Bộ lọc sản phẩm">
        <SearchBar />
        <FilterPanel>
          <div className={styles.filterGroup}>
            {_FILTERINFO.map((item, index) => (
              <DropDownFilter key={index} info={item} />
            ))}
            {query?.category === '5e67d1d3616a8d11cc4eacab' && <CapacityFilter />}
            <ResetButton />
          </div>
        </FilterPanel>
      </div>
      <ActiveFilters categories={categories} brands={brands} />
      <Suspense fallback={<ProductSkeleton count={12} />}>
        <Products query={query} />
      </Suspense>
    </div>
  );
}
