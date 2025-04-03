import CategoryList from '@/components/category/category-list';
import styles from './page.module.css';
export default async function Home() {
  return (
    <main>
      <CategoryList />
      <div className={styles.wrapper}>
        <div className={styles.map}>
          <h2 style={{ margin: '20px 0', textAlign: 'center' }}>Bản đồ</h2>
          <iframe
            title="LTTN Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.955289265438!2d106.72018597092931!3d10.860201690845258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752809b7ad8f6d%3A0xf6e2723389cf6d2b!2zNzQgxJAuIFF14buRYyBs4buZIDEzIGPFqSwgSGnhu4dwIELDrG5oIFBoxrDhu5tjLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1709888950639!5m2!1sen!2s"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
        <div className={styles.video}>
          <h2 style={{ margin: '20px 0', textAlign: 'center' }}>Giới thiệu</h2>
          <iframe
            width="100%"
            height={450}
            style={{ border: 'none' }}
            src="https://www.youtube.com/embed/2ZX_UyYlb60?si=_rvh_fLShniKD4GK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </main>
  );
}
