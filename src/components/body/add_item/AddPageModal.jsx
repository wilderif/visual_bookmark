import ReactDom from "react-dom";

const AddPageModal = () => {
  return ReactDom.createPortal(
    <dialog>
      <h4>Add New Page</h4>
      <form>
        <input type="text" placeholder="Page Title" />
        <input type="text" placeholder="Page URL" />
        <button type="submit">Add Page</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
};

export default AddPageModal;
