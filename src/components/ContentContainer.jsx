import PageView from "./body/content_view/PageView.jsx";
import DirectoryView from "./body/content_view/DirectoryView.jsx";

const ContentContainer = (props) => {
  return (
    <div className="m-10 aspect-square w-full rounded-lg border border-stone-700 bg-stone-600 p-4 shadow-sm shadow-stone-950 hover:bg-stone-700">
      {props.content.type === "page" ? (
        <PageView content={props.content} />
      ) : (
        <DirectoryView content={props.content} />
      )}
    </div>
  );
};

export default ContentContainer;
