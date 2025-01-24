import { FaEnvelope, FaMapMarked, FaFacebook } from 'react-icons/fa';
import styles from './page.module.css';
import { SiZalo } from 'react-icons/si';

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Liên hệ</h1>
      <div className={styles.contactInfo}>
        <h3>Bản đồ</h3>
        <iframe
          title="LTTN Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.955289265438!2d106.72018597092931!3d10.860201690845258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752809b7ad8f6d%3A0xf6e2723389cf6d2b!2zNzQgxJAuIFF14buRYyBs4buZIDEzIGPFqSwgSGnhu4dwIELDrG5oIFBoxrDhu5tjLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1709888950639!5m2!1sen!2s"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>

      <div className={styles.contactInfo}>
        <h3>Thông tin liên lạc</h3>
        <p>
          <FaMapMarked /> &nbsp; 74/21 Quốc lộ 13 cũ, Phường Hiệp Bình Phước,
          Thành phố Thủ Đức, TPHCM
        </p>
        <p>
          <FaFacebook /> &nbsp; Biến tần Nhật
        </p>
        <p>
          <SiZalo /> &nbsp; 0931.839.693
        </p>
        <p>
          <FaEnvelope /> &nbsp; lttnelectric@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
