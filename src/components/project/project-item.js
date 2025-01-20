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
  return (
    <Link
      className={styles.projectWrapper}
      href={`/du-an-thi-cong/${project_slug}`}
    >
      <div className={styles.projectImageWrapper}>
        <Image
          src={`${baseURL}/${project_thumbnail}`}
          alt={project_title}
          fill
        />
      </div>
      <div className={styles.projectInfo}>
        <h4>{project_title}</h4>
        <datetime>{new Date(createdAt).toLocaleString('vi-VN')}</datetime>
      </div>
    </Link>
  );
}
