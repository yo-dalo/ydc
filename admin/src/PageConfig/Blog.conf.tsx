import createModuleRoutes from "../PageConfig/createConf";

const blogCreateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "editor", name: "Description" },
  { type: "date", name: "Date" },
  { type: "editor", name: "Content" },
  { type: "text", name: "Author" },
  { type: "file", name: "Image", multiple: false },
];

const blogUpdateFields = [
  { type: "text", name: "Name" },
  { type: "text", name: "Title" },
  { type: "text", name: "Description" },
  { type: "date", name: "Date" },
  { type: "text", name: "Content" },
  { type: "text", name: "Author" },
  { type: "file", name: "Image", multiple: false },
];

const Blog = createModuleRoutes('blog', blogCreateFields, blogUpdateFields);
export default Blog;
