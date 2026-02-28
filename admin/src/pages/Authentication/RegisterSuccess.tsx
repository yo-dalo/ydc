// RegisterSuccess.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen   dark:border-strokedark dark:bg-boxdark flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[400px]">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Registration Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your account has been created successfully.
        </p>
        <button
          onClick={() => navigate("/auth/signin")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;