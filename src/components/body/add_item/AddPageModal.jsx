import React, { useState, useRef, useEffect } from "react";
import ReactDom from "react-dom";

const AddPageModal = ({ handleAddPage, currentSpaceId, isOpen, onClose }) => {
  const [newPage, setNewPage] = useState({ title: "", url: "" });
  const dialogRef = useRef();
  const titleRef = useRef();
  const urlRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    // Prevent empty title
    if (titleRef.current.value === "" || urlRef.current.value === "") {
      return;
    }
    event.preventDefault();
    handleAddPage(currentSpaceId, newPage.title, newPage.url);
    setNewPage({ title: "", url: "" });
    onClose();
  };

  return ReactDom.createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="w-96 bg-transparent backdrop:bg-stone-900/90"
    >
      <h4 className="mb-4 text-center text-xl font-bold text-stone-100">
        Add New Page
      </h4>
      <div className="flex h-[calc(100%-44px)] justify-center rounded-2xl bg-stone-400 p-14 shadow-xl">
        <form className="flex flex-col items-center space-y-4">
          <input
            ref={titleRef}
            type="text"
            placeholder="Page Title"
            value={newPage.title}
            onChange={(e) => {
              setNewPage({ ...newPage, title: e.target.value });
            }}
          />
          <input
            ref={urlRef}
            type="text"
            placeholder="Page URL"
            value={newPage.url}
            onChange={(e) => {
              setNewPage({ ...newPage, url: e.target.value });
            }}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full rounded-md bg-stone-700 p-2 text-stone-100 hover:bg-stone-800"
          >
            Add Page
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
};

export default AddPageModal;
