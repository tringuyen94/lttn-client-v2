/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './contact.module.css';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <ul className={styles.contactLinks}>
        <li>
          <a href="https://www.facebook.com/tranduythienhcm" target="blank">
            <FaFacebook /> &nbsp; Biến tần Nhật
          </a>
        </li>
        <li>
          <a href="https://zalo.me/0931839693" target="blank">
            <SiZalo /> &nbsp; 0931.839.693
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCuxbTul1NZwm9ypDXj8I3wQ"
            target="blank"
          >
            <FaYoutube /> &nbsp; LTTN Electric Channel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
