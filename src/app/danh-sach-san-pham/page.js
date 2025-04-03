import React, { Fragment, Suspense } from 'react';
import ProductList from '@/components/product/product-list';
import { fetchProducts } from '@/services/products.services';
import SearchBar from '@/components/search-bar/search-bar';
import { fetchCategories } from '@/services/categories.services';
import { fetchBrands } from '@/services/brands.services';
import DropDownFilter from '@/components/dropdown-filter/dropdown-filter';
import ProductLoading from '../loading';
import CapacityFilter from '@/components/capacity-filter/capacity-filter';
import styles from './page.module.css';
import ResetButton from '@/components/reset-button/reset-button';
async function Products({ query }) {
  const products = await fetchProducts(query);

  return <ProductList products={products} />;
}

export default async function ProductListPage({ searchParams }) {
  const query = searchParams ? searchParams : null;
  const categories = await fetchCategories();
  const brands = await fetchBrands();

  const _FILTERINFO = [
    { nameFilter: 'category', title: 'Loại', optionsFilter: categories },
    { nameFilter: 'brand', title: 'Hãng', optionsFilter: brands },
    { nameFilter: 'isNew', title: 'Tình trạng', optionsFilter: [true, false] },
  ];
  // Check if FILTERINFO has options
  if (
    _FILTERINFO.length === 0 ||
    brands.length === 0 ||
    categories.length === 0
  ) {
    return <div>No filter info available</div>; // Handle empty filter info
  }

  return (
    <div className={styles.productListPageWrapper}>
      <div className={styles.filterWrapper}>
        <SearchBar />
        {_FILTERINFO.map((item, index) => {
          return <DropDownFilter key={index} info={item} />;
        })}
        {query.category === '5e67d1d3616a8d11cc4eacab' && <CapacityFilter />}
        <ResetButton />
      </div>
      <Suspense fallback={<ProductLoading />}>
        <Products query={query} />
      </Suspense>
    </div>
  );
}
