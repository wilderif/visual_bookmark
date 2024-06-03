import getFaviconUrl from "../../../util/getFaviconUrl.js";

const PageView = ({ url, logo_alt }) => {
  // Todo: make it run once
  const logo_src = getFaviconUrl(url);

  const handleClickButton = () => {
    window.open(url, "_blank");
  };

  console.log(logo_src);

  return (
    <button
      className="flex h-full w-full items-center justify-center"
      onClick={handleClickButton}
    >
      <img src={logo_src} alt={logo_alt} className="w-full rounded-xl" />
    </button>
  );
};

export default PageView;
