import React, { Fragment } from 'react';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';

export default function ContactLayout({ children }) {
  return (
    <Fragment>
      <Breadcrumb />
      {children}
    </Fragment>
  );
}
