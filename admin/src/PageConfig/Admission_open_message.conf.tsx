import createModuleRoutes from "../PageConfig/createConf";

const admissionMessageCreateFields = [
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "text", name: "Message" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Read_More_Url" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const admissionMessageUpdateFields = [
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "text", name: "Message" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Read_More_Url" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const AdmissionOpenMessage = createModuleRoutes(
  'admission-open-message',
  admissionMessageCreateFields,
  admissionMessageUpdateFields
);

export default AdmissionOpenMessage;
