import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Yo from "../common/Helper/Yo"

const UtilityContext = createContext<any>(null);

export const UtilityProvider = ({ children }: { children?: any }) => {
  const go = useNavigate();
 const [search, setSearch] = useState({});



  useEffect(() => {

  }, []);






  return (
    <UtilityContext.Provider value={{search, setSearch}}>
      {children}
    </UtilityContext.Provider>
  );
};

export const useUtility = () => useContext(UtilityContext);
