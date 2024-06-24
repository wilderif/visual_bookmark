import React, { useState } from "react";

import SidebarConfigButton from "./SidebarConfigButton.jsx";
import AddSpaceModal from "../body/add_item/AddSpaceModal.jsx";

const SpaceSidebar = ({
  spaces,
  currentSpaceId,
  selectSpace,
  handleAddSpace,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickAddSpace = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <AddSpaceModal
          handleAddSpace={handleAddSpace}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      )}

      <aside className="w-52 rounded-r-lg bg-stone-900 pl-6 pr-6 pt-12 font-sans text-stone-50">
        <h2 className="mb-10 font-bold uppercase text-stone-200">
          Temp header
        </h2>

        <div className="">
          <div>
            <ul>
              {spaces.map((space) => {
                let cssClasses =
                  "mb-2 w-full rounded-sm px-2 py-1 text-left text-sm";

                if (space.id === currentSpaceId) {
                  cssClasses += " bg-stone-600 text-stone-200";
                } else {
                  cssClasses +=
                    " hover:bg-stone-800 hover:text-stone-200 text-stone-300";
                }

                return (
                  <li key={space.id}>
                    <button
                      className={cssClasses}
                      onClick={() => {
                        selectSpace(space.id);
                      }}
                    >
                      {space.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            className="w-full rounded-md px-2 py-1 text-left font-sans text-sm text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            onClick={handleOnClickAddSpace}
          >
            + New Space
          </button>

          <div className="mt-[420px]">
            <div className="mb-2 w-full border-[1px] border-stone-500"></div>
            <div>
              <SidebarConfigButton>Setting</SidebarConfigButton>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SpaceSidebar;
