import createModuleRoutes from "../PageConfig/createConf";

const pagesCategoryCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const pagesCategoryUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const PagesCategory = createModuleRoutes(
  'pages-category',
  pagesCategoryCreateFields,
  pagesCategoryUpdateFields
);

export default PagesCategory;
