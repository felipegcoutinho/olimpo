import React from "react";
import {useContext} from "react";
import {RadioContext} from "./Radio";
import Modal from "react-modal";
import style from "/src/App.module.css";

function RadioModal() {
  const {addProduto, RadiosOutdoor, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(RadioContext);

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
          <label>Indicado ***</label>
          <input
            type="text"
            placeholder="Indicado"
            value={updatedProduct.indicado}
            onChange={(e) => setUpdatedProduct({...updatedProduct, indicado: e.target.value})}
          />
          <label>Garantia</label>
          <input
            type="text"
            placeholder="Tempo de garantia"
            value={updatedProduct.garantia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value})}
          />
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
            placeholder="Ganho"
            value={updatedProduct.potencia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia: e.target.value})}
          />

          <label>Modulação</label>
          <input
            type="text"
            placeholder="Modulação"
            value={updatedProduct.modulação}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value})}
          />

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

          <label>Distância</label>
          <input
            type="text"
            placeholder="Distância"
            value={updatedProduct.distancia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, distancia: e.target.value})}
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
