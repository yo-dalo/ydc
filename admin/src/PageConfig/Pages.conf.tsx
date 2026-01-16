import createModuleRoutes from "../PageConfig/createConf";

const pagesCreateFields = [
  { type: "text", name: "Name" },
  {
    type: "option", name: "Pages_Category_Id",
    url: "/api/admin/pages-category/",
    valueBy: "Id",
    optionBy: "Name"
  },
  // { type: "number", name: "Pages_Category_Id" },
  { type: "text", name: "Page_Data" },
   {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  },
  { type: "number", name: "Index_No" },
];

const pagesUpdateFields = [
  { type: "text", name: "Name" },
  { type: "number", name: "Pages_Category_Id" },
  { type: "text", name: "Page_Data" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  },
  { type: "number", name: "Index_No" },
];

const Pages = createModuleRoutes('pages', pagesCreateFields, pagesUpdateFields);
export default Pages;
