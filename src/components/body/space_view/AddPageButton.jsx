/**
 * AddPageButton component renders a button that triggers the action to add a new page.
 * It displays a plus icon inside a styled container.
 */
const AddPageButton = ({ handleOnClickAddPage }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-1 aspect-square w-16 rounded-xl border-stone-700 bg-stone-500 shadow-sm shadow-stone-900 hover:bg-stone-600">
        <button
          className="flex h-full w-full items-center justify-center p-1.5"
          onClick={handleOnClickAddPage}
        >
          <span className="h-full w-full text-5xl font-bold text-stone-800 hover:text-stone-950">
            +
          </span>
        </button>
      </div>
      <p className="mt-1 w-full truncate px-2 text-center font-sans text-xs font-medium text-stone-800">
        + New Page
      </p>
    </div>
  );
};

export default AddPageButton;
