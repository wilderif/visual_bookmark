import getFaviconUrl from "../../../util/getFaviconUrl.js";

/**
 * PageView component renders a button with a favicon image and opens the URL in a new tab when clicked.
 */
const PageView = ({ url, logo_alt }) => {
  // Todo: make it run once
  const logo_src = getFaviconUrl(url);

  const handleClickButton = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      className="flex h-full w-full items-center justify-center p-1.5"
      onClick={handleClickButton}
    >
      <img
        src={logo_src}
        alt={logo_alt}
        className="aspect-square w-full rounded-lg"
      />
    </button>
  );
};

export default PageView;
