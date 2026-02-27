import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './banner.module.css';

const _ITEMS = [
  { icon: FaPhone, text: 'Hotline: 0931.839.693' },
  { icon: FaEnvelope, text: 'lttnelectric@gmail.com' },
  { icon: FaMapMarkerAlt, text: '74/21 Quốc lộ 13, Hiệp Bình Phước, Thủ Đức, TPHCM' },
];

const Banner = () => {
  const items = [..._ITEMS, ..._ITEMS];

  return (
    <div className={styles.banner} aria-label="Thông tin liên hệ nhanh">
      <div className={styles.track}>
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <span key={i} className={styles.item} aria-hidden={i >= _ITEMS.length}>
              <Icon className={styles.icon} aria-hidden="true" />
              {item.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
