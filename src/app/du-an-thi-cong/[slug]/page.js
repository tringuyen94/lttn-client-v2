import React from 'react';
import { fetchProjectBySlug } from '@/services/projects.services';
import Image from 'next/image';

import styles from './page.module.css';
import { baseURL } from '@/services/baseURL.services';
export default async function ProjectDetailPage({ params }) {
  const {
    createdAt,
    project_title,
    project_thumbnail,
    project_slug,
    project_content,
  } = await fetchProjectBySlug(params.slug);

  return (
    <div className={styles.projectDetailWrapper}>
      <div className={styles.projectHeader}>
        <datetime>{new Date(createdAt).toLocaleString('vi-VN')}</datetime>
        <h2>{project_title}</h2>
      </div>
      <div className={styles.projectThumbnail}>
        <Image
          src={`${baseURL}/${project_thumbnail}`}
          alt={`${project_slug}`}
          fill
        />
      </div>
      <div className={styles.projectBody}>
        <p dangerouslySetInnerHTML={{ __html: project_content }} />
      </div>
    </div>
  );
}
