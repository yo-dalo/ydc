import createModuleRoutes from "../PageConfig/createConf";

const toperCategoryCreateFields = [
  { type: "number", name: "Toper_id" },
];

const toperCategoryUpdateFields = [
  { type: "number", name: "Toper_id" },
];

const ToperCategory = createModuleRoutes(
  'toper_category',
  toperCategoryCreateFields,
  toperCategoryUpdateFields
);

export default ToperCategory;
