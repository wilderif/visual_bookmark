const getFaviconUrl = (url) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  try {
    url = new URL(url);
  } catch (error) {
    console.error("Invalid URL:", error.message);
    return null;
  }
  console.log(url);

  // url = new URL(url);
  // url = url.hostname;
  // return "https://" + url + "/favicon.ico/";

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
  return "https://www.google.com/s2/favicons?sz=128&domain_url=" + url;
  // return "https://www.google.com/s2/favicons?sz=180&domain_url=" + url;
};

export default getFaviconUrl;
