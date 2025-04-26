import React from "react";
import { useState, useEffect } from "react";
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
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/clients")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleOpenModal = (mode, client) => {
    setMode(mode);
    setIsOpen(true);
    if (mode === "edit") {
      setClientData(client);
    }
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
        setTableData((prevData) => [...prevData, response.data]);
        console.log("New client added:", response.data);
      } catch (error) {
        console.error("Error adding client:", error);
      }
    } else if (mode === "edit") {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          sanitizedClientData
        );
        setTableData((prevData) =>
          prevData.map((client) =>
            client.id === clientData.id ? response.data : client
          )
        );
        console.log("Client updated:", response.data);
      } catch (error) {
        console.error("Error updating client:", error);
      }
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
        searchTerm={searchTerm}
        tableData={tableData}
        setTableData={setTableData}
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
