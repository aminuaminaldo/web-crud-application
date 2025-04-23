import React from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import ModalForm from "./components/ModalForm";
import TableList from "./components/Tablelist";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpenModal = (mode, row) => {
    setMode(mode);
    setSelectedRow(row);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedRow(null);
  };
  const handleSubmit = (data) => {
    if (mode === "add") {
      console.log("Adding new row", data);
      // Add new row logic
    } else if (mode === "edit") {
      // Edit existing row logic
      console.log("Editing row", data);
    }
    handleCloseModal();
  };
  return (
    <>
      <NavBar onOpen={() => handleOpenModal("add", null)} />
      <TableList onUpdate={handleOpenModal} onDelete={handleOpenModal} />
      <ModalForm
        isOpen={isOpen}
        onClose={handleCloseModal}
        mode={mode}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
