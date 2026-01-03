import React from 'react'
import { Link } from 'react-router-dom';

interface PaginationProps {
  pagination: any;
  url?: string;
}

const Pagination: React.FC<PaginationProps> = ({ pagination }) => {
  return (
    <div className="rounded-sm  border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="max-w-full gap-3 py-3 flex flex-row justify-center items-center overflow-x-auto">

        {new Array(pagination?.totalPages).fill(0).map((_, index) => (
          <Link
            key={index}
            to={`?page=${index + 1}`}
            className="w-14 rounded-sm text-center py-5 px-5 h-full shadow-default dark:border-strokedark dark:bg-meta-4"
          >
            {index + 1}
          </Link>
        ))}







      </div>
    </div>
  )
}

export default Pagination