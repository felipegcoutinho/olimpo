import React from "react";
import Modal from "react-modal";
import {motion, AnimatePresence} from "framer-motion";

function ModalComponentCompare({children, modalIsOpen, closeModal, width}) {
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      className={`bg-white rounded-lg h-[90%] ${width} inset-1/2 outline-none overflow-auto p-2 absolute -translate-x-1/2 -translate-y-1/2`}
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0">
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div className="modal" variants={modalVariants} initial="hidden" animate="visible" exit="hidden">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}

export default ModalComponentCompare;
