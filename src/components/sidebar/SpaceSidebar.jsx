import SidebarConfigButton from "./SidebarConfigButton.jsx";

const SpaceSidebar = ({ spaces, currentSpace, selectSpace }) => {
  return (
    <aside className="w-52 rounded-r-xl bg-stone-900 pl-6 pr-6 pt-12 font-sans text-stone-50">
      <h2 className="mb-10 font-bold uppercase text-stone-200">Space</h2>

      <div className="">
        <div>
          <ul>
            {spaces.map((space) => {
              let cssClasses =
                "mb-2 w-full rounded-sm px-2 py-1 text-left hover:bg-stone-800 hover:text-stone-200 text-sm";

              if (space.id === currentSpace.id) {
                cssClasses += " bg-stone-600 text-stone-200";
              } else {
                cssClasses += " text-stone-300";
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

        <button className="w-full rounded-md px-2 py-1 text-left font-sans text-sm text-stone-400 hover:bg-stone-600 hover:text-stone-100">
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
  );
};

export default SpaceSidebar;
