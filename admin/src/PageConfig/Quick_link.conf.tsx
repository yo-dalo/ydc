import createModuleRoutes from "../PageConfig/createConf";

const quickLinkCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "text", name: "Name" },
   {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const quickLinkUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "text", name: "Name" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const QuickLink = createModuleRoutes('quick-link', quickLinkCreateFields, quickLinkUpdateFields);
export default QuickLink;
