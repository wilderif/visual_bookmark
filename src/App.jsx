import React from "react";

import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ContentContainer from "./components/ContentContainer.jsx";
import data from "./tmp_data.js";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <SearchBar />
    </div>
  );
};

export default App;
