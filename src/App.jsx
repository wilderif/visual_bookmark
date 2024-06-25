import React, { useState, useContext } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import Space from "./components/body/Space.jsx";
import SpaceSidebar from "./components/sidebar/SpaceSidebar.jsx";

import user_data_with_space from "./data/user_data_with_space.js";

const App = () => {
  const [bookmarkItems, setBookmarkItems] = useState(user_data_with_space);
  const [currentSpaceId, setCurrentSpaceId] = useState(
    user_data_with_space[0].id,
  );

  const currentSpace = bookmarkItems.find(
    (space) => space.id === currentSpaceId,
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
    setCurrentSpaceId(() => newSpace.id);
  };

  const handleAddPage = (spaceId, title, url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }
    const newPage = {
      id: `p${currentSpace.subItems.length + 1}`,
      type: "page",
      title: title,
      url: url,
    };

    const newBookmarkItems = bookmarkItems.map((space) => {
      if (space.id === spaceId) {
        return {
          ...space,
          subItems: [...space.subItems, newPage],
        };
      }

      return space;
    });

    setBookmarkItems(newBookmarkItems);
  };

  return (
    <>
      <div className="flex h-screen bg-stone-400">
        <SpaceSidebar
          spaces={bookmarkItems}
          currentSpaceId={currentSpaceId}
          selectSpace={handleSelectSpace}
          handleAddSpace={handleAddSpace}
        />
        <Space
          currentSpaceId={currentSpaceId}
          spaceContent={currentSpace.subItems}
          handleAddPage={handleAddPage}
        />
      </div>
    </>
  );
};

export default App;
