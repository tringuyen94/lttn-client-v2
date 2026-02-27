import React from 'react';
import styles from './contact.module.css';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Contact = () => {
  return (
    <div className={styles.contact} role="complementary" aria-label="Thông tin liên hệ nhanh">
      <ul className={styles.contactLinks}>
        <li>
          <a
            href="https://www.facebook.com/tranduythienhcm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook - Biến tần Nhật (mở tab mới)"
          >
            <FaFacebook aria-hidden="true" /> &nbsp; Biến tần Nhật
          </a>
        </li>
        <li>
          <a
            href="https://zalo.me/0931839693"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zalo - 0931.839.693 (mở tab mới)"
          >
            <SiZalo aria-hidden="true" /> &nbsp; 0931.839.693
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCuxbTul1NZwm9ypDXj8I3wQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube - LTTN Electric Channel (mở tab mới)"
          >
            <FaYoutube aria-hidden="true" /> &nbsp; LTTN Electric Channel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
