import createModuleRoutes from "../PageConfig/createConf";

const quickLinkCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const quickLinkUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const QuickLink = createModuleRoutes('quick-link', quickLinkCreateFields, quickLinkUpdateFields);
export default QuickLink;
