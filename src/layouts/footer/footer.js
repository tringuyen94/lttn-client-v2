import React from 'react';
import BottomFooter from './bottom-footer';
import styles from './footer.module.css';
import TopFooter from './top-footer';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <TopFooter />
      <BottomFooter />
    </div>
  );
}
