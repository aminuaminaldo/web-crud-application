import React from "react";

const NavBar = ({ onOpen, onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <input
          type="search"
          placeholder="Search"
          className="input input-bordered w-48 md:w-auto"
          onChange={handleSearch}
        />
      </div>
      <div className="navbar-end flex gap-2">
        <a className="btn btn-primary" onClick={onOpen}>
          Add Client
        </a>
      </div>
    </div>
  );
};

export default NavBar;
