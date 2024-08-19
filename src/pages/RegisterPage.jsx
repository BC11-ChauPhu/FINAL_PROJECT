import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import React from "react";
import Header from "../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default RegisterPage;
