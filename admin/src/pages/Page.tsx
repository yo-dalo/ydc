
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThreeX from '../components/TablesX/TableThreeX';

import React from 'react'
import { Link } from 'react-router-dom';

const Page = ({url,pageName}) => {
  
  return (
    <>
    <Link to="create"><Breadcrumb pageName={pageName}   /></Link>


      <div className="flex flex-col gap-10">
     <TableThreeX url={url}  />
   
     
      </div>
    </>
  );
};

export default Page