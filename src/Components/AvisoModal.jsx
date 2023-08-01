import React, { useContext } from "react";
import Modal from "react-modal";
import { AdminContext } from "../App";

function AvisoModal() {
  const { modalIsOpenAviso, closeModalAviso } = useContext(AdminContext);

  return (
    <Modal
      isOpen={modalIsOpenAviso}
      onRequestClose={closeModalAviso}
      className="bg-white dark:bg-itbs-modern-200 rounded-lg h-max inset-1/2 outline-none overflow-auto p-6 absolute -translate-x-1/2 -translate-y-1/2 w-1/3"
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0 backdrop-blur-sm"
    >
      <div className="text-4xl mb-4">
        <h1 className="dark:text-white">Avisos</h1>
      </div>
      <p className="py-4">
        Este material foi criado para facilitar o acesso às informações dos principais equipamentos. Sempre consulte a documentação oficial.
      </p>
      <div>
        <p className="py-4 uppercase">
          <strong>Status dos Equipamentos</strong>
        </p>
        <div className="flex items-center">
          <div className="p-2 rounded-full shadow-sm bg-lime-600 shadow-green-400/50 mr-5"></div>
          <p>Ativo: Refere-se aos equipamentos que estão atualmente em linha e para os quais a empresa oferece suporte técnico.</p>
        </div>
        <br></br>
        <div className="flex items-center">
          <div className="p-2 rounded-full shadow-sm bg-amber-400 shadow-amber-400/50 mr-5"></div>
          <p>Estendido: Esse status é usado para equipamentos que foram descontinuados, mas ainda recebem suporte técnico.</p>
        </div>
        <br></br>
        <div className="flex items-center">
          <div className="p-2 rounded-full shadow-sm bg-red-600 shadow-red-400/50 mr-5"></div>
          <p>
            Descontinuado: Equipamentos que não estão mais em linha e não recebem mais suporte via telefone. Os clientes são orientados à entrar em
            contato via email <strong>suporte@intelbras.com.br</strong>.
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default AvisoModal;
