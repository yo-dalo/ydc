import createModuleRoutes from "../PageConfig/createConf";

const achievementCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "date", name: "Year" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
   {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const achievementUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "date", name: "Year" },
  { type: "number", name: "Index_No" },
  { type: "file", name: "Image", multiple: false },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const Achievements = createModuleRoutes('achievements', achievementCreateFields, achievementUpdateFields);
export default Achievements;
