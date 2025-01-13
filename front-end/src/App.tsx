import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./container/header/Header";
import Footer from "./container/footer/Footer";
import Modal from "./component/modal/Modal"
import UserTodoFrom from "./page/userTodoForm/UserTodoForm";
import UserDataForm from "./page/userDataForm/UserDataForm";
import Email from "./page/email/Email";
import Testing from "./page/Testing"
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Modal/>
      <Testing/>
    </>
  );
}

export default App;
