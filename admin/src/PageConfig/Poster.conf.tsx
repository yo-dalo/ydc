import createModuleRoutes from "../PageConfig/createConf";

const posterCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const posterUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const Poster = createModuleRoutes('poster', posterCreateFields, posterUpdateFields);
export default Poster;
