import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./container/header/Header";
import Footer from "./container/footer/Footer";
import Modal from "./component/modal/Modal"

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
