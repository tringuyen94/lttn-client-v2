import Link from 'next/link';
import { fetchProducts } from '@/services/products.services';
import ProductImage from '@/components/product/product-image';
import styles from './featured-products.module.css';

export default async function FeaturedProducts() {
  let products = [];
  try {
    const data = await fetchProducts({ isNew: true });
    products = data?.products ?? [];
  } catch {
    return null;
  }

  if (products.length === 0) return null;

  const displayed = products.slice(0, 8);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>Sản phẩm nổi bật</h2>
            <p className={styles.description}>
              Những sản phẩm mới nhất từ các thương hiệu hàng đầu Nhật Bản
            </p>
          </div>
          <Link href="/danh-sach-san-pham" className={styles.viewAll}>
            Xem tất cả &rarr;
          </Link>
        </div>
        <div className={styles.grid}>
          {displayed.map((product) => (
            <Link
              key={product._id}
              href={`/danh-sach-san-pham/${product.product_slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <ProductImage
                  imagePath={product.product_images[0]}
                  alt={product.product_name}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {product.product_isnew && (
                  <span className={styles.newBadge}>Mới</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.productName}>{product.product_name}</h3>
                {product.category && (
                  <span className={styles.category}>
                    {product.category.category_name || product.category.name}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.mobileViewAll}>
          <Link href="/danh-sach-san-pham" className={styles.viewAllBtn}>
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
