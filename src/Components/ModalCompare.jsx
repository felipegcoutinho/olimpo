import React from "react";
import Modal from "react-modal";

function ModalComponentCompare({children, modalIsOpen, closeModal, width}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      className={`bg-white rounded-lg h-[90%] ${width} inset-1/2 outline-none overflow-auto p-4 pb-1 absolute -translate-x-1/2 -translate-y-1/2`}
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0">
      {children}
    </Modal>
  );
}

export default ModalComponentCompare;
