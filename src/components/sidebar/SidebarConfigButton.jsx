const SidebarConfigButton = ({ children }) => {
  return (
    <button className="mb-2 flex w-full rounded-md bg-stone-700 px-2 py-1 text-left font-sans text-sm text-stone-300 hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
};

export default SidebarConfigButton;
