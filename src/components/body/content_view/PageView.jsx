const PageView = ({ content }) => {
  return (
    <>
      <button>
        <img src={content.logo} alt={content.title} className="object-" />
      </button>
      <p>test</p>
    </>
  );
};

export default PageView;
