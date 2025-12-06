import createModuleRoutes from "../PageConfig/createConf";

const admissionMessageCreateFields = [
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "text", name: "Message" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Read_More_Url" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const admissionMessageUpdateFields = [
  { type: "text", name: "Title" },
  { type: "number", name: "Index_No" },
  { type: "text", name: "Message" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Read_More_Url" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const AdmissionOpenMessage = createModuleRoutes(
  'admission_open_message',
  admissionMessageCreateFields,
  admissionMessageUpdateFields
);

export default AdmissionOpenMessage;
