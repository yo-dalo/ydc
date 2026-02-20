import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Yo from "../common/Helper/Yo"
import { toast } from 'react-toastify';
import eruda from "eruda";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children?: any }) => {
  const go = useNavigate()

  const [admin, setAdmin] = useState({
    isLogin: false,
    img: "",
    name: "_",
    phone: "",
    email: "",
    id: null,

  }); // or use token instead

  const isLogin = async () => {
    try {
      const res = await Yo.get("/api/admin/auth/")

      console.log(res.data.user)


      const { Name, phone, Email, Id, img } = res.data.user
      setAdmin({
        ...admin,
        isLogin: true,
        name: Name,
        phone: phone,
        email: Email,
        img,
        id: Id,

      });
    } catch (error) {
      console.error("login field");
    }

  }

  useEffect(() => {
    eruda.init();
    isLogin()
  }, []);




  const login = async (adminData) => {


    try {
      const res = await Yo.post("/api/admin/auth/login",
        //  {User:"test@gmail.com",Password:"12345"}
        adminData
      )

      console.log(res.status)
      if (res?.response.data.status == 'error') {
        toast.error(res.response.data.message)
      } else {
        const { Name, phone, Email, Id, img } = res.data
        setAdmin({
          ...admin,
          isLogin: true,
          name: Name,
          phone: phone,
          email: Email,
          img,
          id: Id,

        });
        go("/")
      }

    } catch (error) {
      toast.error(error.message)
    }


  };

  const logout = async () => {
    try {
      const res = await Yo.get("/api/admin/auth/logout")
      go('/auth/signin')
      setAdmin({
        isLogin: false,
        img: "",
        name: "_",
        phone: "",
        email: "",
        id: null,


      });
    } catch (error) {
      console.error("login field");
    }


    // remove token from storage if used
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
