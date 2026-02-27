import Image from 'next/image';
import Link from 'next/link';
import { baseURL } from '@/services/baseURL.services';
import { fetchProjects } from '@/services/projects.services';
import styles from './featured-projects.module.css';

export default async function FeaturedProjects() {
  let projects = [];
  try {
    const data = await fetchProjects({ limit: 4, page: 1 });
    projects = data?.projects ?? data ?? [];
  } catch {
    return null;
  }

  if (projects.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>Dự án thi công</h2>
            <p className={styles.description}>
              Những dự án LTTN Electric đã triển khai thành công
            </p>
          </div>
          <Link href="/du-an-thi-cong" className={styles.viewAll}>
            Xem tất cả &rarr;
          </Link>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/du-an-thi-cong/${project.project_slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={`${baseURL}/${project.project_thumbnail}`}
                  alt={project.project_title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.project_title}</h3>
                <time
                  className={styles.date}
                  dateTime={new Date(project.createdAt).toISOString()}
                >
                  {new Date(project.createdAt).toLocaleDateString('vi-VN')}
                </time>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.mobileViewAll}>
          <Link href="/du-an-thi-cong" className={styles.viewAllBtn}>
            Xem tất cả dự án
          </Link>
        </div>
      </div>
    </section>
  );
}
