import createModuleRoutes from "../PageConfig/createConf";

const branchCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Sub_domain" },
];

const branchUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Sub_domain" },
];



const Branch = createModuleRoutes('branch', branchCreateFields, branchUpdateFields);
export default Branch;
