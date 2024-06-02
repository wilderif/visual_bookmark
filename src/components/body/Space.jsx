import ContentContainer from "../ContentContainer.jsx";

const Space = ({ spaceContent }) => {
  return (
    // >
    <div className="grid w-[calc(100%-208px)] grid-cols-[repeat(auto-fit,_210px)] grid-rows-[repeat(auto-fit,_210px)] justify-center px-5 pt-16">
      {spaceContent.map((content, idx) => (
        <div id={content.id} className="flex items-center justify-center">
          <ContentContainer key={idx} content={content} />
        </div>
      ))}
    </div>
  );
};

export default Space;
