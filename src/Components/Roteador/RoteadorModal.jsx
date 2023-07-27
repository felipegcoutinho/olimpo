import ModalComponent from "../../ui/Modal";
import OlimpoSelect from "../../ui/OlimpoSelect";
import OlimpoTextInput from "../../ui/OlimpoTextInput";
import {HOContext} from "./Roteador";
import {Button} from "flowbite-react";
import React from "react";
import {useContext} from "react";

function RoteadoresModal() {
  const {addDevice, updateDevice, updatedProduct, setUpdatedProduct, closeModal, modalIsOpen} =
    useContext(HOContext);

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
      setor="Roteador">
      <form onSubmit={handleSubmit}>
        <OlimpoTextInput
          label="Modelo"
          required
          type="text"
          placeholder="TWIBI GIGA+"
          value={updatedProduct.modelo}
          onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
        />

        <OlimpoSelect
          label="Status do suporte"
          required
          type="text"
          value={updatedProduct.status}
          onChange={(e) => setUpdatedProduct({...updatedProduct, status: e.target.value})}>
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
          onChange={(e) => setUpdatedProduct({...updatedProduct, date: e.target.value})}
        />

        <OlimpoSelect
          label="Modulação"
          type="text"
          value={updatedProduct.interface}
          onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value})}>
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

        <OlimpoTextInput
          label="Área de cobertura (Em m²)"
          type="text"
          placeholder="180 m²"
          value={updatedProduct.cobertura}
          onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
        />

        <OlimpoTextInput
          label="Raio (Em m)"
          type="text"
          placeholder="7,56 m"
          value={updatedProduct.raio}
          onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value})}
        />

        <OlimpoTextInput
          label="Usuários Máximos"
          type="text"
          placeholder="60 usuários"
          value={updatedProduct.usuarioMax}
          onChange={(e) => setUpdatedProduct({...updatedProduct, usuarioMax: e.target.value})}
        />

        <OlimpoTextInput
          label="Plano recomendado"
          type="text"
          placeholder="Até 400Mbps"
          value={updatedProduct.planoRecomendado}
          onChange={(e) => setUpdatedProduct({...updatedProduct, planoRecomendado: e.target.value})}
        />

        <OlimpoTextInput
          label="Qtde Portas"
          type="text"
          placeholder="1(LAN) + 1(W / L)"
          value={updatedProduct.qtdePortas}
          onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
        />

        <OlimpoTextInput
          label="Datarate Máx. 2G"
          type="text"
          placeholder="300 Mbps"
          value={updatedProduct.datarateMax2G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax2G: e.target.value})}
        />

        <OlimpoTextInput
          label="Datarate Máx. 5G"
          type="text"
          placeholder="867 Mbps"
          value={updatedProduct.datarateMax5G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax5G: e.target.value})}
        />

        <OlimpoSelect
          label="IPv6"
          type="text"
          value={updatedProduct.ipv6}
          onChange={(e) => setUpdatedProduct({...updatedProduct, ipv6: e.target.value})}>
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
          label="Tensão"
          type="text"
          placeholder="12V (1A)"
          value={updatedProduct.tensao}
          onChange={(e) => setUpdatedProduct({...updatedProduct, tensao: e.target.value})}
        />

        <OlimpoSelect
          label="Modo Repetidor"
          type="text"
          value={updatedProduct.repetidor}
          onChange={(e) => setUpdatedProduct({...updatedProduct, repetidor: e.target.value})}>
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
          label="Modo Roteador"
          type="text"
          value={updatedProduct.roteador}
          onChange={(e) => setUpdatedProduct({...updatedProduct, roteador: e.target.value})}>
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
          label="Cliente Wireless"
          type="text"
          value={updatedProduct.cliente}
          onChange={(e) => setUpdatedProduct({...updatedProduct, cliente: e.target.value})}>
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
          label="Modo AP"
          type="text"
          value={updatedProduct.ap}
          onChange={(e) => setUpdatedProduct({...updatedProduct, ap: e.target.value})}>
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
          label="Garantia"
          type="text"
          value={updatedProduct.garantia}
          onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value})}>
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
          placeholder="https://www.intelbras.com/pt-br/roteador-wi-fi-5-mesh-ac-1200-twibi-giga"
          value={updatedProduct.pagina}
          onChange={(e) => setUpdatedProduct({...updatedProduct, pagina: e.target.value})}
        />

        <OlimpoSelect
          label="Desabilitar equipamento"
          required
          type="text"
          value={updatedProduct.ocultar}
          onChange={(e) => setUpdatedProduct({...updatedProduct, ocultar: e.target.value})}>
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

export default RoteadoresModal;
