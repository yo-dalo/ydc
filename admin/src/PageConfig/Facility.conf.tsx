import createModuleRoutes from "../PageConfig/createConf";

const facilityCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "file", name: "Image", multiple: false },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const facilityUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "file", name: "Image", multiple: false },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const Facility = createModuleRoutes('facility', facilityCreateFields, facilityUpdateFields);
export default Facility;
