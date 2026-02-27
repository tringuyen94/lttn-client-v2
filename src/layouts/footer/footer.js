import React from 'react';
import BottomFooter from './bottom-footer';
import styles from './footer.module.css';
import TopFooter from './top-footer';

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Thông tin công ty">
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}
