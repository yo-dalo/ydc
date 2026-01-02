import createModuleRoutes from "../PageConfig/createConf";

const galleryCategoryCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "date", name: "Date" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const galleryCategoryUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "date", name: "Date" },
 {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const GalleryCategory = createModuleRoutes(
  'gallery-category',
  galleryCategoryCreateFields,
  galleryCategoryUpdateFields
);

export default GalleryCategory;
