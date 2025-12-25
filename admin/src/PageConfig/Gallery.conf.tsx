import createModuleRoutes from "../PageConfig/createConf";

const galleryCreateFields = [
  { type: "number", name: "Gallery_Category_Id" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Description" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const galleryUpdateFields = [
  { type: "number", name: "Gallery_Category_Id" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Description" },
  {
    type: "option", name: "Is_Active", optionBy: "value", valueBy: "label",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" }]
  }
];

const Gallery = createModuleRoutes('gallery', galleryCreateFields, galleryUpdateFields);
export default Gallery;
