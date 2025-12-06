import createModuleRoutes from "../PageConfig/createConf";

const galleryCreateFields = [
  { type: "number", name: "Gallery_Category_Id" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Description" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const galleryUpdateFields = [
  { type: "number", name: "Gallery_Category_Id" },
  { type: "file", name: "Image", multiple: false },
  { type: "text", name: "Description" },
  { type: "select", name: "Is_Active", options: ["active", "inactive"] },
];

const Gallery = createModuleRoutes('gallery', galleryCreateFields, galleryUpdateFields);
export default Gallery;
