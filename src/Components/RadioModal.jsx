import React from "react";
import {useContext} from "react";
import {RadioContext} from "./Radio";
import Modal from "react-modal";
import style from "../css/App.module.css";

function RadioModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(RadioContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.modal_overlay}>
      {updatedProduct.id ? <h1>Atualizar {updatedProduct.modelo}</h1> : <h1>Adicionar Radio</h1>}
      <div className={style.formLegenda}>
        <div className={style.formLegenda}>
          <h4>Caso o produto não possua a função, preencha o campo com "-".</h4>
          <h4>Se a informação do produto não houver sido encontrada, preencha o campo com "N/A".</h4>
        </div>
      </div>
      <form onSubmit={updatedProduct.id ? updateProduct : addProduto}>
        <div className={style.formContainer}>
          <label>Modelo</label>
          <input
            required
            type="text"
            placeholder="Wom 5A-23"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />

          <label>Status do suporte</label>
          <select
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
          </select>

          <label>Indicado</label>
          <select
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
          </select>

          <label>Modulação</label>
          <select
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
          </select>

          <label>Ganho de Antena (Em dBi)</label>
          <input
            type="text"
            placeholder="23 dBi"
            value={updatedProduct.ganho}
            onChange={(e) => setUpdatedProduct({...updatedProduct, ganho: e.target.value})}
          />

          <label>Potência (Em dBm - mW)</label>
          <input
            type="text"
            placeholder="25 dBm - 316 mW"
            value={updatedProduct.potencia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia: e.target.value})}
          />

          <label>Encaminhamento de Pacotes</label>
          <input
            type="text"
            placeholder="60.000 Pps"
            value={updatedProduct.pps}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pps: e.target.value})}
          />

          <label>Throughput Efetivo (Em Mbps)</label>
          <input
            type="text"
            placeholder="160 Mbps"
            value={updatedProduct.throughputEfetivo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputEfetivo: e.target.value})}
          />

          <label>Throughput Nominal (Em Mbps)</label>
          <input
            type="text"
            placeholder="300 Mbps"
            value={updatedProduct.throughputNominal}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputNominal: e.target.value})}
          />

          <label>Abertura (Horinzontal | Vertical)</label>
          <input
            type="text"
            placeholder="H-9° | V-9°"
            value={updatedProduct.aberturaHorVer}
            onChange={(e) => setUpdatedProduct({...updatedProduct, aberturaHorVer: e.target.value})}
          />

          <label>Distância do Enlace</label>
          <input
            type="text"
            placeholder="10 Km"
            value={updatedProduct.distancia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, distancia: e.target.value})}
          />

          <label>Wireless</label>
          <select
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
          </select>

          <label>Alimentação</label>
          <input
            type="text"
            placeholder="12V - 24V"
            value={updatedProduct.alimentaçao}
            onChange={(e) => setUpdatedProduct({...updatedProduct, alimentaçao: e.target.value})}
          />

          <label>Garantia</label>
          <select
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
          </select>

          <label>URL da Página</label>
          <input
            type="text"
            placeholder="https://www.intelbras.com/pt-br/cpeptp-com-antena-dish-de-23-dbi-mimo-2x2-wom-5a-23"
            value={updatedProduct.pagina}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pagina: e.target.value})}
          />

          <div className={style.btnModalActions}>
            <button type="submit" className={style.btn_addUpd}>
              {updatedProduct.id ? "Atualizar Radio" : "Adicionar Radio"}
            </button>
            <button className={style.btn_addUpdCancel} onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default RadioModal;
