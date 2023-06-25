import React from "react";
import classes from "./Modal.module.scss";

type ModalProps = {
  show: boolean;
  children: JSX.Element | JSX.Element[] | string;
  closeModal: () => void;
  modalClassName?: string;
  containerClassName?: string;
};

function Modal({
  show,
  children,
  closeModal,
  modalClassName,
  ...others
}: ModalProps) {
  const containerClasses = [
    classes.container,
    show ? classes.Open : classes.Closed,
  ].join(" ");

  const BackDropClasses = [
    classes.BackDrop,
    show ? classes.Open : classes.Closed,
  ].join(" ");

  const ModalClasses = [
    classes.Modal,
    show ? classes.Open : classes.Closed,
    modalClassName,
  ].join(" ");

  return (
    <div className={containerClasses} {...others}>
      <div aria-hidden className={BackDropClasses} onClick={closeModal} />
      <div className={ModalClasses}>{show ? children : null}</div>
    </div>
  );
}

Modal.defaultProps = {
  modalClassName: "",
};

export default Modal;
