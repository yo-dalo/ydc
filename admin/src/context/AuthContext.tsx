import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Yo from "../common/Helper/Yo"
import { toast } from 'react-toastify';

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

    isLogin()
  }, []);




  const login = async (adminData) => {
    try {
      const res = await Yo.post("/api/admin/auth/login", adminData);

      if (res?.data?.status === "error") {
        toast.error(res.data.message);
      } else {
        const { Name, phone, Email, Id, img } = res.data;

        setAdmin({
          ...admin,
          isLogin: true,
          name: Name,
          phone: phone,
          email: Email,
          img,
          id: Id,
        });

        go("/");
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };



  const register = async (adminData) => {
    try {
      const res = await Yo.post("/api/admin/auth/register", adminData);

      if (res?.data?.status === "error") {
        toast.error(res.data.message);
      } else {
        go("/auth/register-success");
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };




  const logout = async () => {
    try {
      await Yo.get("/api/admin/auth/logout");

      setAdmin({
        isLogin: false,
        img: "",
        name: "_",
        phone: "",
        email: "",
        id: null,
      });

      go("/auth/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider value={{ admin, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
