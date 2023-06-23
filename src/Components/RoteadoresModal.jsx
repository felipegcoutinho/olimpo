import React from "react";
import Modal from "react-modal";
import style from "../css/App.module.css";
import {useContext} from "react";
import {HOContext} from "./Roteadores";
import ModalComponent from "../ui/Modal";
import OlimpoTextInput from "../ui/OlimpoTextInput";
import OlimpoSelect from "../ui/OlimpoSelect";

function RoteadoresModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(HOContext);

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Roteador">
      <form onSubmit={updatedProduct.id ? updateProduct : addProduto}>
        <label>Modelo</label>
        <OlimpoTextInput
          required
          type="text"
          placeholder="TWIBI GIGA+"
          value={updatedProduct.modelo}
          onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
        />

        <label>Status do suporte</label>
        <OlimpoSelect
          required
          type="text"
          value={updatedProduct.status}
          onChange={(e) => setUpdatedProduct({...updatedProduct, status: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Suporte">Suporte</option>
          <option value="Phaseout">Phaseout</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Modulação</label>
        <OlimpoSelect
          type="text"
          value={updatedProduct.modulação}
          onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Giga">Giga</option>
          <option value="Fast">Fast</option>
          <option value="Giga WAN | Fast LAN">Giga WAN | Fast LAN</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Área de cobertura (Em m²)</label>
        <OlimpoTextInput
          type="text"
          placeholder="180 m²"
          value={updatedProduct.cobertura}
          onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
        />

        <label>Raio (Em m)</label>
        <OlimpoTextInput
          type="text"
          placeholder="7,56 m"
          value={updatedProduct.raio}
          onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value})}
        />

        <label>Usuários Máximos</label>
        <OlimpoTextInput
          type="text"
          placeholder="60 usuários"
          value={updatedProduct.usuarioMax}
          onChange={(e) => setUpdatedProduct({...updatedProduct, usuarioMax: e.target.value})}
        />

        <label>Plano recomendado</label>
        <OlimpoTextInput
          type="text"
          placeholder="Até 400Mbps"
          value={updatedProduct.planoRecomendado}
          onChange={(e) => setUpdatedProduct({...updatedProduct, planoRecomendado: e.target.value})}
        />

        <label>Qtde Portas</label>
        <OlimpoTextInput
          type="text"
          placeholder="1(LAN) + 1(W / L)"
          value={updatedProduct.qtdePortas}
          onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
        />

        <label>Datarate Máx. 2G</label>
        <OlimpoTextInput
          type="text"
          placeholder="300 Mbps"
          value={updatedProduct.datarateMax2G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax2G: e.target.value})}
        />

        <label>Datarate Máx. 5G</label>
        <OlimpoTextInput
          type="text"
          placeholder="867 Mbps"
          value={updatedProduct.datarateMax5G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax5G: e.target.value})}
        />

        <label>IPv6</label>
        <OlimpoSelect
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

        <label>Tensão</label>
        <OlimpoTextInput
          type="text"
          placeholder="12V (1A)"
          value={updatedProduct.tensao}
          onChange={(e) => setUpdatedProduct({...updatedProduct, tensao: e.target.value})}
        />

        <label>Modo Repetidor</label>
        <OlimpoSelect
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

        <label>Modo Roteador</label>
        <OlimpoSelect
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

        <label>Cliente Wireless</label>
        <OlimpoSelect
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

        <label>Modo AP</label>
        <OlimpoSelect type="text" value={updatedProduct.ap} onChange={(e) => setUpdatedProduct({...updatedProduct, ap: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Garantia</label>
        <OlimpoSelect
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

        <label>URL da Página</label>
        <OlimpoTextInput
          type="text"
          placeholder="https://www.intelbras.com/pt-br/roteador-wi-fi-5-mesh-ac-1200-twibi-giga"
          value={updatedProduct.pagina}
          onChange={(e) => setUpdatedProduct({...updatedProduct, pagina: e.target.value})}
        />

        <label>Ocultar</label>
        <OlimpoSelect
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
      </form>
    </ModalComponent>
  );
}

export default RoteadoresModal;
