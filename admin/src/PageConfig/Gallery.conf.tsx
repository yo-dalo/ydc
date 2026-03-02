import createModuleRoutes from "../PageConfig/createConf";

const galleryCreateFields = [
  { type: "number", name: "Gallery_Category_Id" },
  {
    type: "option", name: "Gallery_Category_Id", optionBy: "Name", valueBy: "Id", url: "/api/admin/gallery-category",
  },

  { type: "file", ype: "file", name: "Image", multiple: true },
  { type: "text", name: "Description" },
  { name: "Image", multiple: true },
  { type: "text", name: "Description" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const galleryUpdateFields = [
  { type: "number", name: "Gallery_Category_Id" },
  { type: "file", name: "Image", multiple: true },
  { type: "text", name: "Description" },
  {
    type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
    options: [
      { label: "active", value: "active" },
      { label: "inactive", value: "inactive" }]
  }
];

const Gallery = createModuleRoutes('gallery', galleryCreateFields, galleryUpdateFields);
export default Gallery;
