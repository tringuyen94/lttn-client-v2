import React from 'react';
import Link from 'next/link';
import styles from './top-footer.module.css';
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarker,
  FaMoneyBillWave,
  FaPhone,
  FaChevronRight,
} from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';

const QUICK_LINKS = [
  { path: '/', text: 'Trang chủ' },
  { path: '/danh-sach-san-pham', text: 'Danh sách sản phẩm' },
  { path: '/du-an-thi-cong', text: 'Dự án thi công' },
  { path: '/lien-he', text: 'Liên hệ' },
];

export default function TopFooter() {
  return (
    <div className={styles.topFooterWrapper}>
      <div className={styles.topFooter}>
        <h3 className={styles.topFooterTitle}>Công ty chúng tôi</h3>
        <p>Chuyên kinh doanh Biến tần, HMI, PLC, Cảm biến Mitsubishi, Fuji</p>
      </div>
      <div className={styles.topFooter}>
        <h3 className={styles.topFooterTitle}>Liên kết nhanh</h3>
        <nav aria-label="Liên kết nhanh trong footer">
          <ul className={styles.quickLinks}>
            {QUICK_LINKS.map((link) => (
              <li key={link.path}>
                <FaChevronRight aria-hidden="true" className={styles.quickLinkIcon} />
                <Link href={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`${styles.topFooter} ${styles.first}`}>
        <h3 className={styles.topFooterTitle}>Liên hệ</h3>
        <ul className={styles.topFooterLinks} aria-label="Thông tin liên hệ">
          <li>
            <FaMapMarker aria-hidden="true" />
            74/21 Quốc lộ 13 cũ, Phường Hiệp Bình Phước, Thành phố Thủ Đức,
            TPHCM
          </li>
          <li>
            <FaMoneyBillWave aria-hidden="true" />
            MST: 0315490830
          </li>
          <li>
            <FaPhone aria-hidden="true" />
            Kỹ thuật : 0938.068.545 (Thiện)
          </li>
          <li>
            <FaPhone aria-hidden="true" />
            Hotline: 0931.839.693 (Long)
          </li>
          <li>
            <FaEnvelope aria-hidden="true" />
            lttnelectric@gmail.com
          </li>
          <li>
            <FaFacebook aria-hidden="true" />
            <a
              href="https://www.facebook.com/tranduythienhcm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook - Biến tần Nhật (mở tab mới)"
            >
              Biến tần Nhật
            </a>
          </li>
          <li>
            <BsBank2 aria-hidden="true" />
            STK Doanh Nghiệp: Eximbank 182280700000013
          </li>
          <li>
            <BsBank2 aria-hidden="true" />
            STK Cá nhân: Eximbank 180214849049153 (Vương Thanh Long)
          </li>
        </ul>
      </div>
    </div>
  );
}
