import ContentContainer from "./ContentContainer.jsx";

const Space = ({ spaceContent }) => {
  return (
    <div>
      {spaceContent.map((bookmark, idx) => (
        <ContentContainer key={idx} content={bookmark} />
      ))}
    </div>
  );
};

export default Space;
