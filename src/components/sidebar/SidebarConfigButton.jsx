const SidebarConfigButton = ({ children }) => {
  return (
    <button className="mb-2 flex w-full rounded-md bg-stone-800 px-2 py-1 text-left font-sans text-sm text-stone-300 hover:bg-stone-700 hover:text-stone-200">
      {children}
    </button>
  );
};

export default SidebarConfigButton;
