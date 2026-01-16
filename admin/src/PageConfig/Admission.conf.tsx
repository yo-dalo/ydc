import createModuleRoutes from "../PageConfig/createConf";

const admissionCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Father_Name" },
  { type: "text", name: "Mother_Name" },
  { type: "text", name: "Email" },
  { type: "number", name: "Phone" },
  { type: "text", name: "Class" },
  { type: "date", name: "DOB" },
  { type: "text", name: "City" },
  { type: "text", name: "State" },
  { type: "text", name: "Gender" },
  { type: "date", name: "Admission_Date" },
  { type: "text", name: "More_Info" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const admissionUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Father_Name" },
  { type: "text", name: "Mother_Name" },
  { type: "text", name: "Email" },
  { type: "number", name: "Phone" },
  { type: "text", name: "Class" },
  { type: "date", name: "DOB" },
  { type: "text", name: "City" },
  { type: "text", name: "State" },
  { type: "text", name: "Gender" },
  { type: "date", name: "Admission_Date" },
  { type: "text", name: "More_Info" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const Admission = createModuleRoutes('admission', admissionCreateFields, admissionUpdateFields);
export default Admission;
