import Link from 'next/link';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <FaExclamationTriangle className={styles.icon} aria-hidden="true" />
      <h1 className={styles.title}>Không tìm thấy trang</h1>
      <p className={styles.message}>
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link href="/" className={styles.homeLink}>
        <FaHome aria-hidden="true" />
        Quay về trang chủ
      </Link>
    </div>
  );
}
