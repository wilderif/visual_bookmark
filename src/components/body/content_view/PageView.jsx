import getLogoUrl from "../../../util/getLogoUrl.js";

const PageView = ({ url, logo_alt }) => {
  // Todo: make it run once
  const logo_src = getLogoUrl(url);

  return (
    <div className="flex items-center justify-center">
      <img src={logo_src} alt={logo_alt} className="w-full" />
    </div>
  );
};

export default PageView;
