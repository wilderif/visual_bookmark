import PageView from "../PageView/PageView.jsx";
import DirectoryView from "../DirectoryView/DirectoryView.jsx";

export default function ContentContainer(props) {
  return (
    <div className="container">
      {props.data.map((item, index) => {
        return item.type === "directory" ? (
          <DirectoryView key={index} directoryContent={item} />
        ) : (
          <PageView key={index} pageContent={item} />
        );
      })}
    </div>
  );
}
