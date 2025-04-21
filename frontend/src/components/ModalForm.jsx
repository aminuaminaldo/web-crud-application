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
            <button
              className="btn btn-success btn-sm"
              onClick={onSubmit}
              type="submit"
            >
              {mode === "add" ? "Add Client" : "Save Changes"}
            </button>
          </form>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
