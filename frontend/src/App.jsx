import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/Navbar";
import ModalForm from "./components/ModalForm";
import TableList from "./components/TableList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);

  const handleOpenModal = (mode, row) => {
    setMode(mode);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = async (newClientData) => {
    const sanitizedClientData = {
      name: newClientData.name,
      email: newClientData.email,
      job: newClientData.job,
      rate: newClientData.rate,
      isactive: newClientData.isactive,
    };

    if (mode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          sanitizedClientData
        );
        console.log("New client added:", response.data);
      } catch (error) {
        console.error("Error adding client:", error);
      }
      console.log("Adding new row", sanitizedClientData);
    } else if (mode === "edit") {
      console.log("Editing row", sanitizedClientData);
    }
    handleCloseModal();
  };
  return (
    <>
      <NavBar
        onOpen={() => handleOpenModal("add", null)}
        onSearch={setSearchTerm}
      />
      <TableList
        onUpdate={handleOpenModal}
        onDelete={handleOpenModal}
        searchTerm={searchTerm}
      />
      <ModalForm
        isOpen={isOpen}
        onClose={handleCloseModal}
        mode={mode}
        clientData={clientData}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
