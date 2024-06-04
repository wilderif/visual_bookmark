import ContentContainer from "./ContentContainer.jsx";

const Space = ({ spaceContent }) => {
  return (
    <div className="w-full px-14 pt-28">
      <div className="grid grid-cols-[repeat(auto-fit,_115px)] grid-rows-[repeat(auto-fit,_115px)]">
        {spaceContent.map((item) => (
          <ContentContainer key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Space;
