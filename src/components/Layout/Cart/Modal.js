import React from "react-dom";
import "./Modal.css";

const BackDrop = () => {
  return <div className="back-drop"></div>;
};

const Modal = (props) => {
  return React.createPortal(
    <>
      <BackDrop />
      <div className="modal-style">{props.children}</div>
    </>,
    document.getElementById("overlays")
  );
};

export default Modal;
