import React from "react";

const Navbar = () => {
  let spacing = 24;
  const spacingClass = `space-x-${spacing}`;

  return (
    <nav className="bg-gray-800 p-4">
      <ul className={`flex justify-center ${spacingClass}`}>
        {/* <ul className={`flex justify-center space-x-${spacing}`}> */}
        {/* <ul className="flex justify-center space-x-24"> */}
        <li>Main</li>
        <li>NeXT</li>
        <li>Bookmarks</li>
        <li>History</li>
        <li>Notes</li>
      </ul>
    </nav>
  );
};

export default Navbar;
