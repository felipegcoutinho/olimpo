import ModalComponent from "../../ui/Modal";
import OlimpoTextInput, { OlimpoSelect } from "../../ui/OlimpoInput";
import { Button } from "flowbite-react";
import React from "react";

function SwModal({ addDevice, updateDevice, updatedProduct, setUpdatedProduct, closeModal, modalIsOpen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    updatedProduct.id ? updateDevice() : addDevice();
  };

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Switch"
    >
      <form onSubmit={handleSubmit}>
        <OlimpoTextInput
          label="Modelo"
          required
          type="text"
          placeholder="SG 1002 MR L2+"
          value={updatedProduct.modelo}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, modelo: e.target.value })}
        />

        <OlimpoSelect
          label="Status do suporte"
          type="text"
          placeholder="Status do suporte"
          value={updatedProduct.status}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, status: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Ativo">Ativo</option>
          <option value="Descontinuado">Descontinuado</option>
          <option value="Estendido">Estendido</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoTextInput
          label="Data de lançamento"
          type="date"
          value={updatedProduct.date}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, date: e.target.value })}
        />

        <OlimpoSelect
          label="Interface"
          type="text"
          value={updatedProduct.interface}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, interface: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Giga">Giga</option>
          <option value="Fast">Fast</option>
          <option value="Giga | Fast">Giga | Fast</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoSelect
          label="Gerenciável"
          type="text"
          value={updatedProduct.gerenciavel}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              gerenciavel: e.target.value,
            })
          }
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoSelect
          label="Alimenta via PoE"
          type="text"
          value={updatedProduct.poe}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, poe: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="802.3af - 802.3at">802.3af - 802.3at</option>
          <option value="802.3af/B - 802.3at">802.3af/B - 802.3at</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoTextInput
          label="Encaminhamento de Pacotes"
          type="text"
          placeholder="15 Mpps"
          value={updatedProduct.pps}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, pps: e.target.value })}
        />

        <OlimpoTextInput
          label="Backplane"
          type="text"
          placeholder="20 Gbps"
          value={updatedProduct.backplane}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, backplane: e.target.value })}
        />

        <OlimpoTextInput
          label="Qtde Portas RJ45"
          type="text"
          placeholder="8 Portas"
          value={updatedProduct.qtdePortas}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, qtdePortas: e.target.value })}
        />

        <OlimpoTextInput
          label="Qtde Interface SFP"
          type="text"
          placeholder="2 Independentes"
          value={updatedProduct.sfp}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, sfp: e.target.value })}
        />

        <OlimpoSelect
          label="PoE Extender"
          type="text"
          value={updatedProduct.poeExtender}
          onChange={(e) =>
            setUpdatedProduct({
              ...updatedProduct,
              poeExtender: e.target.value,
            })
          }
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoTextInput
          label="PoE p/ Porta"
          type="text"
          placeholder="30 W"
          value={updatedProduct.poePorta}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, poePorta: e.target.value })}
        />

        <OlimpoTextInput
          label="PoE Total"
          type="text"
          placeholder="97 W"
          value={updatedProduct.poeTotal}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, poeTotal: e.target.value })}
        />

        <OlimpoSelect
          label="QoS"
          type="text"
          value={updatedProduct.qos}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, qos: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoSelect
          label="Tempo da Garantia"
          type="text"
          value={updatedProduct.garantia}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, garantia: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="1 ano">1 ano</option>
          <option value="2 anos">2 anos</option>
          <option value="3 anos">3 anos</option>
          <option value="4 anos">4 anos</option>
          <option value="5 anos">5 anos</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoTextInput
          label="URL da Página"
          type="text"
          placeholder="https://www.intelbras.com/pt-br/switch-gerenciavel-com-8-portas-giga-2-portas-mini-gbic-sg-1002-mr-l2"
          value={updatedProduct.pagina}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, pagina: e.target.value })}
        />

        <OlimpoSelect
          label="Ocultar Equipamento"
          required
          type="text"
          value={updatedProduct.ocultar}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, ocultar: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Não">Não</option>
          <option value="Sim">Sim</option>
        </OlimpoSelect>

        <div className="bg-white dark:bg-transparent bottom-0 flex flex-col sticky gap-1 mt-1">
          <Button type="submit" color="success">
            {updatedProduct.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}
          </Button>
          <Button color="light" onClick={closeModal}>
            Cancelar
          </Button>
        </div>
      </form>
    </ModalComponent>
  );
}

export default SwModal;
