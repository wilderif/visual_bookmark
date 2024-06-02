import React, { useState, useContext } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import Space from "./components/body/Space.jsx";
import SpaceSidebar from "./components/SpaceSidebar.jsx";
import user_data_with_space from "./data/user_data_with_space.js";

import bookmark_data from "./data/tmp_user_data.js";

const App = () => {
  const [bookmarks, setBookmarks] = useState(bookmark_data);
  const [currentSpace, setCurrentSpace] = useState(user_data_with_space[0]);

  const handleSelectSpace = () => {
    setCurrentSpace();
  };

  return (
    <>
      <div className="flex h-screen bg-stone-400">
        <SpaceSidebar selectSpace={handleSelectSpace} />
        <Space spaceContent={currentSpace.subItems} />
      </div>
    </>
  );
};

export default App;
