import React from "react";

function AP_Modal() {
  return (
    <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
      <h1>{updatedProduct.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}</h1>
      <form onSubmit={updatedProduct.id ? updateProduct : addProduct}>
        <div className={style.formContainer}>
          <input
            type="text"
            placeholder="Modelo do produto"
            value={updatedProduct.modelo || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value}) || setModelo(e.target.value)}
          />

          <input
            type="text"
            placeholder="Modulação"
            value={updatedProduct.modulação || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value}) || setModulação(e.target.value)}
          />

          <input
            type="text"
            placeholder="Área de cobertura"
            value={updatedProduct.cobertura || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value}) || setCobertura(e.target.value)}
          />
          <input
            type="text"
            placeholder="Garantia do produto"
            value={updatedProduct.garantia || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value}) || setGarantia(e.target.value)}
          />
          <input
            type="text"
            placeholder="Raio"
            value={updatedProduct.raio || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value}) || setRaio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Modelo do produto"
            value={updatedProduct.modelo || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value}) || setModelo(e.target.value)}
          />

          <input
            type="text"
            placeholder="Modulação"
            value={updatedProduct.modulação || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value}) || setModulação(e.target.value)}
          />

          <input
            type="text"
            placeholder="Área de cobertura"
            value={updatedProduct.cobertura || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value}) || setCobertura(e.target.value)}
          />
          <input
            type="text"
            placeholder="Garantia do produto"
            value={updatedProduct.garantia || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value}) || setGarantia(e.target.value)}
          />
          <input
            type="text"
            placeholder="Raio"
            value={updatedProduct.raio || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value}) || setRaio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Modelo do produto"
            value={updatedProduct.modelo || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value}) || setModelo(e.target.value)}
          />

          <input
            type="text"
            placeholder="Modulação"
            value={updatedProduct.modulação || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value}) || setModulação(e.target.value)}
          />

          <input
            type="text"
            placeholder="Área de cobertura"
            value={updatedProduct.cobertura || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value}) || setCobertura(e.target.value)}
          />
          <input
            type="text"
            placeholder="Garantia do produto"
            value={updatedProduct.garantia || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value}) || setGarantia(e.target.value)}
          />
          <input
            type="text"
            placeholder="Raio"
            value={updatedProduct.raio || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value}) || setRaio(e.target.value)}
          />
          <button className={style.btn_addUpd} type="submit">
            {updatedProduct.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}
          </button>
          <button className={style.btn_addUpdCancel} onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AP_Modal;
