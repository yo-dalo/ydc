import createModuleRoutes from "../PageConfig/createConf";

const pagesCreateFields = [
  { type: "text", name: "Name" },
  { type: "number", name: "Pages_Category_Id" },
  { type: "text", name: "Page_Data" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  },
  { type: "number", name: "Index_No" },
];

const pagesUpdateFields = [
  { type: "text", name: "Name" },
  { type: "number", name: "Pages_Category_Id" },
  { type: "text", name: "Page_Data" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  },
  { type: "number", name: "Index_No" },
];

const Pages = createModuleRoutes('pages', pagesCreateFields, pagesUpdateFields);
export default Pages;
