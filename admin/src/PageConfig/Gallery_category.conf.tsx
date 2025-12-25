import createModuleRoutes from "../PageConfig/createConf";

const galleryCategoryCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "date", name: "Date" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const galleryCategoryUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "date", name: "Date" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const GalleryCategory = createModuleRoutes(
  'gallery-category',
  galleryCategoryCreateFields,
  galleryCategoryUpdateFields
);

export default GalleryCategory;
