import React, { Fragment } from 'react';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
export default function ProductLayout({ children }) {
  return (
    <Fragment>
      {/* <Breadcrumb /> */}
      <Breadcrumb />
      {children}
    </Fragment>
  );
}
