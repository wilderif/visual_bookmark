import React, { useState, useContext } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import Space from "./components/body/Space.jsx";
import SpaceSidebar from "./components/sidebar/SpaceSidebar.jsx";

import user_data_with_space from "./data/user_data_with_space.js";

const App = () => {
  const [currentSpaceId, setCurrentSpaceId] = useState(
    user_data_with_space[user_data_with_space.length - 1].id,
  );

  const handleSelectSpace = (spaceId) => {
    setCurrentSpaceId(spaceId);
  };

  const currentSpace = user_data_with_space.find(
    (space) => space.id === currentSpaceId,
  );

  console.log(currentSpaceId);
  console.log(currentSpace);

  return (
    <>
      <div className="flex h-screen bg-stone-400">
        <SpaceSidebar
          spaces={user_data_with_space}
          currentSpaceId={currentSpaceId}
          selectSpace={handleSelectSpace}
        />
        <Space spaceContent={currentSpace.subItems} />
      </div>
    </>
  );
};

export default App;
