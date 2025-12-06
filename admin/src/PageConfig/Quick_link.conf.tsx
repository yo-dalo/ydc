import createModuleRoutes from "../PageConfig/createConf";

const quickLinkCreateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "text", name: "Name" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const quickLinkUpdateFields = [
  { type: "number", name: "Index_No" },
  { type: "text", name: "Url" },
  { type: "text", name: "Name" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const QuickLink = createModuleRoutes('quick_link', quickLinkCreateFields, quickLinkUpdateFields);
export default QuickLink;
