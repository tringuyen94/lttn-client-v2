import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import React, { Fragment } from 'react';

export default function ProjectLayout({ children }) {
  return (
    <Fragment>
      <Breadcrumb />
      {children}
    </Fragment>
  );
}
