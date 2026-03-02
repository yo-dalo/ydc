import createModuleRoutes from "../PageConfig/createConf";

/// This file is for reference only, you can create your own config file like Gallery.conf.tsx or Blog.conf.tsx and import it in PageConfig/index.tsx




const testCreateFields = [
    { type: "text", name: "Name" },
    { type: "editor", name: "Description" },
    { type: "date", name: "Date" },
    { type: "file", name: "Image", multiple: false },
    {
        type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
        options: [
            { label: "active", value: "active" },
            { label: "inactive", value: "inactive" }]
    }
];

const testUpdateFields = [
    { type: "text", name: "Name" },
    { type: "editor", name: "Description" },
    { type: "date", name: "Date" },
    { type: "file", name: "Image", multiple: false },
    {
        type: "option", name: "Is_Active", optionBy: "label", valueBy: "value",
        options: [
            { label: "active", value: "active" },
            { label: "inactive", value: "inactive" }]
    }
];

const Test = createModuleRoutes('test', testCreateFields, testUpdateFields);
export default Test;
