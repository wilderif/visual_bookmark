import PageView from "./body/content_view/PageView.jsx";
import DirectoryView from "./body/content_view/DirectoryView.jsx";

const ContentContainer = ({ content }) => {
  const contentToView = (
    <div className="flex flex-col items-center">
      <button className="aspect-square w-36 rounded-xl border border-stone-700 bg-stone-600 p-4 shadow-sm shadow-stone-950 hover:bg-stone-700">
        {content.type === "page" ? (
          <PageView url={content.hyperlink} logo_alt={content.title} />
        ) : (
          <DirectoryView content={content} />
        )}
      </button>
      <p className="mt-1.5 font-sans font-medium">{content.title}</p>
    </div>
  );

  return contentToView;
};

export default ContentContainer;
