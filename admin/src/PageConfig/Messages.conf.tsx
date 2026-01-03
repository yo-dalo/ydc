import createModuleRoutes from "../PageConfig/createConf";

const messagesCreateFields = [
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  { type: "text", name: "Roll" },
  { type: "text", name: "Description" },
  { type: "text", name: "Read_More_Url" },
  { type: "number", name: "Index_No" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const messagesUpdateFields = [
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Name" },
  { type: "text", name: "Roll" },
  { type: "text", name: "Description" },
  { type: "text", name: "Read_More_Url" },
  { type: "number", name: "Index_No" },
 {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const Messages = createModuleRoutes('messages', messagesCreateFields, messagesUpdateFields);
export default Messages;
