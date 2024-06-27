import React, { useState, useRef, useEffect } from "react";
import ReactDom from "react-dom";

/**
 * AddSpaceModal component renders a modal for adding a new space.
 * It contains an input field for the space title and a button to submit the form.
 */
const AddSpaceModal = ({ handleAddSpace, isOpen, onClose }) => {
  const [inputTitle, setInputTitle] = useState("");
  const dialogRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    // Prevent empty title
    if (titleRef.current.value === "") {
      return;
    }
    event.preventDefault();
    handleAddSpace(inputTitle);
    setInputTitle("");
    onClose();
  };

  return ReactDom.createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="w-96 bg-transparent backdrop:bg-stone-900/90"
    >
      <h4 className="mb-4 text-center text-xl font-bold text-stone-100">
        Add New Space
      </h4>
      <div className="flex h-[calc(100%-44px)] justify-center rounded-2xl bg-stone-400 p-14 shadow-xl">
        <form className="flex flex-col items-center space-y-4">
          <input
            ref={titleRef}
            type="text"
            placeholder="Space Title"
            vlaue={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full rounded-md bg-stone-700 p-2 text-stone-100 hover:bg-stone-800"
          >
            Add Space
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
};

export default AddSpaceModal;
