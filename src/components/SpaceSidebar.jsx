const SpaceSidebar = ({ spaces, currentSpace, selectSpace }) => {
  return (
    <aside className="w-52 rounded-r-xl bg-stone-900 pl-8 pr-6 pt-12 font-sans text-stone-50">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Temp
      </h2>

      <div className="mb-8 mt-8">
        <ul>
          {spaces.map((space) => {
            let cssClasses =
              "my-1 w-full rounded-sm px-2 py-1 text-left hover:bg-stone-800 hover:text-stone-200 text-sm";

            if (space.id === currentSpace.id) {
              cssClasses += " bg-stone-600 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
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
      <div>
        <button className="rounded-md bg-stone-700 px-4 py-2 font-sans text-stone-200 hover:bg-stone-600 hover:text-stone-100">
          Add Space
        </button>
      </div>
    </aside>
  );
};

export default SpaceSidebar;
