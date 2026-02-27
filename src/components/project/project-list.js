'use client';

import React, { Fragment, Suspense } from 'react';
import styles from './project-list.module.css';
import ProjectItem from './project-item';
import Pagination from '@/components/pagination/pagination';

export default function ProjectList({ projects, pagination }) {
  if (!projects?.length) {
    return (
      <div className={styles.emptyState}>
        <p>Chưa có dự án nào được đăng tải.</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectItem key={project._id} {...project} />
        ))}
      </div>
      {pagination && (
        <Suspense fallback={null}>
          <Pagination
            pagination={pagination}
            basePath="/du-an-thi-cong"
            label="dự án"
          />
        </Suspense>
      )}
    </Fragment>
  );
}
