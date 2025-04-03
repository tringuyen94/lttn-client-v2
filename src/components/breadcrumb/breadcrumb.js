'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  const [isSticky, setIsSticky] = useState(false);
  const breadcrumbRef = useRef(null);

  // Function to handle scroll event
  const handleScroll = () => {
    const breadcrumbTop = breadcrumbRef.current?.offsetTop;
    if (window.scrollY > breadcrumbTop) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      ref={breadcrumbRef}
      aria-label="breadcrumb"
      className={`${styles.breadcrumb} ${isSticky ? styles.sticky : ''}`}
    >
      <ul className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link href="/">Trang chủ</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = `/${pathArray.slice(0, index + 1).join('/')}`;
          const isLast = index === pathArray.length - 1;
          return (
            <li
              key={index}
              className={`${styles.breadcrumbItem} ${
                isLast ? styles.active : ''
              }`}
            >
              {isLast ? (
                <span>{path.replace(/-/g, ' ')}</span>
              ) : (
                <Link href={href}>{path.replace(/-/g, ' ')}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
