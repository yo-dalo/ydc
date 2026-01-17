import createModuleRoutes from "../PageConfig/createConf";

const notificationCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "checkbox", name: "Is_Important" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "date", name: "Date" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const notificationUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "checkbox", name: "Is_Important" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "date", name: "Date" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const Notification = createModuleRoutes('notification', notificationCreateFields, notificationUpdateFields);
export default Notification;
