import { useState, useEffect } from "react"; // React from "react";
import axios from "axios";

const TableList = ({ onUpdate, onDelete, searchTerm }) => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const handleUpdate = (id) => {
    // TODO: Implement update functionality
    console.log("Update client with id:", id);
  };

  const handleDelete = (id) => {
    // TODO: Implement delete functionality
    console.log("Delete client with id:", id);
  };

  const handleToggleActive = (id) => {
    // TODO: Implement toggle active functionality
    console.log("Toggle active status for client with id:", id);
  };

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

  const filteredData = tableData.filter((client) => {
    return client.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <>
      {error && <div className="alert alert-error">{error.message}</div>}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((client) => (
              <tr key={client.id} className="hover:bg-base-300">
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    onClick={() => handleToggleActive(client.id)}
                    className={`btn btn-sm ${
                      client.isactive ? "btn-success" : "btn-error btn-outline"
                    }`}
                  >
                    {client.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="space-x-2">
                  <button
                    // onClick={() => handleUpdate(client.id)}
                    onClick={() => onUpdate(client.id)}
                    className="btn btn-sm btn-info"
                  >
                    Update
                  </button>
                  <button
                    // onClick={() => handleDelete(client.id)}
                    onClick={() => onDelete(client.id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
