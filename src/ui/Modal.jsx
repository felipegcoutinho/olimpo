import InfoModal from "./InfoModal";
import React from "react";
import Modal from "react-modal";

function ModalComponent({ children, modalIsOpen, closeModal, setor, updatedProductId, updatedProductModelo }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      className="bg-white dark:bg-itbs-modern-200 rounded-lg h-5/6 inset-1/2 outline-none overflow-auto p-4 pb-1 absolute -translate-x-1/2 -translate-y-1/2 w-1/3 "
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0 backdrop-blur-sm "
    >
      {modalIsOpen && (
        <div className="modal">
          <div className="flex justify-between">
            <h1 className="text-2xl dark:text-white">{updatedProductId ? `Atualizar ${updatedProductModelo}` : `Adicionar ${setor}`}</h1>
          </div>
          <InfoModal />
          {children}
        </div>
      )}
    </Modal>
  );
}

export default ModalComponent;
