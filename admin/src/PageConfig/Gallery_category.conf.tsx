import createModuleRoutes from "../PageConfig/createConf";

const galleryCategoryCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "date", name: "Date" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const galleryCategoryUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "date", name: "Date" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const GalleryCategory = createModuleRoutes(
  'gallery-category',
  galleryCategoryCreateFields,
  galleryCategoryUpdateFields
);

export default GalleryCategory;
