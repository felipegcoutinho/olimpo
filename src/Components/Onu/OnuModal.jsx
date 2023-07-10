import React from "react";
import {useContext} from "react";
import {Button} from "flowbite-react";
import ModalComponent from "../../ui/Modal";
import OlimpoTextInput from "../../ui/OlimpoTextInput";
import OlimpoSelect from "../../ui/OlimpoSelect";
import {OnuContext} from "./Onu";

function OnuModal() {
  const {addDevice, updateDevice, updatedProduct, setUpdatedProduct, closeModal, modalIsOpen} = useContext(OnuContext);

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Onts">
      <form onSubmit={updatedProduct.id ? updateDevice : addDevice}>
        <label>Modelo</label>
        <OlimpoTextInput
          required
          type="text"
          placeholder="WiFiber 121 AC"
          value={updatedProduct.modelo}
          onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
        />

        <label>Status do suporte</label>
        <OlimpoSelect
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
          <option value="Giga/Fast">Giga/Fast</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Qtde FXS</label>
        <OlimpoSelect
          required
          type="text"
          value={updatedProduct.fxs}
          onChange={(e) => setUpdatedProduct({...updatedProduct, fxs: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="1 porta">1 porta</option>
          <option value="2 portas">2 portas</option>
          <option value="3 portas">3 portas</option>
          <option value="-">Não Possui</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Qtde RJ45</label>
        <OlimpoSelect
          type="text"
          value={updatedProduct.qtdeportas}
          onChange={(e) => setUpdatedProduct({...updatedProduct, qtdeportas: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="1 porta">1 porta</option>
          <option value="2 portas">2 portas</option>
          <option value="3 portas">3 portas</option>
          <option value="4 portas">4 portas</option>
          <option value="5 portas">5 portas</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Tecnologia PON</label>
        <OlimpoSelect
          required
          type="text"
          value={updatedProduct.tipo}
          onChange={(e) => setUpdatedProduct({...updatedProduct, tipo: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="EPON/GPON">EPON/GPON</option>
          <option value="GPON">GPON</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Sensibilidade de sinal</label>
        <OlimpoTextInput
          type="text"
          placeholder="-7 dBm | -27 dBm"
          value={updatedProduct.sensibilidade}
          onChange={(e) => setUpdatedProduct({...updatedProduct, sensibilidade: e.target.value})}
        />

        <label>Área de cobertura</label>
        <OlimpoTextInput
          type="text"
          placeholder="120 m²"
          value={updatedProduct.cobertura}
          onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
        />

        <label>Usuários simultâneos</label>
        <OlimpoTextInput
          type="text"
          placeholder="64 usuários"
          value={updatedProduct.clientesSimultaneos}
          onChange={(e) => setUpdatedProduct({...updatedProduct, clientesSimultaneos: e.target.value})}
        />

        <label>Datarate Máx. 2G</label>
        <OlimpoTextInput
          type="text"
          placeholder="300 Mbps"
          value={updatedProduct.transmissao2ghz}
          onChange={(e) => setUpdatedProduct({...updatedProduct, transmissao2ghz: e.target.value})}
        />

        <label>Datarate Máx. 5G</label>
        <OlimpoTextInput
          type="text"
          placeholder="867 Mbps"
          value={updatedProduct.transmissao5ghz}
          onChange={(e) => setUpdatedProduct({...updatedProduct, transmissao5ghz: e.target.value})}
        />

        <label>Qtde SSIDs</label>
        <OlimpoTextInput
          type="text"
          placeholder="8 SSIDs"
          value={updatedProduct.ssid}
          onChange={(e) => setUpdatedProduct({...updatedProduct, ssid: e.target.value})}
        />

        <label>Compatível com TR069</label>
        <OlimpoSelect
          type="text"
          value={updatedProduct.tr069}
          onChange={(e) => setUpdatedProduct({...updatedProduct, tr069: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Compatível com Customize</label>
        <OlimpoSelect
          type="text"
          value={updatedProduct.customize}
          onChange={(e) => setUpdatedProduct({...updatedProduct, customize: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

        <label>Compatível com Remotize</label>
        <OlimpoSelect
          type="text"
          value={updatedProduct.remotize}
          onChange={(e) => setUpdatedProduct({...updatedProduct, remotize: e.target.value})}>
          {!updatedProduct.id && (
            <option selected disabled>
              Escolha
            </option>
          )}
          <option value="Sim">Sim</option>
          <option value="-">Não</option>
          <option value="N/A">N/A</option>
        </OlimpoSelect>

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
          placeholder="https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-fxs-1p-wi-fi-ac-wifiber-121-ac"
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

export default OnuModal;