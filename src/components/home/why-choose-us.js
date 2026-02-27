import {
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaCertificate,
} from 'react-icons/fa';
import styles from './why-choose-us.module.css';

const REASONS = [
  {
    icon: FaCertificate,
    title: 'Chính hãng 100%',
    description:
      'Sản phẩm nhập khẩu trực tiếp từ các thương hiệu hàng đầu Nhật Bản như Mitsubishi, Fuji.',
  },
  {
    icon: FaShieldAlt,
    title: 'Bảo hành uy tín',
    description:
      'Chế độ bảo hành chính hãng, đổi trả nhanh chóng, đảm bảo quyền lợi khách hàng.',
  },
  {
    icon: FaTools,
    title: 'Thi công trọn gói',
    description:
      'Đội ngũ kỹ thuật nhiều năm kinh nghiệm, thi công lắp đặt chuyên nghiệp tại TPHCM.',
  },
  {
    icon: FaHeadset,
    title: 'Tư vấn miễn phí',
    description:
      'Hỗ trợ tư vấn kỹ thuật miễn phí, giúp bạn chọn đúng sản phẩm phù hợp nhu cầu.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <span className={styles.accent} />
          <h2 className={styles.heading}>Tại sao chọn LTTN Electric?</h2>
          <p className={styles.description}>
            Nhiều năm kinh nghiệm trong lĩnh vực thiết bị điện công nghiệp
          </p>
        </div>
        <div className={styles.grid}>
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
