import createModuleRoutes from "../PageConfig/createConf";

const toperCreateFields = [
  { type: "text", name: "Student_Name" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Marks_Percentage" },
  { type: "text", name: "Description" },
  { type: "text", name: "Year" },

  {
    type: "option", name: "Gender", optionBy: "value", valueBy: "label",
    options: [
      { value: "male", label: "male" },
      { value: "female", label: "female" }]
  },
  { type: "text", name: "Class" },
  { type: "text", name: "Father_name" },
  { type: "text", name: "Rank" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const toperUpdateFields = [
  { type: "text", name: "Student_Name" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Marks_Percentage" },
  { type: "text", name: "Description" },
  { type: "text", name: "Year" },
  {
    type: "option", name: "Gender", optionBy: "value", valueBy: "label",
    options: [
      { value: "male", label: "male" },
      { value: "female", label: "female" }]
  },
  { type: "text", name: "Class" },
  { type: "text", name: "Father_name" },
  { type: "text", name: "Rank" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const Toper = createModuleRoutes('toper', toperCreateFields, toperUpdateFields);
export default Toper;
