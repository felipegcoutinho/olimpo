import React from "react";
import {useContext} from "react";
import {RadioContext} from "./Radio";
import ModalComponent from "../../ui/Modal";
import OlimpoTextInput from "../../ui/OlimpoTextInput";
import OlimpoSelect from "../../ui/OlimpoSelect";
import {Button} from "flowbite-react";

function RadioModal() {
  const {addDevice, updateDevice, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(RadioContext);

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Rádio">
      <form onSubmit={updatedProduct.id ? updateDevice : addDevice}>
        <div className="flex flex-col">
          <label>Modelo</label>
          <OlimpoTextInput
            required
            type="text"
            placeholder="Wom 5A-23"
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
          <label>Indicado</label>
          <OlimpoSelect
            placeholder="Indicado"
            value={updatedProduct.indicado}
            onChange={(e) => setUpdatedProduct({...updatedProduct, indicado: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="PTP">PTP</option>
            <option value="BASE">BASE</option>
            <option value="BASE/PTP">BASE/PTP</option>
          </OlimpoSelect>
          <label>Modulação</label>
          <OlimpoSelect
            required
            type="text"
            placeholder="Modulação"
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
          <label>Ganho de Antena (Em dBi)</label>
          <OlimpoTextInput
            type="text"
            placeholder="23 dBi"
            value={updatedProduct.ganho}
            onChange={(e) => setUpdatedProduct({...updatedProduct, ganho: e.target.value})}
          />
          <label>Potência (Em dBm - mW)</label>
          <OlimpoTextInput
            type="text"
            placeholder="25 dBm - 316 mW"
            value={updatedProduct.potencia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia: e.target.value})}
          />
          <label>Encaminhamento de Pacotes</label>
          <OlimpoTextInput
            type="text"
            placeholder="60.000 Pps"
            value={updatedProduct.pps}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pps: e.target.value})}
          />
          <label>Throughput Efetivo (Em Mbps)</label>
          <OlimpoTextInput
            type="text"
            placeholder="160 Mbps"
            value={updatedProduct.throughputEfetivo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputEfetivo: e.target.value})}
          />
          <label>Throughput Nominal (Em Mbps)</label>
          <OlimpoTextInput
            type="text"
            placeholder="300 Mbps"
            value={updatedProduct.throughputNominal}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputNominal: e.target.value})}
          />
          <label>Abertura (Horinzontal | Vertical)</label>
          <OlimpoTextInput
            type="text"
            placeholder="H-9° | V-9°"
            value={updatedProduct.aberturaHorVer}
            onChange={(e) => setUpdatedProduct({...updatedProduct, aberturaHorVer: e.target.value})}
          />
          <label>Distância do Enlace</label>
          <OlimpoTextInput
            type="text"
            placeholder="10 Km"
            value={updatedProduct.distancia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, distancia: e.target.value})}
          />
          <label>Wireless</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.wireless}
            onChange={(e) => setUpdatedProduct({...updatedProduct, wireless: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="MiMo 2x2">MiMo 2x2</option>
            <option value="SiSo 1x1">SiSo 1x1</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>
          <label>Alimentação</label>
          <OlimpoTextInput
            type="text"
            placeholder="12V - 24V"
            value={updatedProduct.alimentaçao}
            onChange={(e) => setUpdatedProduct({...updatedProduct, alimentaçao: e.target.value})}
          />
          <label>Garantia</label>
          <OlimpoSelect
            type="text"
            placeholder="Status do suporte"
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
            placeholder="https://www.intelbras.com/pt-br/cpeptp-com-antena-dish-de-23-dbi-mimo-2x2-wom-5a-23"
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
            <Button type="submit" color="success" className="">
              {updateDevice.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}
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

export default RadioModal;
