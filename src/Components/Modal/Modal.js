import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);

    return () => {
      modalRoot.removeChild(element);
    };
  }, []);

  return ReactDOM.createPortal(children, element);
};

export default Modal;
