import React, { useState } from "react";

// import BookmarkDataProvider from "./contexts/BookmarkDataProvider.jsx";

import Space from "./components/body/Space.jsx";
import SpaceSidebar from "./components/sidebar/SpaceSidebar.jsx";

import user_data_with_space from "./data/user_data_with_space.js";

/**
 * Main application component that manages and displays space sidebar and current space.
 */
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

  /**
   * Add space with user input
   * @param {string} newSpaceTitle
   */
  const handleAddSpace = (newSpaceTitle) => {
    const newSpaceId = bookmarkItems.length
      ? `s${Number(bookmarkItems[bookmarkItems.length - 1].id.slice(1)) + 1}`
      : "s1";
    const newSpace = {
      id: newSpaceId,
      type: "space",
      title: newSpaceTitle,
      subItems: [],
    };

    console.log(newSpace);

    setBookmarkItems((prevBookmarkItems) => [...prevBookmarkItems, newSpace]);
    setCurrentSpaceId(() => newSpace.id);
  };

  /**
   * Add page with user input
   * @param {string} curSpaceId
   * @param {string} newPageTitle
   * @param {string} newPageUrl
   * @returns {|null} null if the user cancels adding after checking duplicated name
   *
   * @todo figure out more efficient way to setState
   */
  const handleAddPage = (curSpaceId, newPageTitle, newPageUrl) => {
    // Validate and format the URL
    if (
      !newPageUrl.startsWith("http://") &&
      !newPageUrl.startsWith("https://")
    ) {
      newPageUrl = "https://" + newPageUrl;
    }

    const newPageId = currentSpace.subItems.length
      ? `p${Number(currentSpace.subItems[currentSpace.subItems.length - 1].id.slice(1)) + 1}`
      : "p1";

    const newPage = {
      id: newPageId,
      type: "page",
      title: newPageTitle,
      url: newPageUrl,
    };

    console.log(newPage);

    // Check if the page with the same title already exists in the current space.
    const isDuplicate = currentSpace.subItems.some(
      (item) => item.title === newPageTitle,
    );

    if (isDuplicate) {
      const userConfirmed = window.confirm(
        `A page with the title "${newPageTitle}" already exists.\nDo you still want to add it?`,
      );
      if (!userConfirmed) {
        return null;
      }
    }

    const newBookmarkItems = bookmarkItems.map((space) => {
      if (space.id === curSpaceId) {
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
