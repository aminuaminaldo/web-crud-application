import React from "react";

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "add" ? "Add New Client" : "Edit Client"}
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <label className="input input-bordered flex items-center gap-2 w-full my-2">
              <span className="label-text">Name</span>
              <input type="text" placeholder="Type here" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full my-2">
              <span className="label-text">Email</span>
              <input type="text" placeholder="Type here" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full my-2">
              <span className="label-text">Job</span>
              <input type="text" placeholder="Type here" className="grow" />
            </label>
            <div className="flex mb-2 justify-between gap-2 w-full">
              <label className="input input-bordered flex items-center gap-2 w-1/2">
                <span className="label-text">Rate</span>
                <input type="number" placeholder="Type here" className="grow" />
              </label>
              <select className="select select-bordered w-1/2">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button
              className="btn btn-success btn-sm float-end"
              onClick={onSubmit}
              type="submit"
            >
              {mode === "add" ? "Add Client" : "Save Changes"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
