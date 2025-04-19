import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";

function App() {
  return (
    <>
      <NavBar />
      <TableList />
      <ModalForm />
    </>
  );
}

export default App;
