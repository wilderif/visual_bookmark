import React, { useState, useContext } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import Space from "./components/body/Space.jsx";
import SpaceSidebar from "./components/Sidebar/SpaceSidebar.jsx";

import user_data_with_space from "./data/user_data_with_space.js";

const App = () => {
  const [currentSpace, setCurrentSpace] = useState(
    user_data_with_space[user_data_with_space.length - 1],
  );

  const handleSelectSpace = () => {
    setCurrentSpace();
  };

  return (
    <>
      <div className="flex h-screen bg-stone-400">
        <SpaceSidebar
          spaces={user_data_with_space}
          currentSpace={currentSpace}
          selectSpace={handleSelectSpace}
        />
        <Space spaceContent={currentSpace.subItems} />
      </div>
    </>
  );
};

export default App;
