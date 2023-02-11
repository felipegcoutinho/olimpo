import React from "react";
import {useContext} from "react";
import {RadioContext} from "./Radio";
import Modal from "react-modal";
import style from "/src/App.module.css";

function RadioModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(RadioContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.modal_overlay}>
      {updatedProduct.id ? <h1>Atualizar {updatedProduct.modelo}</h1> : <h1>Adicionar Radio</h1>}
      <h4>Caso o produto não possua a função, preencha o campo com "x".</h4>
      <h4>E caso a informação do produto não for encontrada, preencha o campo com "N/A".</h4>
      <form onSubmit={updatedProduct.id ? updateProduct : addProduto}>
        <div className={style.formContainer}>
          <label>Modelo</label>
          <input
            type="text"
            placeholder="Modelo do produto"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />
          <label>Indicado</label>
          <select
            placeholder="Indicado"
            value={updatedProduct.indicado}
            onChange={(e) => setUpdatedProduct({...updatedProduct, indicado: e.target.value})}>
            <option value="PTP">PTP</option>
            <option value="BASE">BASE</option>
            <option value="BASE/PTP">BASE/PTP</option>
          </select>

          <label>Garantia</label>
          <select
            type="text"
            placeholder="Status do suporte"
            value={updatedProduct.garantia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value})}>
            <option value="1 ano">1 ano</option>
            <option value="2 anos">2 anos</option>
            <option value="3 anos">3 anos</option>
            <option value="4 anos">4 anos</option>
            <option value="5 anos">5 anos</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Ganho</label>
          <input
            type="text"
            placeholder="Ganho"
            value={updatedProduct.ganho}
            onChange={(e) => setUpdatedProduct({...updatedProduct, ganho: e.target.value})}
          />

          <label>Potência</label>
          <input
            type="text"
            placeholder="Potência"
            value={updatedProduct.potencia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia: e.target.value})}
          />

          <label>Modulação</label>
          <select
            type="text"
            placeholder="Modulação"
            value={updatedProduct.modulação}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value})}>
            <option value="Giga">Giga</option>
            <option value="Fast">Fast</option>
          </select>

          <label>PPS</label>
          <input
            type="text"
            placeholder="Pacotes por segundo"
            value={updatedProduct.pps}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pps: e.target.value})}
          />

          <label>Throughput Efetivo</label>
          <input
            type="text"
            placeholder="Throughput Efetivo"
            value={updatedProduct.throughputEfetivo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputEfetivo: e.target.value})}
          />

          <label>Throughput Nominal</label>
          <input
            type="text"
            placeholder="Throughput Nominal"
            value={updatedProduct.throughputNominal}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputNominal: e.target.value})}
          />

          <label>Abertura Horinzontal/Vertical</label>
          <input
            type="text"
            placeholder="Abertura Horinzontal/Vertical"
            value={updatedProduct.aberturaHorVer}
            onChange={(e) => setUpdatedProduct({...updatedProduct, aberturaHorVer: e.target.value})}
          />

          <label>Distância do Enlace</label>
          <input
            type="text"
            placeholder="Distância do Enlace"
            value={updatedProduct.distancia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, distancia: e.target.value})}
          />

          <label>Alimentação</label>
          <input
            type="text"
            placeholder="Alimentação"
            value={updatedProduct.alimentaçao}
            onChange={(e) => setUpdatedProduct({...updatedProduct, alimentaçao: e.target.value})}
          />

          <label>Wireless</label>
          <input
            type="text"
            placeholder="Wireless"
            value={updatedProduct.wireless}
            onChange={(e) => setUpdatedProduct({...updatedProduct, wireless: e.target.value})}
          />

          <label>Status do suporte</label>
          <select
            type="text"
            placeholder="Status do suporte"
            value={updatedProduct.status}
            onChange={(e) => setUpdatedProduct({...updatedProduct, status: e.target.value})}>
            <option value="Suporte">Suporte</option>
            <option value="Phaseout">Phaseout</option>
          </select>

          <label>Link da Página</label>
          <input
            type="text"
            placeholder="Link da Página"
            value={updatedProduct.pagina}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pagina: e.target.value})}
          />

          <label>Link do Datasheet</label>
          <input
            type="text"
            placeholder="Link do Datasheet"
            value={updatedProduct.datasheet}
            onChange={(e) => setUpdatedProduct({...updatedProduct, datasheet: e.target.value})}
          />

          <label>Link do Guia</label>
          <input
            type="text"
            placeholder="Link do Guia"
            value={updatedProduct.guia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, guia: e.target.value})}
          />

          <label>Link do Manual</label>
          <input
            type="text"
            placeholder="Link do Manual"
            value={updatedProduct.manual}
            onChange={(e) => setUpdatedProduct({...updatedProduct, manual: e.target.value})}
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
