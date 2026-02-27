import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';
import styles from './cta-section.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            Bạn cần tư vấn
            <br />
            <span className={styles.highlight}>giải pháp điện công nghiệp?</span>
          </h2>
          <p className={styles.description}>
            Đội ngũ kỹ thuật của LTTN Electric sẵn sàng hỗ trợ bạn 
            lựa chọn sản phẩm phù hợp và thi công lắp đặt chuyên nghiệp.
          </p>
          <div className={styles.actions}>
            <Link href="/lien-he" className={styles.ctaBtn}>
              Liên hệ ngay
            </Link>
            <Link href="/du-an-thi-cong" className={styles.projectsLink}>
              Xem dự án đã thực hiện &rarr;
            </Link>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}><FaPhone /></span>
              <div>
                <span className={styles.contactLabel}>Hotline</span>
                <a href="tel:0931839693" className={styles.contactValue}>0931.839.693 (Long)</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}><FaPhone /></span>
              <div>
                <span className={styles.contactLabel}>Kỹ thuật</span>
                <a href="tel:0938068545" className={styles.contactValue}>0938.068.545 (Thiện)</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}><FaEnvelope /></span>
              <div>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:lttnelectric@gmail.com" className={styles.contactValue}>
                  lttnelectric@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}><FaFacebook /></span>
              <div>
                <span className={styles.contactLabel}>Facebook</span>
                <a
                  href="https://www.facebook.com/tranduythienhcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  Biến tần Nhật
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapCol}>
          <div className={styles.mapFrame}>
            <iframe
              title="LTTN Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.955289265438!2d106.72018597092931!3d10.860201690845258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752809b7ad8f6d%3A0xf6e2723389cf6d2b!2zNzQgxJAuIFF14buRYyBs4buZIDEzIGPFqSwgSGnhu4dwIELDrG5oIFBoxrDhu5tjLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1709888950639!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
