import React, { useState } from "react";

import DirectoryContentModal from "./DirectoryContentModal.jsx";

import getFaviconUrl from "../../../util/getFaviconUrl.js";

/**
 * DirectoryView component renders a button displaying a grid of favicons for the items in the directory.
 * When clicked, it opens a modal displaying the full directory content.
 */
const DirectoryView = ({ subItem, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const subItemIcons = [];
  for (let i = 0; i < subItem.length; i++) {
    const logo_src = getFaviconUrl(subItem[i].url);
    subItemIcons.push({
      id: subItem[i].id,
      url: subItem[i].url,
      title: subItem[i].title,
      logo_src: logo_src,
    });
  }

  const handleClickButton = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <DirectoryContentModal
          subItems={subItemIcons}
          title={title}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      )}

      <button
        onClick={handleClickButton}
        className="flex h-full w-full justify-center p-1"
      >
        <div className="grid grid-cols-2 justify-center">
          {subItemIcons.slice(0, 4).map((icon) => {
            return (
              <img
                key={icon.id}
                src={icon.logo_src}
                alt={icon.title}
                className="aspect-square w-full rounded-lg p-0.5"
              />
            );
          })}
        </div>
      </button>
    </>
  );
};

export default DirectoryView;
