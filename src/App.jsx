import React, { useState, useContext } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import NavBar from "./components/NavBar.jsx";
import Space from "./components/body/Space.jsx";

import bookmark_data from "./tmp_user_data.js";

const App = () => {
  // const [currentSpace, setCurrentSpace] = useState();
  const [bookmarks, setBookmarks] = useState(bookmark_data);

  return (
    <>
      <div className="min-h-screen bg-stone-400">
        <NavBar />
        <Space spaceContent={bookmarks} />
      </div>
    </>
  );
};

export default App;
