import InfoModal from "./InfoModal";
import {motion, AnimatePresence} from "framer-motion";
import React from "react";
import Modal from "react-modal";

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Reduzi a duração da animação para 0.4 segundos
    },
  },
};

function ModalComponent({
  children,
  modalIsOpen,
  closeModal,
  setor,
  updatedProductId,

  updatedProductModelo,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      className="bg-white dark:bg-black  rounded-lg h-5/6 inset-1/2 outline-none overflow-auto p-4 pb-1 absolute -translate-x-1/2 -translate-y-1/2 w-1/3 "
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0 backdrop-blur-sm">
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div className="modal" variants={modalVariants} initial="hidden" animate="visible" exit="hidden">
            <div className="flex justify-between">
              <h1 className="text-2xl dark:text-white">{updatedProductId ? `Atualizar ${updatedProductModelo}` : `Adicionar ${setor}`}</h1>
            </div>

            <InfoModal />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}

export default ModalComponent;
