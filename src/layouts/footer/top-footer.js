import React from 'react';
import styles from './top-footer.module.css';
import axios from 'axios';
import {
  FaEnvelope,
  FaEye,
  FaFacebook,
  FaMapMarker,
  FaMoneyBillWave,
  FaPhone,
} from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
export default async function TopFooter() {
  const url = 'http://localhost:8080/api/v1/counter';
  const response = await axios.get(url);
  const visitors = await response.data.metadata;

  return (
    <div className={styles.topFooterWrapper}>
      <div className={styles.topFooter}>
        <h3 className={styles.topFooterTitle}> Công ty chúng tôi</h3>
        <p>Chuyên kinh doanh Biến tần, HMI, PLC, Cảm biến Mitsubishi, Fuji</p>
      </div>
      <div className={`${styles.topFooter} ${styles.first}`}>
        <h3 className={styles.topFooterTitle}>Liên hệ</h3>
        <ul className={styles.topFooterLinks}>
          <li>
            <FaMapMarker />
            74/21 Quốc lộ 13 cũ, Phường Hiệp Bình Phước, Thành phố Thủ ĐỨc,
            TPHCM
          </li>
          <li>
            <FaMoneyBillWave />
            MST: 0315490830
          </li>
          <li>
            <FaPhone />
            Kỹ thuật : 0938.068.545 (Thiện)
          </li>
          <li>
            <FaPhone />
            Hotline: 0931.839.693 (Long)
          </li>

          <li>
            <FaEnvelope />
            lttnelectric@gmail.com
          </li>
          <li>
            <FaFacebook />
            <a
              href="https://www.facebook.com/tranduythienhcm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biến tần Nhật
            </a>
          </li>
          <li>
            <BsBank2 />
            STK Doanh Nghiệp: Eximbank 182280700000013
          </li>
          <li>
            <BsBank2 />
            STK Cá nhân: Eximbank 180214849049153 (Vương Thanh Long)
          </li>
        </ul>
      </div>
      <div className={styles.topFooter}>
        <h3 className={styles.topFooterTitle}>Lượt truy cập</h3>
        <ul className={styles.topFooterLinks}>
          <li>
            <FaEye />
            {/* {counterVisitor} */}
            &nbsp;<span style={{ fontSize: '30px' }}>{visitors} </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
