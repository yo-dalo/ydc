import createModuleRoutes from "../PageConfig/createConf";

const achievementCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "date", name: "Year" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const achievementUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "date", name: "Year" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const Achievements = createModuleRoutes('achievements', achievementCreateFields, achievementUpdateFields);
export default Achievements;
