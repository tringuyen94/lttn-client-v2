import React from 'react';
import PhotoGallery from '@/components/gallery/gallery';
import { fetchProductBySlug } from '@/services/products.services';
import styles from './page.module.css';
export default async function ProductDetailPage({ params }) {
  const product = await fetchProductBySlug(params.slug);

  return (
    <div className={styles.productDetail}>
      <PhotoGallery listImages={product.product_images} />
      <div className={styles.productInfo}>
        <h2>{product.product_name}</h2>
        <ul>
          <li>
            Loại sản phẩm:<span> {product.category.category_name}</span>
          </li>
          {product.category._id === '5e67d1d3616a8d11cc4eacab' ? (
            <li>
              Công suất:&nbsp;
              <span>
                {product.product_capacity} <small>kw</small>
              </span>
            </li>
          ) : null}
          <li>
            Tình trạng: <span>{product.produdct_isnew ? 'Mới' : 'Cũ'}</span>
          </li>
        </ul>
        <div className={styles.detailWrapper}>
          <h3>Chi tiết sản phẩm:</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: product.product_description,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
