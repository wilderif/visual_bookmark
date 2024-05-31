import React from "react";

const Navbar = () => {
  let spacing = 24;
  const spacingClass = `space-x-${spacing}`;

  return (
    <nav className="rounded-b-lg bg-stone-800 p-4 text-white">
      <ul className={`flex justify-center ${spacingClass}`}>
        {/* <ul className={`flex justify-center space-x-${spacing}`}> */}
        {/* <ul className="flex justify-center space-x-24"> */}
        <li>Space1</li>
        <li>Space2</li>
        <li>Space3</li>
        <li>Space4</li>
        <li>Space5</li>
      </ul>
    </nav>
  );
};

export default Navbar;
