import React, { useState } from "react";
import BookmarkDataContext from "./BookmarkDataContext.js";
import data from "../tmp_user_data.js";

const BookmarkDataProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(data);

  const bookmarksContextValue = {
    bookmarks,
  };

  return (
    <BookmarkDataContext.Provider value={bookmarksContextValue}>
      {children}
    </BookmarkDataContext.Provider>
  );
};

export default BookmarkDataProvider;
