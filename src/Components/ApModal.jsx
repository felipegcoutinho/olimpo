import React from "react";
import {useContext} from "react";
import {APContext} from "./Ap";
import {Button} from "flowbite-react";
import ModalComponent from "../UI Components/Modal";
import InfoModal from "../UI Components/InfoModal";
import OlimpoTextInput from "../UI Components/OlimpoTextInput";
import OlimpoSelect from "../UI Components/OlimpoSelect";

function AP_Modal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(APContext);

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Access Point">
      <form onSubmit={updatedProduct.id ? updateProduct : addProduto}>
        <label>Modelo</label>
        <OlimpoTextInput
          required
          type="text"
          placeholder="AP 1250 AC MAX"
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
          required
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
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Área de cobertura (em m²)</label>
        <OlimpoTextInput
          type="text"
          placeholder="400 m²"
          value={updatedProduct.cobertura}
          onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
        />

        <label>Raio (em m)</label>
        <OlimpoTextInput
          type="text"
          placeholder="11,2 m"
          value={updatedProduct.raio}
          onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value})}
        />

        <label>Usuários simultâneos</label>
        <OlimpoTextInput
          type="text"
          placeholder="100 usuários"
          value={updatedProduct.usuarioMax}
          onChange={(e) => setUpdatedProduct({...updatedProduct, usuarioMax: e.target.value})}
        />

        <label>Datarate Máx. 2G</label>
        <OlimpoTextInput
          type="text"
          placeholder="300 Mbps (2x2)"
          value={updatedProduct.throughputWireless24}
          onChange={(e) => setUpdatedProduct({...updatedProduct, throughputWireless24: e.target.value})}
        />

        <label>Datarate Máx. 5G</label>
        <OlimpoTextInput
          type="text"
          placeholder="866 Mbps (2x2)"
          value={updatedProduct.throughputWireless50}
          onChange={(e) => setUpdatedProduct({...updatedProduct, throughputWireless50: e.target.value})}
        />

        <label>Qtde Portas</label>
        <OlimpoTextInput
          type="text"
          placeholder="1 Porta"
          value={updatedProduct.qtdePortas}
          onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
        />

        <label>Tipo PoE</label>
        <OlimpoSelect type="text" value={updatedProduct.poe} onChange={(e) => setUpdatedProduct({...updatedProduct, poe: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="802.3at">802.3at</option>
          <option value="802.3af/A">802.3af/A</option>
          <option value="802.3af">802.3af</option>
          <option value="-">Não Possui</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Tensão</label>
        <OlimpoTextInput
          type="text"
          placeholder="48V / 12 VDC (P4)"
          value={updatedProduct.tensao}
          onChange={(e) => setUpdatedProduct({...updatedProduct, tensao: e.target.value})}
        />

        <label>Versão do connectiFi</label>
        <OlimpoTextInput
          type="text"
          placeholder="2.9.17"
          value={updatedProduct.connectiVersion}
          onChange={(e) => setUpdatedProduct({...updatedProduct, connectiVersion: e.target.value})}
        />

        <label>Compatível com Handover</label>
        <OlimpoSelect
          type="text"
          value={updatedProduct.handover}
          onChange={(e) => setUpdatedProduct({...updatedProduct, handover: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Compatível com WiseFi</label>
        <OlimpoSelect
          type="text"
          value={updatedProduct.wisefi}
          onChange={(e) => setUpdatedProduct({...updatedProduct, wisefi: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Potência de TX 2G</label>
        <OlimpoTextInput
          type="text"
          placeholder="28 dBm (630mW)"
          value={updatedProduct.potencia2G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, potencia2G: e.target.value})}
        />

        <label>Potência de TX 5G </label>
        <OlimpoTextInput
          type="text"
          placeholder="27 dBm (501mW)"
          value={updatedProduct.potencia5G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, potencia5G: e.target.value})}
        />

        <label>Tempo da Garantia</label>
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
          placeholder="https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-potencia-ap-1250-ac-max"
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

        <div className="bg-white bottom-0 flex flex-col sticky gap-1 mt-1">
          <Button type="submit" color="success">
            {updatedProduct.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}
          </Button>
          <Button color="light" className="" onClick={closeModal}>
            Cancelar
          </Button>
        </div>
      </form>
    </ModalComponent>
  );
}

export default AP_Modal;
