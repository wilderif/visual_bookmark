import React, { useState } from "react";

import ContentContainer from "./ContentContainer.jsx";
import AddPageButton from "./space_view/AddPageButton.jsx";
import AddPageModal from "./add_item/AddPageModal.jsx";

const Space = ({ currentSpaceId, spaceContent, handleAddPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickAddPage = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <AddPageModal
          handleAddPage={handleAddPage}
          isOpen={isOpen}
          currentSpaceId={currentSpaceId}
          onClose={handleCloseModal}
        />
      )}

      <div className="h-full w-full px-14 pt-28">
        <div className="grid grid-cols-[repeat(auto-fit,_120px)] justify-center gap-y-8">
          {spaceContent.map((item) => (
            <ContentContainer key={item.id} item={item} />
          ))}
          <AddPageButton handleOnClickAddPage={handleOnClickAddPage} />
        </div>
      </div>
    </>
  );
};

export default Space;
