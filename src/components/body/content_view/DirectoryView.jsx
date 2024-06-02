const DirectoryView = ({ content }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="aspect-square w-36 rounded-lg border border-stone-700 bg-stone-600 p-4 shadow-sm shadow-stone-950 hover:bg-stone-700"></button>
      <p className="mt-1.5">{content.title}</p>
    </div>
  );
};

export default DirectoryView;
