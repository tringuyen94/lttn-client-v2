'use client';

import { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './back-to-top.module.css';

const SHOW_THRESHOLD = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > SHOW_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
      tabIndex={visible ? 0 : -1}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}
