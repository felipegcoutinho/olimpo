import React from "react";
import {useContext} from "react";
import {RadioContext} from "./Radio";
import Modal from "react-modal";
import style from "/src/App.module.css";

function RadioModal() {
  const {addProduto, inputData, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(RadioContext);

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

          {inputData.map((data) => {
            return <div>{data.title}</div>;
          })}

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
