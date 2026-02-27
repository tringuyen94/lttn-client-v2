import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { FaPhone, FaTag, FaBolt, FaCheckCircle, FaBoxOpen } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import PhotoGallery from '@/components/gallery/gallery';
import ProductItem from '@/components/product/product-item';
import { fetchProductBySlug } from '@/services/products.services';
import { baseURL } from '@/services/baseURL.services';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { product } = await fetchProductBySlug(slug);
    const imageUrl = product.product_images?.[0]
      ? `${baseURL}/${product.product_images[0]}`
      : undefined;

    const condition = product.product_isnew ? 'Mới' : 'Cũ';
    const description = `${product.product_name} - ${product.category?.category_name || 'Sản phẩm'} ${condition}${
      product.product_capacity ? ` - Công suất ${product.product_capacity}kw` : ''
    }. Hãng ${product.brand?.brand_name || ''}. Liên hệ LTTN Electric để được tư vấn.`;

    return {
      title: product.product_name,
      description,
      openGraph: {
        title: `${product.product_name} - LTTN Electric`,
        description,
        type: 'article',
        images: imageUrl ? [{ url: imageUrl, alt: product.product_name }] : [],
      },
      alternates: {
        canonical: `/danh-sach-san-pham/${slug}`,
      },
    };
  } catch {
    return {
      title: 'Sản phẩm',
      description: 'Chi tiết sản phẩm tại LTTN Electric.',
    };
  }
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const { product, similarProducts } = await fetchProductBySlug(slug);

  const isInverter = product.category._id === '5e67d1d3616a8d11cc4eacab';

  return (
    <div className={styles.page}>
      {/* Top section: Gallery + Info side by side on desktop */}
      <div className={styles.topSection}>
        <div className={styles.galleryCol}>
          <PhotoGallery listImages={product.product_images} />
        </div>

        <div className={styles.infoCol}>
          <h1 className={styles.productName}>{product.product_name}</h1>

          {product.brand?.brand_name && (
            <p className={styles.brand}>
              Hãng: <strong>{product.brand.brand_name}</strong>
            </p>
          )}

          <div className={styles.specs}>
            <div className={styles.specItem}>
              <FaTag className={styles.specIcon} aria-hidden="true" />
              <div>
                <span className={styles.specLabel}>Loại sản phẩm</span>
                <span className={styles.specValue}>{product.category.category_name}</span>
              </div>
            </div>

            {isInverter && (
              <div className={styles.specItem}>
                <FaBolt className={styles.specIcon} aria-hidden="true" />
                <div>
                  <span className={styles.specLabel}>Công suất</span>
                  <span className={styles.specValue}>{product.product_capacity} kW</span>
                </div>
              </div>
            )}

            <div className={styles.specItem}>
              {product.product_isnew ? (
                <FaCheckCircle className={styles.specIconNew} aria-hidden="true" />
              ) : (
                <FaBoxOpen className={styles.specIcon} aria-hidden="true" />
              )}
              <div>
                <span className={styles.specLabel}>Tình trạng</span>
                <span className={`${styles.specValue} ${product.product_isnew ? styles.statusNew : styles.statusUsed}`}>
                  {product.product_isnew ? 'Mới 100%' : 'Đã qua sử dụng'}
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <p className={styles.ctaLabel}>Liên hệ để được tư vấn & báo giá tốt nhất</p>
            <div className={styles.ctaActions}>
              <a href="tel:0931839693" className={styles.ctaPhone}>
                <FaPhone aria-hidden="true" />
                0931.839.693
              </a>
              <a
                href="https://zalo.me/0931839693"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaZalo}
              >
                <SiZalo aria-hidden="true" />
                Zalo tư vấn
              </a>
            </div>
            <Link href="/lien-he" className={styles.ctaContact}>
              Hoặc gửi yêu cầu qua trang liên hệ &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Product description */}
      {product.product_description && (
        <section className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>Chi tiết sản phẩm</h2>
          <div
            className={styles.descriptionContent}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.product_description),
            }}
          />
        </section>
      )}

      {/* Similar products */}
      {similarProducts.length > 0 && (
        <section className={styles.similarSection}>
          <h2 className={styles.sectionTitle}>Sản phẩm tương tự</h2>
          <ul className={styles.similarGrid}>
            {similarProducts.map((similarProduct) => (
              <li key={similarProduct._id}>
                <ProductItem product={similarProduct} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
