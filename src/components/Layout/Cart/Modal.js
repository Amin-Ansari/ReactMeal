import React from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div className="back-drop" onClick={props.cc}></div>;
};

const Modal = (props) => {
  return React.createPortal(
    <>
      <BackDrop cc={props.onClosingModal} />
      <div className="modal-style">{props.children}</div>
    </>,
    document.getElementById("overlays")
  );
};

export default Modal;
