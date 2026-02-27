import styles from './about-section.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <span className={styles.accent} />
          <h2 className={styles.heading}>Về LTTN Electric</h2>
          <p className={styles.text}>
            LTTN Electric chuyên kinh doanh các thiết bị điện công nghiệp như
            biến tần, HMI, PLC, cảm biến từ các thương hiệu hàng đầu Nhật Bản.
          </p>
          <p className={styles.text}>
            Với nhiều năm kinh nghiệm, chúng tôi tự hào mang đến giải pháp
            toàn diện từ tư vấn, cung cấp thiết bị đến thi công lắp đặt cho các
            doanh nghiệp tại TP.HCM và khu vực phía Nam.
          </p>
        </div>
        <div className={styles.videoCol}>
          <div className={styles.videoFrame}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              src="https://www.youtube.com/embed/2ZX_UyYlb60?si=_rvh_fLShniKD4GK"
              title="Giới thiệu LTTN Electric"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
