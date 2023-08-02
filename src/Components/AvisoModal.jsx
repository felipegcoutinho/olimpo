import React, { useContext } from "react";
import Modal from "react-modal";
import { AdminContext } from "../App";
import UseAux from "../hooks/UseAux";

function AvisoModal() {
  const { modalIsOpenAviso, closeModalAviso } = useContext(AdminContext);
  const { statusStyles } = UseAux();

  const statusDescriptions = [
    {
      title: "Ativo",
      content: "Refere-se aos equipamentos que estão atualmente em linha e para os quais a empresa oferece suporte técnico.",
    },
    {
      title: "Estendido",
      content: "Equipamentos que foram descontinuados, mas ainda recebem suporte técnico.",
    },
    {
      title: "Descontinuado",
      content:
        "Equipamentos que não estão mais em linha e não recebem mais suporte via telefone. Os clientes são orientados a entrar em contato via email <strong>suporte@intelbras.com.br</strong>.",
    },
  ];

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
      <p className="py-4 dark:text-white">
        Este material foi criado <strong>para facilitar</strong> o acesso às informações dos principais equipamentos. Sempre consulte a documentação
        oficial.
      </p>
      <hr />
      {statusDescriptions.map(({ title, content }) => (
        <div className="flex items-center dark:text-white my-4" key={title}>
          <div className={`p-2 rounded-full shadow-sm ${statusStyles[title]} mr-5`}></div>
          <p>
            <strong>{title}:</strong> <span dangerouslySetInnerHTML={{ __html: content }} />
          </p>
        </div>
      ))}
    </Modal>
  );
}

export default AvisoModal;
