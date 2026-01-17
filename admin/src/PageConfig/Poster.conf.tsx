import createModuleRoutes from "../PageConfig/createConf";

const posterCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const posterUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const Poster = createModuleRoutes('poster', posterCreateFields, posterUpdateFields);
export default Poster;
