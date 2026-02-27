'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Contact from './contact';
import styles from './header.module.css';
import clsx from 'clsx';
import logo from '@/assets/logo.jpg';
import Image from 'next/image';
import Banner from '@/components/banner/banner';
import { usePathname } from 'next/navigation';

const _NAV_LINKS = [
  {
    path: '/',
    text: 'Trang chủ',
  },
  {
    path: '/danh-sach-san-pham',
    text: 'Danh sách sản phẩm',
  },
  {
    path: '/du-an-thi-cong',
    text: 'Dự án thi công',
  },
  {
    path: '/lien-he',
    text: 'Liên hệ',
  },
];

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = useCallback(() => setBurgerOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && burgerOpen) {
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [burgerOpen, closeMobileMenu]);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  const toggleMenu = () => setBurgerOpen((prev) => !prev);

  const handleBurgerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Chuyển đến nội dung chính
      </a>

      <div className={styles.topBar}>
        <Contact />
      </div>

      <div className={styles.bannerBar}>
        <Banner />
      </div>

      <nav className={styles.navbar} aria-label="Điều hướng chính">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logoLink} aria-label="LTTN Electric - Trang chủ">
            <Image
              src={logo}
              alt="LTTN Electric logo"
              className={styles.logo}
              priority
            />
          </Link>

          <button
            type="button"
            className={clsx(styles.burger, { [styles.burgerActive]: burgerOpen })}
            onClick={toggleMenu}
            onKeyDown={handleBurgerKeyDown}
            aria-label={burgerOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={burgerOpen}
            aria-controls="main-nav"
          >
            <span />
            <span />
            <span />
          </button>

          <ul
            id="main-nav"
            role="menubar"
            className={clsx(styles.navLinks, { [styles.navLinksOpen]: burgerOpen })}
            aria-label="Menu điều hướng"
          >
            {_NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path} role="none">
                  <Link
                    href={link.path}
                    role="menuitem"
                    onClick={closeMobileMenu}
                    className={clsx(styles.navLink, { [styles.navLinkActive]: isActive })}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
