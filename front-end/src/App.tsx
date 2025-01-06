import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Table from "./component/table/Table";
import Login from "./login-signin/login/Login";
import SignIn from "./login-signin/signin/SignIn";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    
    </>
  );
}

export default App;
