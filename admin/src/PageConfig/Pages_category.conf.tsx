import createModuleRoutes from "../PageConfig/createConf";

const pagesCategoryCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const pagesCategoryUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const PagesCategory = createModuleRoutes(
  'pages-category',
  pagesCategoryCreateFields,
  pagesCategoryUpdateFields
);

export default PagesCategory;
