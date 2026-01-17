import createModuleRoutes from "../PageConfig/createConf";

const schoolWelcomeMessageCreateFields = [
  { type: "text", name: "Title" },
  { type: "text", name: "Message" },
  { type: "text", name: "Read_More_Url" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const schoolWelcomeMessageUpdateFields = [
  { type: "text", name: "Title" },
  { type: "text", name: "Message" },
  { type: "text", name: "Read_More_Url" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const SchoolWelcomeMessage = createModuleRoutes(
  'school-welcome-message',
  schoolWelcomeMessageCreateFields,
  schoolWelcomeMessageUpdateFields
);

export default SchoolWelcomeMessage;
