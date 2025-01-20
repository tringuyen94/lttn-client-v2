'use client';
import React, { Fragment, useState } from 'react';
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

  return (
    <Fragment>
      <Contact />
      <nav className={styles.navigation}>
        <div
          className={clsx(styles.burger, { [styles.active]: burgerOpen })}
          onClick={() => setBurgerOpen(!burgerOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles.logo} priority />
          </Link>
        </div>
        <Banner />
      </nav>
      <ul className={clsx(styles.navLinks, { [styles.active]: burgerOpen })}>
        {_NAV_LINKS.map((link) => {
          return (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setBurgerOpen(false)}
                className={pathname === link.path ? styles.linkActived : null}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
