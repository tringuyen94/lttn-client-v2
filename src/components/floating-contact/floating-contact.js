'use client';

import { useState, useEffect, useCallback } from 'react';
import { SiZalo } from 'react-icons/si';
import { FaPhone, FaTimes, FaHeadset } from 'react-icons/fa';
import styles from './floating-contact.module.css';

const CONTACTS = [
  {
    id: 'zalo',
    label: 'Zalo',
    href: 'https://zalo.me/0931839693',
    icon: SiZalo,
    color: '#0068ff',
  },
  {
    id: 'hotline',
    label: '0931.839.693',
    href: 'tel:0931839693',
    icon: FaPhone,
    color: '#d10024',
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <div className={styles.wrapper} aria-label="Liên hệ nhanh">
      <div className={`${styles.items} ${open ? styles.itemsOpen : ''}`}>
        {CONTACTS.map((c, i) => {
          const Icon = c.icon;
          return (
            <a
              key={c.id}
              href={c.href}
              target={c.id === 'zalo' ? '_blank' : undefined}
              rel={c.id === 'zalo' ? 'noopener noreferrer' : undefined}
              className={styles.item}
              style={{ '--item-color': c.color, '--i': i }}
              aria-label={`${c.label} (${c.id === 'zalo' ? 'mở tab mới' : 'gọi điện'})`}
              tabIndex={open ? 0 : -1}
            >
              <Icon className={styles.itemIcon} aria-hidden="true" />
              <span className={styles.itemLabel}>{c.label}</span>
            </a>
          );
        })}
      </div>

      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? 'Đóng menu liên hệ' : 'Mở menu liên hệ'}
      >
        <FaHeadset className={`${styles.fabIcon} ${styles.iconDefault}`} aria-hidden="true" />
        <FaTimes className={`${styles.fabIcon} ${styles.iconClose}`} aria-hidden="true" />
        {!open && <span className={styles.pulse} />}
      </button>
    </div>
  );
}
