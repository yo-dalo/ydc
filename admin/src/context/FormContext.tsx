import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Yo from "../common/Helper/Yo"

const FormContext = createContext<any>(null);

export const FormProvider = ({ children, path }: { children?: any; path?: any }) => {
  const [createData, setCreateData] = useState({});

  useEffect(() => {
    setCreateData({});
  }, [path]);






  return (
    <FormContext.Provider value={{ createData, setCreateData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
