import React from "react";
import {useContext} from "react";
import {Button, RangeSlider} from "flowbite-react";
import ModalComponent from "../../ui/Modal";
import OlimpoTextInput from "../../ui/OlimpoTextInput";
import OlimpoSelect from "../../ui/OlimpoSelect";
import {APContext} from "./Ap";

function AP_Modal() {
  const {addDevice, updateDevice, updatedProduct, setUpdatedProduct, closeModal, modalIsOpen} = useContext(APContext);

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Access Point">
      <form onSubmit={updatedProduct.id ? updateDevice : addDevice}>
        <OlimpoTextInput
          label="Modelo"
          required
          type="text"
          placeholder="AP 1250 AC MAX"
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
          <option value="Suporte">Suporte</option>
          <option value="Phaseout">Phaseout</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoSelect
          label="Modulação"
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

        <OlimpoTextInput
          label="Área de cobertura"
          type="text"
          placeholder="400"
          value={updatedProduct.cobertura}
          onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
        />

        <OlimpoTextInput
          label="Raio"
          type="text"
          placeholder="11,2"
          value={updatedProduct.raio}
          onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value})}
        />

        <OlimpoTextInput
          label="Usuários simultâneos"
          type="text"
          placeholder="100 usuários"
          value={updatedProduct.usuarioMax}
          onChange={(e) => setUpdatedProduct({...updatedProduct, usuarioMax: e.target.value})}
        />

        <OlimpoTextInput
          label="Datarate Máx. 2G"
          type="text"
          placeholder="300 Mbps"
          value={updatedProduct.throughputWireless24}
          onChange={(e) => setUpdatedProduct({...updatedProduct, throughputWireless24: e.target.value})}
        />

        <OlimpoTextInput
          label="Datarate Máx. 5G"
          type="text"
          placeholder="866 Mbps"
          value={updatedProduct.throughputWireless50}
          onChange={(e) => setUpdatedProduct({...updatedProduct, throughputWireless50: e.target.value})}
        />

        <OlimpoTextInput
          label="Qtde Portas"
          type="text"
          placeholder="1 Porta"
          value={updatedProduct.qtdePortas}
          onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
        />

        <OlimpoSelect
          label="Tipo PoE"
          type="text"
          value={updatedProduct.poe}
          onChange={(e) => setUpdatedProduct({...updatedProduct, poe: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="802.3at">802.3at</option>
          <option value="802.3af/A">802.3af/A</option>
          <option value="802.3af">802.3af</option>
          <option value="Passivo">Passivo</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <OlimpoTextInput
          label="Tensão"
          type="text"
          placeholder="48V / 12 VDC (P4)"
          value={updatedProduct.tensao}
          onChange={(e) => setUpdatedProduct({...updatedProduct, tensao: e.target.value})}
        />

        <OlimpoSelect
          label="Compatível com Handover"
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

        <OlimpoSelect
          label="Compatível com InMaster"
          type="text"
          value={updatedProduct.inmaster}
          onChange={(e) => setUpdatedProduct({...updatedProduct, inmaster: e.target.value})}>
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
          label="Potência de TX 2G"
          type="text"
          placeholder="28 dBm (630mW)"
          value={updatedProduct.potencia2G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, potencia2G: e.target.value})}
        />

        <OlimpoTextInput
          label="Potência de TX 5G"
          type="text"
          placeholder="27 dBm (501mW)"
          value={updatedProduct.potencia5G}
          onChange={(e) => setUpdatedProduct({...updatedProduct, potencia5G: e.target.value})}
        />

        <OlimpoSelect
          label="Tempo da Garantia"
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
          label="Url da Página"
          type="text"
          placeholder="https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-potencia-ap-1250-ac-max"
          value={updatedProduct.pagina}
          onChange={(e) => setUpdatedProduct({...updatedProduct, pagina: e.target.value})}
        />

        <OlimpoSelect
          label="Ocultar"
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
