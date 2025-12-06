import createModuleRoutes from "../PageConfig/createConf";

const toperCreateFields = [
  { type: "text", name: "Student_Name" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Marks_Percentage" },
  { type: "text", name: "Description" },
  { type: "text", name: "Year" },
  { type: "select", name: "Gender", options: ["male", "female"] },
  { type: "text", name: "Class" },
  { type: "text", name: "Father_name" },
  { type: "text", name: "Rank" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const toperUpdateFields = [
  { type: "text", name: "Student_Name" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Marks_Percentage" },
  { type: "text", name: "Description" },
  { type: "text", name: "Year" },
  { type: "select", name: "Gender", options: ["male", "female"] },
  { type: "text", name: "Class" },
  { type: "text", name: "Father_name" },
  { type: "text", name: "Rank" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const Toper = createModuleRoutes('toper', toperCreateFields, toperUpdateFields);
export default Toper;
