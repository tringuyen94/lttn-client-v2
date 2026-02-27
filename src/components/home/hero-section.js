import Link from 'next/link';
import styles from './hero-section.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.badge}>LTTN Electric</p>
        <h1 className={styles.title}>
          Chuyên Cung Cấp
          <br />
          <span className={styles.highlight}>Thiết Bị Điện Công Nghiệp</span>
        </h1>
        <p className={styles.subtitle}>
          Biến tần, HMI, PLC, Cảm biến Mitsubishi &amp; Fuji chính hãng.
          <br />
          Tư vấn, cung cấp và thi công lắp đặt tại TP.HCM.
        </p>
        <div className={styles.actions}>
          <Link href="/danh-sach-san-pham" className={styles.primaryBtn}>
            Xem sản phẩm
          </Link>
          <Link href="/lien-he" className={styles.secondaryBtn}>
            Liên hệ tư vấn
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Sản phẩm</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Dự án</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Năm kinh nghiệm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
