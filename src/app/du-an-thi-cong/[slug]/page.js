import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaArrowLeft } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { fetchProjectBySlug } from '@/services/projects.services';
import { baseURL } from '@/services/baseURL.services';
import ProjectItem from '@/components/project/project-item';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { project } = await fetchProjectBySlug(slug);
    const imageUrl = project.project_thumbnail
      ? `${baseURL}/${project.project_thumbnail}`
      : undefined;

    return {
      title: project.project_title,
      description: `Dự án thi công: ${project.project_title} - LTTN Electric. Xem chi tiết quá trình thi công lắp đặt.`,
      openGraph: {
        title: `${project.project_title} - LTTN Electric`,
        description: `Dự án thi công: ${project.project_title}`,
        type: 'article',
        images: imageUrl
          ? [{ url: imageUrl, alt: project.project_title }]
          : [],
        publishedTime: project.createdAt,
      },
      alternates: {
        canonical: `/du-an-thi-cong/${slug}`,
      },
    };
  } catch {
    return {
      title: 'Dự án thi công',
      description: 'Chi tiết dự án thi công tại LTTN Electric.',
    };
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const { project, relatedProjects } = await fetchProjectBySlug(slug);
  const {
    createdAt,
    project_title,
    project_thumbnail,
    project_slug,
    project_content,
  } = project;

  return (
    <article className={styles.wrapper}>
      <div className={styles.header}>
        <time className={styles.date} dateTime={new Date(createdAt).toISOString()}>
          {new Date(createdAt).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h1 className={styles.title}>{project_title}</h1>
      </div>

      {project_thumbnail && (
        <div className={styles.heroImage}>
          <Image
            src={`${baseURL}/${project_thumbnail}`}
            alt={`Dự án ${project_slug}`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>
      )}

      {project_content && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project_content) }}
        />
      )}

      <div className={styles.cta}>
        <p className={styles.ctaHeading}>Bạn quan tâm đến dự án tương tự?</p>
        <p className={styles.ctaDescription}>
          Liên hệ ngay để được tư vấn và báo giá miễn phí
        </p>
        <div className={styles.ctaActions}>
          <a href="tel:0931839693" className={styles.ctaPhone}>
            <FaPhone aria-hidden="true" />
            0931.839.693
          </a>
          <a
            href="https://zalo.me/0931839693"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaZalo}
          >
            <SiZalo aria-hidden="true" />
            Zalo
          </a>
          <Link href="/lien-he" className={styles.ctaContact}>
            Liên hệ
          </Link>
        </div>
      </div>

      {relatedProjects?.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedHeading}>Dự án khác</h2>
          <div className={styles.relatedGrid}>
            {relatedProjects.map((p) => (
              <ProjectItem key={p._id} {...p} />
            ))}
          </div>
        </section>
      )}

      <div className={styles.backLink}>
        <Link href="/du-an-thi-cong" className={styles.backButton}>
          <FaArrowLeft aria-hidden="true" />
          Tất cả dự án
        </Link>
      </div>
    </article>
  );
}
