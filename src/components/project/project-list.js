import React, { Fragment } from 'react';
import styles from './project-list.module.css';
import ProjectItem from './project-item';
export default function ProjectList({ projects }) {
  return (
    <div className={styles.projectList}>
      {projects.map((project) => {
        return (
          <Fragment key={project._id}>
            <ProjectItem {...project} />
          </Fragment>
        );
      })}
    </div>
  );
}
