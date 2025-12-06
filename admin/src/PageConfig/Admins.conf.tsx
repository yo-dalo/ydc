import createModuleRoutes from "../PageConfig/createConf";

const adminCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Email" },
  { type: "text", name: "Username" },
  { type: "password", name: "Password" },
];

const adminUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Email" },
  { type: "text", name: "Username" },
  { type: "password", name: "Password" },
];

const Admins = createModuleRoutes('admins', adminCreateFields, adminUpdateFields);
export default Admins;
