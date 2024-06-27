import React, { useRef, useEffect } from "react";
import ReactDom from "react-dom";

import ContentContainer from "../ContentContainer";

/**
 * DirectoryContentModal component displays a modal with the content of a directory.
 * It shows a grid of ContentContainer components for each subitem pages.
 */
const DirectoryContentModal = ({ subItems, title, isOpen, onClose }, ref) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  console.log(title);
  console.log("d", dialogRef);
  console.log("r", ref);

  return ReactDom.createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="h-96 w-[600px] bg-transparent backdrop:bg-stone-900/90"
    >
      <h4 className="mb-4 text-center text-xl font-bold text-stone-100">
        {title}
      </h4>
      <div className="h-[calc(100%-44px)] overflow-auto rounded-2xl bg-stone-400 p-14 shadow-xl">
        <div className="grid grid-cols-[repeat(auto-fit,_120px)] justify-center gap-y-8">
          {subItems.map((item) => {
            return <ContentContainer key={item.id} item={item} />;
          })}
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
};

export default DirectoryContentModal;
