import PageView from "./PageView.jsx";
import DirectoryView from "./DirectoryView.jsx";

const ContentContainer = (props) => {
  return (
    <div className="">
      {props.content.type === "page" ? (
        <PageView content={props.content} />
      ) : (
        <DirectoryView content={props.content} />
      )}
    </div>
  );
};

export default ContentContainer;
