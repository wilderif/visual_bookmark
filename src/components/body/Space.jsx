import ContentContainer from "./ContentContainer.jsx";

const Space = ({ spaceContent }) => {
  return (
    // <div className="grid w-[calc(100%-208px)] grid-cols-[repeat(auto-fit,_210px)] grid-rows-[repeat(auto-fit,_210px)] justify-center px-5 pt-20">
    <div className="grid w-[calc(100%-208px)] grid-cols-[repeat(auto-fit,_100px)] grid-rows-[repeat(auto-fit,_100px)] justify-center px-5 pt-20">
      {spaceContent.map((content) => (
        <ContentContainer key={content.id} content={content} />
      ))}
    </div>
  );
};

export default Space;
