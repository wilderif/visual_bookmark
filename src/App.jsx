import React, { useState, useContext } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import Space from "./components/body/Space.jsx";
import SpaceSidebar from "./components/SpaceSidebar.jsx";

import bookmark_data from "./tmp_user_data.js";

const App = () => {
  // const [currentSpace, setCurrentSpace] = useState();
  const [bookmarks, setBookmarks] = useState(bookmark_data);

  return (
    <>
      <div className="flex h-screen bg-stone-400">
        <SpaceSidebar />
        <Space spaceContent={bookmarks} />
      </div>
    </>
  );
};

export default App;
