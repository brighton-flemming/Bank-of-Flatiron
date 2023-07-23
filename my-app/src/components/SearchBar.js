import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchName, setSearchName] = useState("");

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchName(value);

    if (typeof value === "string") {
      onSearch(value.toLowerCase());
    } else {
      onSearch([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search By Description"
        value={searchName}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
