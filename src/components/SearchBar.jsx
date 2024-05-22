import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <input
        type="text"
        placeholder="Search Google"
        className="w-full rounded bg-gray-700 p-2 text-white"
      />
    </div>
  );
};

export default SearchBar;
