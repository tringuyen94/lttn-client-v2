import ProjectList from '@/components/project/project-list';
import { fetchProjects } from '@/services/projects.services';
import React, { Suspense } from 'react';
import Loading from '../loading';
import styles from './page.module.css';

export const metadata = {
  title: 'Dự án thi công',
  description:
    'Các dự án thi công lắp đặt biến tần, hệ thống điện công nghiệp của LTTN Electric tại TPHCM và các tỉnh.',
  openGraph: {
    title: 'Dự án thi công - LTTN Electric',
    description:
      'Xem các dự án thi công lắp đặt biến tần, hệ thống điện công nghiệp đã hoàn thành.',
  },
  alternates: {
    canonical: '/du-an-thi-cong',
  },
};

async function Projects({ query }) {
  const { projects, pagination } = await fetchProjects(query);
  return <ProjectList projects={projects} pagination={pagination} />;
}

export default async function ProjectListPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const query = resolvedParams ? resolvedParams : null;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Dự án thi công</h1>
        <p className={styles.pageDescription}>
          Những công trình LTTN Electric đã triển khai thành công
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <Projects query={query} />
      </Suspense>
    </div>
  );
}
