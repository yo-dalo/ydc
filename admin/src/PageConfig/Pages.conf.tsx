import createModuleRoutes from "../PageConfig/createConf";

const pagesCreateFields = [
  { type: "text", name: "Name" },
  { type: "number", name: "Pages_Category_Id" },
  { type: "text", name: "Page_Data" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
  { type: "number", name: "Index_No" },
];

const pagesUpdateFields = [
  { type: "text", name: "Name" },
  { type: "number", name: "Pages_Category_Id" },
  { type: "text", name: "Page_Data" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
  { type: "number", name: "Index_No" },
];

const Pages = createModuleRoutes('pages', pagesCreateFields, pagesUpdateFields);
export default Pages;
