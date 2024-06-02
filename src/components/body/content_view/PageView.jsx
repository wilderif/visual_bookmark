const PageView = ({ logo_src, logo_alt }) => {
  return (
    // <div className="flex flex-col items-center">
    //   <button className="aspect-square w-36 rounded-xl border border-stone-700 bg-stone-600 p-4 shadow-sm shadow-stone-950 hover:bg-stone-700">
    //     <img src={content.logo} alt={content.title} className="object-" />
    //   </button>
    //   <p className="mt-1.5 font-sans font-medium">{content.title}</p>
    // </div>
    <img src={logo_src} alt={logo_alt} className="object-" />
  );
};

export default PageView;
