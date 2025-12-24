import createModuleRoutes from "../PageConfig/createConf";

const pagesCategoryCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const pagesCategoryUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const PagesCategory = createModuleRoutes(
  'pages-category',
  pagesCategoryCreateFields,
  pagesCategoryUpdateFields
);

export default PagesCategory;
