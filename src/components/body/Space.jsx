import ContentContainer from "./ContentContainer.jsx";

const Space = ({ spaceContent }) => {
  return (
    <div className="h-full w-full px-14 pt-28">
      <div className="grid grid-cols-[repeat(auto-fit,_120px)] justify-center gap-y-8">
        {spaceContent.map((item) => (
          <ContentContainer key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Space;
