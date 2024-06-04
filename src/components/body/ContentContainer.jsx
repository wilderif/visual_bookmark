import PageView from "./space_view/PageView.jsx";
import DirectoryView from "./space_view/DirectoryView.jsx";

const ContentContainer = ({ content }) => {
  const contentToView = (
    <div className="flex flex-col items-center">
      <div className="aspect-square w-16 rounded-xl border border-stone-700 bg-stone-600 p-1.5 shadow-sm shadow-stone-950 hover:bg-stone-700">
        {content.type === "page" ? (
          <PageView url={content.url} logo_alt={content.title} />
        ) : (
          <DirectoryView content={content} />
        )}
      </div>
      <p className="mt-1 w-full truncate px-2 text-center font-sans text-xs font-normal">
        {content.title}
      </p>
    </div>
  );

  return contentToView;
};

export default ContentContainer;
