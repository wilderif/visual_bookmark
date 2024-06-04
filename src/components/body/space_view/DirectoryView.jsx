import getFaviconUrl from "../../../util/getFaviconUrl.js";

const DirectoryView = ({ subItem }) => {
  const subItemIcons = [];

  for (let i = 0; i < subItem.length; i++) {
    if (i === 4) {
      break;
    }
    let url = getFaviconUrl(subItem[i].url);
    subItemIcons.push({
      id: subItem[i].id,
      url: url,
      title: subItem[i].title,
    });
  }

  return (
    <button className="flex h-full w-full items-center justify-center p-1">
      <div className="grid grid-cols-2 justify-center">
        {subItemIcons.map((icon) => {
          return (
            <img
              key={icon.id}
              src={icon.url}
              alt={icon.title}
              className="aspect-square w-full rounded-lg p-0.5"
            />
          );
        })}
      </div>
    </button>
  );
};

export default DirectoryView;
