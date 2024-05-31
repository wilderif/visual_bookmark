import ContentContainer from "../ContentContainer.jsx";

const Space = ({ spaceContent }) => {
  return (
    <div className="mx-5 mt-10 grid grid-cols-[repeat(auto-fit,_350px)] justify-center">
      {spaceContent.map((content, idx) => (
        <div id={content.id} className="flex items-center justify-center">
          <ContentContainer key={idx} content={content} />
        </div>
      ))}
    </div>
  );
};

export default Space;
