import React from "react";
import Modal from "react-modal";
import InfoModal from "./InfoModal";
import {Button} from "flowbite-react";

function ModalComponent({children, modalIsOpen, closeModal, setor, updatedProductId, updatedProductModelo}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="bg-white rounded-lg h-4/5 inset-1/2 outline-none overflow-auto p-6 pb-1 absolute -translate-x-1/2 -translate-y-1/2 w-1/3"
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0">
      <h1 className="text-2xl">{updatedProductId ? `Atualizar ${updatedProductModelo}` : `Adicionar ${setor}`}</h1>
      <InfoModal />
      {children}

      <div className="bg-white bottom-0 flex flex-col sticky gap-1 mt-1">
        <Button type="submit" color="success" className="">
          {updatedProductId ? "Atualizar Equipamento" : "Adicionar Equipamento"}
        </Button>
        <Button color="light" className="" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}

export default ModalComponent;
