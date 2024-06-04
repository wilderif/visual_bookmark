import PageView from "./space_view/PageView.jsx";
import DirectoryView from "./space_view/DirectoryView.jsx";

const ContentContainer = ({ item }) => {
  const contentToView = (
    <div className="flex flex-col items-center">
      <div className="border-1 aspect-square w-16 rounded-xl border-stone-700 bg-stone-500 shadow-sm shadow-stone-900 hover:bg-stone-600">
        {item.type === "directory" ? (
          <DirectoryView subItem={item.subItems} title={item.title} />
        ) : (
          <PageView url={item.url} logo_alt={item.title} />
        )}
      </div>
      <p className="mt-1 w-full truncate px-2 text-center font-sans text-xs font-medium text-stone-800">
        {item.title}
      </p>
    </div>
  );

  return contentToView;
};

export default ContentContainer;
