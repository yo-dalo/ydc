
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThreeX from '../components/TablesX/TableThreeX';

import React from 'react'
import { Link } from 'react-router-dom';

const Page = ({ url, pageName }) => {
  return (
    <>
      <Breadcrumb pageName={pageName} links={[{ link: 'Create', to: 'create' }]} />

      <div className="flex flex-col gap-10">
        <TableThreeX url={url} />
      </div>
    </>
  );
};

export default Page