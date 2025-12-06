
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';


const createModuleRoutes = (modelName, createFields, updateFields) => {
  const capName = modelName.charAt(0).toUpperCase() + modelName.slice(1);

  const DisplayRoutes = [
    {
      path: `/${modelName}/display/:id`,
      pageName: capName,
      title: `${capName} Display`,
      page: <DataDisplay
        url={`/api/admin/${modelName}/`}
        pageName={capName}
      />,
    }
  ];

  const MainRoutes = [
    [
      {
        path: `/${modelName}`,
        pageName: capName,
        title: `${capName} List`,
        page: <Page_
          pageName={capName}
          url={`/api/admin/${modelName}/`}
        />,
      },
      {
        path: `/${modelName}/create`,
        pageName: capName,
        url: `/api/${modelName}/`,
        title: `Create ${capName}`,
        page: <Create
          pageName={capName}
          url={`/api/admin/${modelName}/`}
          inputs={createFields}
        />,
      },
      {
        path: `/${modelName}/update/:id`,
        pageName: capName,
        url: `/api/admin/${modelName}/`,
        title: `Update ${capName}`,
        page: <Update
        getDataUrl={`/api/admin/${modelName}/`}
          pageName={capName}
          url={`/api/admin/${modelName}/`}
          inputs={updateFields}
        />,
      },
      ...DisplayRoutes
    ]
  ];

  return MainRoutes;
};




export default createModuleRoutes;
