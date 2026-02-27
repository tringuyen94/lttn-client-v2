'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './pagination.module.css';

function buildPageUrl(searchParams, page, basePath = '/danh-sach-san-pham') {
  const params = new URLSearchParams(searchParams.toString());
  if (page <= 1) {
    params.delete('page');
  } else {
    params.set('page', page);
  }
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

function getPageNumbers(currentPage, totalPages) {
  const pages = [];
  const delta = 1;

  const rangeStart = Math.max(2, currentPage - delta);
  const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

  pages.push(1);

  if (rangeStart > 2) {
    pages.push('...');
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i);
  }

  if (rangeEnd < totalPages - 1) {
    pages.push('...');
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}

export default function Pagination({ pagination, basePath = '/danh-sach-san-pham', label = 'sản phẩm' }) {
  const searchParams = useSearchParams();
  const { total, page, limit, totalPages } = pagination;

  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);
  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  return (
    <nav aria-label={`Phân trang ${label}`}>
      <p className={styles.info}>
        Hiển thị {startItem}–{endItem} trong tổng số {total} {label}
      </p>
      <div className={styles.pagination}>
        <Link
          href={buildPageUrl(searchParams, page - 1, basePath)}
          className={`${styles.pageLink} ${page <= 1 ? styles.disabled : ''}`}
          aria-label="Trang trước"
          aria-disabled={page <= 1}
          tabIndex={page <= 1 ? -1 : 0}
          scroll={false}
        >
          <FaChevronLeft aria-hidden="true" />
        </Link>

        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className={styles.ellipsis} aria-hidden="true">
              ...
            </span>
          ) : (
            <Link
              key={p}
              href={buildPageUrl(searchParams, p, basePath)}
              className={`${styles.pageLink} ${p === page ? styles.active : ''}`}
              aria-label={`Trang ${p}`}
              aria-current={p === page ? 'page' : undefined}
              scroll={false}
            >
              {p}
            </Link>
          )
        )}

        <Link
          href={buildPageUrl(searchParams, page + 1, basePath)}
          className={`${styles.pageLink} ${page >= totalPages ? styles.disabled : ''}`}
          aria-label="Trang sau"
          aria-disabled={page >= totalPages}
          tabIndex={page >= totalPages ? -1 : 0}
          scroll={false}
        >
          <FaChevronRight aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
}
