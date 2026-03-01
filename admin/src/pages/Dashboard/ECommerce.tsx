import React, { useState, useEffect } from 'react';
import CardDataStats from '../../components/CardDataStats';




import { useAuth } from "../../context/AuthContext"
import Yo from "../../common/Helper/Yo"

import axios from "axios";


const ECommerce: React.FC = () => {
  const { admin } = useAuth()
  const [count, setCount] = useState<any>({});


  useEffect(() => {

    Yo.get("/api/admin/").then((data) => {
      console.log(data.data);
      setCount(data?.data);
    }).catch((r) => {
      console.log(r);

    })

  }, [])
  useEffect(() => {
    console.log(count);
  }, [count])







  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">



        <CardDataStats title="Total Blogs" total={count?.totalBlogs || 0} rate="-" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H20C20.5523 4 21 4.44772 21 5V15C21 15.5523 20.5523 16 20 16H8L4 20V5C4 4.44772 4.44772 4 5 4H4Z"
              fill=""
            />
            <path
              d="M8 8H16M8 11H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Admissions" total={count?.totalAdmissions || 0} rate="-" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3L2 8L12 13L22 8L12 3Z"
              fill=""
            />
            <path
              d="M6 10V15C6 16.6569 8.68629 18 12 18C15.3137 18 18 16.6569 18 15V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Notifications" total={count?.totalNotifications || 0} rate="-" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22Z"
              fill=""
            />
            <path
              d="M18 16V11C18 7.68629 15.7614 5 12 5C8.23858 5 6 7.68629 6 11V16L4 18V19H20V18L18 16Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Posters" total={count.totalPosters} rate="-" levelDown>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H20V16H4V4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M4 16L9 11L13 15L16 12L20 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="9"
              cy="8"
              r="1.5"
              fill="currentColor"
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Topers" total={count.totalTopers} rate="-" levelDown>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4H16V6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6V4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M6 4H8V6C8 7.65685 6.65685 9 5 9H4V7C4 5.34315 5.34315 4 7 4H6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M16 4H18C19.6569 4 21 5.34315 21 7V9H20C18.3431 9 17 7.65685 17 6V4H16Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M10 10V14M14 10V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 18H15L14 14H10L9 18Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">


        <div className="col-span-12 xl:col-span-8">

        </div>

      </div>
    </>
  );
};

export default ECommerce;
