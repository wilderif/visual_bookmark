import "./PageView.css";

export default function PageView(props) {
  return (
    <button
      className="pageContainer"
      // onClick={() => (window.location.href = props.pageContent.hyperlink)}
      onClick={() => window.open(props.pageContent.hyperlink, "_blank")}
    >
      <img
        className="pageContent"
        src={props.pageContent.logo}
        alt={props.pageContent.alias}
      />
      <p>{props.pageContent.title}</p>
    </button>
  );
}
