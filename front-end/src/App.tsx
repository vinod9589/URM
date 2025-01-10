import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./container/header/Header";
import Footer from "./container/footer/Footer";
import Modal from "./component/modal/Modal"
import UserTodoFrom from "./page/userTodoForm/UserTodoForm";
import UserDataForm from "./page/userDataForm/UserDataForm";
import Email from "./page/email/Email";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Modal/>
    </>
  );
}

export default App;
