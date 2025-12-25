import createModuleRoutes from "../PageConfig/createConf";

const posterCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const posterUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const Poster = createModuleRoutes('poster', posterCreateFields, posterUpdateFields);
export default Poster;
