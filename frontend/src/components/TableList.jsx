import React from "react";

const TableList = () => {
  const clients = [
    {
      id: 1,
      name: "Cy Ganderton",
      email: "0Dh6I@example.com",
      job: "Quality Control Specialist",
      rate: "Blue",
      active: true,
    },
    {
      id: 2,
      name: "Hart Hagerty",
      email: "qG0e5@example.com",
      job: "Desktop Support Technician",
      rate: "Red",
      active: false,
    },
    {
      id: 3,
      name: "Wayne Carini",
      email: "BxMfA@example.com",
      job: "Community Outreach Specialist",
      rate: "Yellow",
      active: false,
    },
  ];

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

  return (
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
          {clients.map((client) => (
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
                    client.active ? "btn-success" : "btn-error btn-outline"
                  }`}
                >
                  {client.active ? "Active" : "Inactive"}
                </button>
              </td>
              <td className="space-x-2">
                <button
                  onClick={() => handleUpdate(client.id)}
                  className="btn btn-sm btn-info"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(client.id)}
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
  );
};

export default TableList;
