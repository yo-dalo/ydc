import Create from './src/pages/Create';

const Page = [

  [
    {
      path: "/roles",
      pageName: "Rolls",
      url: "http://localhost:5000/api/roles/",
      title: "ydc  ",
      felds: [{ inputTypy: "text" }],
      page: Create,


    },
    {

      path: "/roles/update",
      pageName: "Rolls",
      url: "http://localhost:5000/api/roles/",
      title: "ydc  ",
      felds: [{ inputTypy: "text" }],
      page: Create,
    },
    {
      path: "/roles/create",
      pageName: "Rolls",
      url: "http://localhost:5000/api/roles/",
      title: "ydc  ",
      felds: [{ inputTypy: "text" }],
      page: Create,
    },
  ],






];

export { Page }