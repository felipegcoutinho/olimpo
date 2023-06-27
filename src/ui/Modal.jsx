import React from "react";
import Modal from "react-modal";
import InfoModal from "./InfoModal";

function ModalComponent({children, modalIsOpen, closeModal, setor, updatedProductId, updatedProductModelo}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      className="bg-white rounded-lg h-5/6 inset-1/2 outline-none overflow-auto p-4 pb-1 absolute -translate-x-1/2 -translate-y-1/2 w-1/3"
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0">
      <h1 className="text-2xl">{updatedProductId ? `Atualizar ${updatedProductModelo}` : `Adicionar ${setor}`}</h1>
      <InfoModal />
      {children}
    </Modal>
  );
}

export default ModalComponent;
