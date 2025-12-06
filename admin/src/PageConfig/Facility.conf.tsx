import createModuleRoutes from "../PageConfig/createConf";

const facilityCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "file", name: "Image", multiple: false },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const facilityUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "file", name: "Image", multiple: false },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const Facility = createModuleRoutes('facility', facilityCreateFields, facilityUpdateFields);
export default Facility;
