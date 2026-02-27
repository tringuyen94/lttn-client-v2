import React from 'react';
import styles from './project-item.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { baseURL } from '@/services/baseURL.services';

export default function ProjectItem({
  project_title,
  project_thumbnail,
  project_slug,
  createdAt,
}) {
  const dateObj = new Date(createdAt);
  return (
    <article className={styles.card} aria-label={project_title}>
      <Link
        className={styles.cardLink}
        href={`/du-an-thi-cong/${project_slug}`}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={`${baseURL}/${project_thumbnail}`}
            alt={`Dự án ${project_title}`}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{project_title}</h3>
          <time className={styles.date} dateTime={dateObj.toISOString()}>
            {dateObj.toLocaleDateString('vi-VN')}
          </time>
        </div>
      </Link>
    </article>
  );
}
