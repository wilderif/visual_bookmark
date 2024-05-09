import React from "react";

import "./App.css";

import ContentContainer from "./components/ContentContainer/ContentContainer.jsx";

import data from "./tmp_data.js";

function App() {
  return (
    <>
      <nav className="navigation">
        <button className="selected">Directory1</button>
        <button>Directory2</button>
        <button>Directory3</button>
        <button>Add</button>
      </nav>
      <div className="main_page">
        <ContentContainer data={data} />
      </div>
    </>
  );
}

export default App;
