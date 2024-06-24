import React, { useState, useContext } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import Space from "./components/body/Space.jsx";
import SpaceSidebar from "./components/sidebar/SpaceSidebar.jsx";

import user_data_with_space from "./data/user_data_with_space.js";

const App = () => {
  const [bookmarkItems, setBookmarkItems] = useState(user_data_with_space);
  const [currentSpaceId, setCurrentSpaceId] = useState(
    user_data_with_space[user_data_with_space.length - 1].id,
  );

  const handleSelectSpace = (spaceId) => {
    setCurrentSpaceId(spaceId);
  };

  const handleAddSpace = (title) => {
    const newSpace = {
      id: `s${bookmarkItems.length + 1}`,
      type: "space",
      title: title,
      subItems: [],
    };

    setBookmarkItems((prevBookmarkItems) => [...prevBookmarkItems, newSpace]);
  };

  const currentSpace = bookmarkItems.find(
    (space) => space.id === currentSpaceId,
  );

  console.log(bookmarkItems);
  console.log(currentSpace);

  return (
    <>
      <div className="flex h-screen bg-stone-400">
        <SpaceSidebar
          spaces={bookmarkItems}
          currentSpaceId={currentSpaceId}
          selectSpace={handleSelectSpace}
          handleAddSpace={handleAddSpace}
        />
        <Space spaceContent={currentSpace.subItems} />
      </div>
    </>
  );
};

export default App;
