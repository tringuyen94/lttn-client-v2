'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './breadcrumb.module.css';

const ROUTE_LABELS = {
  'danh-sach-san-pham': 'Danh sách sản phẩm',
  'du-an-thi-cong': 'Dự án thi công',
  'lien-he': 'Liên hệ',
};

function getLabel(slug) {
  if (ROUTE_LABELS[slug]) return ROUTE_LABELS[slug];
  return decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter(Boolean);

  if (pathArray.length === 0) return null;

  return (
    <nav aria-label="Đường dẫn" className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link href="/">Trang chủ</Link>
        </li>
        {pathArray.map((segment, index) => {
          const href = `/${pathArray.slice(0, index + 1).join('/')}`;
          const isLast = index === pathArray.length - 1;
          const label = getLabel(segment);

          return (
            <li
              key={href}
              className={`${styles.breadcrumbItem} ${isLast ? styles.active : ''}`}
            >
              {isLast ? (
                <span aria-current="page">{label}</span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
