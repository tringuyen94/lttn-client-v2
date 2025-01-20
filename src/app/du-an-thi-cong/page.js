import ProjectList from '@/components/project/project-list';
import { fetchProjects } from '@/services/projects.services';
import React, { Fragment, Suspense } from 'react';
import Loading from '../loading';
import styles from './page.module.css';
async function Projects({ query }) {
  const projects = await fetchProjects(query);
  return <ProjectList projects={projects} />;
}

export default async function ProjectListPage() {
  return (
    <div className={styles.projectListPageWrapper}>
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>Dự án thi công</h2>
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    </div>
  );
}
