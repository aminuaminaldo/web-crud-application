import { React, useState } from "react";

export default function ModalForm({
  isOpen,
  onClose,
  mode,
  clientData,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      const clientData = {
        name,
        email,
        job,
        rate: Number(rate),
        isactive: status,
      };
      await onSubmit(clientData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "add" ? "Add New Client" : "Edit Client"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <label className="input input-bordered flex items-center gap-2 w-full my-2">
              <span className="label-text">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type here"
                className="grow"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full my-2">
              <span className="label-text">Email</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here"
                className="grow"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full my-2">
              <span className="label-text">Job</span>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Type here"
                className="grow"
              />
            </label>
            <div className="flex mb-2 justify-between gap-2 w-full">
              <label className="input input-bordered flex items-center gap-2 w-1/2">
                <span className="label-text">Rate</span>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="Type here"
                  className="grow"
                />
              </label>
              <select
                onChange={handleStatusChange}
                value={status ? "Active" : "Inactive"}
                className="select select-bordered w-1/2"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button className="btn btn-success btn-sm float-end" type="submit">
              {mode === "add" ? "Add Client" : "Save Changes"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
