import PageView from "../PageView/PageView.jsx";
import "./DirectoryView.css";

export default function DirectoryView(props) {
  return (
    <div className="directoryContainer">
      <h3>{props.directoryContent.title}</h3>
      <div className="directoryContent">
        {props.directoryContent.children.map((item, index) => {
          return item.type === "directory" ? (
            <DirectoryView key={index} directoryContent={item} />
          ) : (
            <PageView key={index} pageContent={item} />
          );
        })}
      </div>
    </div>
  );
}
