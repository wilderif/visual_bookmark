import PageView from "./body/content_view/PageView.jsx";
import DirectoryView from "./body/content_view/DirectoryView.jsx";

const ContentContainer = ({ content }) => {
  const contentToView =
    content.type === "page" ? (
      <PageView content={content} />
    ) : (
      <DirectoryView content={content} />
    );

  return contentToView;

  // {content.type === "page" ? (
  //   <PageView content={content} />
  // ) : (
  //   <DirectoryView content={content} />
  // )}
};

export default ContentContainer;
