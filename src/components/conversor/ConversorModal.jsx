import ModalComponent from "../../ui/Modal";
import OlimpoTextInput, { OlimpoSelect } from "../../ui/OlimpoInput";
import { Button } from "flowbite-react";
import React from "react";

function ConversorModal({ addDevice, updateDevice, updatedProduct, setUpdatedProduct, closeModal, modalIsOpen }) {
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
      setor="Conversor de Mídia"
    >
      <form onSubmit={handleSubmit}>
        <OlimpoTextInput
          label="Modelo"
          required
          type="text"
          placeholder="KGSD 1120 A/B"
          value={updatedProduct.modelo}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, modelo: e.target.value })}
        />

        <OlimpoSelect
          label="Status do suporte"
          type="text"
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
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoSelect
          label="Tipo do Conector"
          type="text"
          value={updatedProduct.conector}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, conector: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="SC/UPC">SC/UPC</option>
          <option value="SC/UPC">SC/UPC</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoSelect
          label="WDM"
          type="text"
          value={updatedProduct.wdm}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, wdm: e.target.value })}
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
          label="Distância"
          type="text"
          placeholder="20 Km"
          value={updatedProduct.distancia}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, distancia: e.target.value })}
        />

        <OlimpoSelect
          label="Tipo da Fibra"
          type="text"
          value={updatedProduct.fibra}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, fibra: e.target.value })}
        >
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Monomodo">Monomodo</option>
          <option value="Multimodo">Multimodo</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoTextInput
          label="Potência de Sinal"
          type="text"
          placeholder="-3 dBm | -8 dBm"
          value={updatedProduct.potencia}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, potencia: e.target.value })}
        />

        <OlimpoTextInput
          label="Sensibilidade de Sinal"
          type="text"
          placeholder="-3 dBm | -23 dBm"
          value={updatedProduct.sensibilidade}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, sensibilidade: e.target.value })}
        />

        <OlimpoTextInput
          label="Comprimento Sinal RX"
          type="text"
          placeholder="A - 1310 nm/ B – 1550 nm"
          value={updatedProduct.CompRX}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, CompRX: e.target.value })}
        />

        <OlimpoTextInput
          label="Comprimento Sinal TX"
          type="text"
          placeholder="A - 1550 nm / B - 1310 nm"
          value={updatedProduct.CompTX}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, CompTX: e.target.value })}
        />

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
          placeholder="https://www.intelbras.com/pt-br/conversor-de-midia-gigabit-ethernet-monomodo-20-km-kgsd-1120-b"
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

export default ConversorModal;
