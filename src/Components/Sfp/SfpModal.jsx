import React from "react";
import {useContext} from "react";
import {SfpContext} from "./Sfp";
import ModalComponent from "../../ui/Modal";
import OlimpoTextInput from "../../ui/OlimpoTextInput";
import OlimpoSelect from "../../ui/OlimpoSelect";
import {Button} from "flowbite-react";

function SfpModal() {
  const {addDevice, updateDevice, updatedProduct, setUpdatedProduct, closeModal, modalIsOpen} = useContext(SfpContext);

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Módulo SFP">
      <form onSubmit={updatedProduct.id ? updateDevice : addDevice}>
        <div>
          <label>Modelo</label>
          <OlimpoTextInput
            required
            type="text"
            placeholder="KPSD 1120 E"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />

          <label>Status do suporte</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.status}
            onChange={(e) => setUpdatedProduct({...updatedProduct, status: e.target.value})}>
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

          <label>Tipo do Conector</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.conector}
            onChange={(e) => setUpdatedProduct({...updatedProduct, conector: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="SC/UPC (Duplo)">SC/UPC (Duplo)</option>
            <option value="SC/UPC (Única)">SC/UPC (Única)</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>

          <label>Tipo do Módulo</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.modulo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulo: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="SFP">SFP</option>
            <option value="EPON">EPON</option>
            <option value="GPON">GPON</option>
            <option value="XFP">XFP</option>
            <option value="SFP+">SFP+</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>

          <label>WDM</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.wdm}
            onChange={(e) => setUpdatedProduct({...updatedProduct, wdm: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>

          <label>Distância</label>
          <OlimpoTextInput
            type="text"
            placeholder="20 Km"
            value={updatedProduct.distancia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, distancia: e.target.value})}
          />

          <label>Tipo da Fibra</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.fibra}
            onChange={(e) => setUpdatedProduct({...updatedProduct, fibra: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Monomodo">Monomodo</option>
            <option value="Multimodo">Multimodo</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>

          <label>Potência de Sinal</label>
          <OlimpoTextInput
            type="text"
            placeholder="2,5 dBm | 7 dBm"
            value={updatedProduct.potencia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia: e.target.value})}
          />

          <label>Sensibilidade de Sinal</label>
          <OlimpoTextInput
            type="text"
            placeholder="-8 dBm | -30 dbm"
            value={updatedProduct.sensibilidade}
            onChange={(e) => setUpdatedProduct({...updatedProduct, sensibilidade: e.target.value})}
          />

          <label>Comprimento Sinal RX</label>
          <OlimpoTextInput
            type="text"
            placeholder="1310 nm"
            value={updatedProduct.CompRX}
            onChange={(e) => setUpdatedProduct({...updatedProduct, CompRX: e.target.value})}
          />

          <label>Comprimento Sinal TX</label>
          <OlimpoTextInput
            type="text"
            placeholder="1490 nm"
            value={updatedProduct.CompTX}
            onChange={(e) => setUpdatedProduct({...updatedProduct, CompTX: e.target.value})}
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
            placeholder="https://www.intelbras.com/pt-br/modulo-sfp-epon-kpsd-1120-e"
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
        </div>
      </form>
    </ModalComponent>
  );
}

export default SfpModal;
