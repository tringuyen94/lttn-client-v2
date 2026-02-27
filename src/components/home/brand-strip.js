import { fetchBrands } from '@/services/brands.services';
import styles from './brand-strip.module.css';

export default async function BrandStrip() {
  let brands = [];
  try {
    brands = await fetchBrands();
  } catch {
    return null;
  }

  if (!brands || brands.length === 0) return null;

  const doubled = [...brands, ...brands];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.track}>
          <div className={styles.scroll}>
            {doubled.map((brand, i) => (
              <span key={`${brand._id}-${i}`} className={styles.brand}>
                {brand.brand_name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
