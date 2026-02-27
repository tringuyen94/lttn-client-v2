import React from 'react';
import Link from 'next/link';
import ProductImage from './product-image';
import styles from './product-item.module.css';

export default function ProductItem({ product, priority = false }) {
  const { product_name, product_slug, product_images, product_isnew, brand, category } = product;

  return (
    <article className={styles.card} aria-label={product_name}>
      <Link href={`/danh-sach-san-pham/${product_slug}`} className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          <ProductImage
            imagePath={product_images[0]}
            alt={`Hình ảnh sản phẩm ${product_name}`}
            sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            priority={priority}
          />
          {product_isnew !== undefined && (
            <span className={`${styles.badge} ${product_isnew ? styles.badgeNew : styles.badgeUsed}`}>
              {product_isnew ? 'Mới' : 'Cũ'}
            </span>
          )}
        </div>
        <div className={styles.body}>
          <h5 className={styles.name}>{product_name}</h5>
          <div className={styles.meta}>
            {brand?.brand_name && <span className={styles.metaItem}>{brand.brand_name}</span>}
            {category?.category_name && <span className={styles.metaItem}>{category.category_name}</span>}
          </div>
        </div>
      </Link>
    </article>
  );
}
