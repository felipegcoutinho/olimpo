import ModalComponent from "../../ui/Modal";
import OlimpoTextInput, { OlimpoSelect } from "../../ui/OlimpoInput";
import { Button } from "flowbite-react";
import React from "react";

function RadioModal({ addDevice, updateDevice, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal }) {
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
      setor="Rádio"
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <OlimpoTextInput
            label="Modelo"
            required
            type="text"
            placeholder="Wom 5A-23"
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
            label="Indicado"
            placeholder="Indicado"
            value={updatedProduct.indicado}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, indicado: e.target.value })}
          >
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="PTP">PTP</option>
            <option value="BASE">BASE</option>
            <option value="BASE/PTP">BASE/PTP</option>
          </OlimpoSelect>

          <OlimpoSelect
            label="Interface"
            required
            type="text"
            placeholder="Modulação"
            value={updatedProduct.interface}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                modulação: e.target.value,
              })
            }
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

          <OlimpoTextInput
            label="Ganho de Antena (Em dBi)"
            type="text"
            placeholder="23 dBi"
            value={updatedProduct.ganho}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, ganho: e.target.value })}
          />

          <OlimpoTextInput
            label="Potência (Em dBm)"
            type="text"
            placeholder="25 dBm"
            value={updatedProduct.potencia}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, potencia: e.target.value })}
          />

          <OlimpoTextInput
            label="Encaminhamento de Pacotes"
            type="text"
            placeholder="60.000 Pps"
            value={updatedProduct.pps}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, pps: e.target.value })}
          />

          <OlimpoTextInput
            label="Throughput Efetivo e Nominal (Em Mbps)"
            type="text"
            placeholder="160 Mbps"
            value={updatedProduct.throughputEfetivoNominal}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                throughputEfetivoNominal: e.target.value,
              })
            }
          />

          <OlimpoTextInput
            label="Abertura (Horinzontal | Vertical)"
            type="text"
            placeholder="H-9° | V-9°"
            value={updatedProduct.aberturaHorVer}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                aberturaHorVer: e.target.value,
              })
            }
          />

          <OlimpoTextInput
            label="Distância do Enlace"
            type="text"
            placeholder="10 Km"
            value={updatedProduct.distancia}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                distancia: e.target.value,
              })
            }
          />

          <OlimpoSelect
            label="Wireless"
            type="text"
            value={updatedProduct.wireless}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, wireless: e.target.value })}
          >
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="MiMo 2x2">MiMo 2x2</option>
            <option value="SiSo 1x1">SiSo 1x1</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>

          <OlimpoTextInput
            label="Alimentação"
            type="text"
            placeholder="12V - 24V"
            value={updatedProduct.alimentaçao}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                alimentaçao: e.target.value,
              })
            }
          />
          <OlimpoSelect
            label="Garantia"
            type="text"
            placeholder="Status do suporte"
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
            placeholder="https://www.intelbras.com/pt-br/cpeptp-com-antena-dish-de-23-dbi-mimo-2x2-wom-5a-23"
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
        </div>
      </form>
    </ModalComponent>
  );
}

export default RadioModal;
