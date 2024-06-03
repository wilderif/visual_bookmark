const getFaviconUrl = (url) => {
  url = new URL(url);
  url = url.hostname;

  // return url + "/favicon.ico/";

  // const faviconSize = [
  //   512, 256, 192, 180, 167, 152, 144, 128, 120, 114, 96, 72, 57, 48, 32, 16,
  // ];
  // for (let i = 0; i < faviconSize.length; i++) {
  //   return (
  //     "https://www.google.com/s2/favicons?sz=" +
  //     faviconSize[i].toString() +
  //     "&domain_url=" +
  //     url
  //   );
  // }
  return "https://www.google.com/s2/favicons?sz=180&domain_url=" + url;
};

export default getFaviconUrl;
