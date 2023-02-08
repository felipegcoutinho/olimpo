import React from "react";
import {useContext} from "react";
import {APContext} from "./Ap";
import Modal from "react-modal";
import style from "/src/App.module.css";

function AP_Modal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, customStyles, modalIsOpen, closeModal} = useContext(APContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
      {updatedProduct.id ? <h1>Atualizar Access Point</h1> : <h1>Adicionar Access Point</h1>}
      <form onSubmit={updatedProduct.id ? updateProduct : addProduto}>
        <div className={style.formContainer}>
          <label>Modelo</label>
          <input
            type="text"
            placeholder="Modelo do produto"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />

          <label>Tempo da Garantia</label>
          <input
            type="text"
            placeholder="Garantia do produto"
            value={updatedProduct.garantia || ""}
            onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value})}
          />

          <label>Área de cobertura</label>
          <input
            type="text"
            placeholder="Área de cobertura"
            value={updatedProduct.cobertura}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
          />

          <label>Raio</label>
          <input
            type="text"
            placeholder="Raio"
            value={updatedProduct.raio}
            onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value})}
          />

          <label>Usuários simultâneos</label>
          <input
            type="text"
            placeholder="Usuários simultâneos"
            value={updatedProduct.usuarioMax}
            onChange={(e) => setUpdatedProduct({...updatedProduct, usuarioMax: e.target.value})}
          />

          <label>Qtde Portas</label>
          <input
            type="text"
            placeholder="Qtde Portas"
            value={updatedProduct.qtdePortas}
            onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
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

          <label>Modulação</label>
          <select
            type="text"
            placeholder="Modulação"
            value={updatedProduct.modulação}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value})}>
            <option value="Giga">Giga</option>
            <option value="Fast">Fast</option>
          </select>

          <label>Versão do connectiFi</label>
          <input
            type="text"
            placeholder="Versão do connectiFi"
            value={updatedProduct.connectiVersion}
            onChange={(e) => setUpdatedProduct({...updatedProduct, connectiVersion: e.target.value})}
          />

          <label>Datarate Máx. 2G</label>
          <input
            type="text"
            placeholder="Datarate Máx. 2G"
            value={updatedProduct.throughputWireless24}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputWireless24: e.target.value})}
          />

          <label>Datarate Máx. 5G</label>
          <input
            type="text"
            placeholder="Datarate Máx. 5G"
            value={updatedProduct.throughputWireless50}
            onChange={(e) => setUpdatedProduct({...updatedProduct, throughputWireless50: e.target.value})}
          />

          <label>Ganho de Antena</label>
          <input
            type="text"
            placeholder="Ganho de Antena"
            value={updatedProduct.ganho}
            onChange={(e) => setUpdatedProduct({...updatedProduct, ganho: e.target.value})}
          />

          <label>Potência de TX 2G</label>
          <input
            type="text"
            placeholder="Potência de TX 2G"
            value={updatedProduct.potencia2G}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia2G: e.target.value})}
          />

          <label>Potência de TX 5G </label>
          <input
            type="text"
            placeholder="Potência de TX 5G"
            value={updatedProduct.potencia5G}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia5G: e.target.value})}
          />

          <label>Tensão</label>
          <input
            type="text"
            placeholder="Tensão"
            value={updatedProduct.tensao}
            onChange={(e) => setUpdatedProduct({...updatedProduct, tensao: e.target.value})}
          />

          <label>PoE</label>
          <input
            type="text"
            placeholder="PoE"
            value={updatedProduct.poe}
            onChange={(e) => setUpdatedProduct({...updatedProduct, poe: e.target.value})}
          />

          <label>Comprimento do Cabo</label>
          <input
            type="text"
            placeholder="Comprimento do Cabo"
            value={updatedProduct.distancia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, distancia: e.target.value})}
          />

          <label>Possui Handover</label>
          <select
            type="text"
            placeholder="Possui Handover"
            value={updatedProduct.handover}
            onChange={(e) => setUpdatedProduct({...updatedProduct, handover: e.target.value})}>
            <option value="Sim">Sim</option>
            <option value="x">Não</option>
          </select>

          <label>Possui WiseFi</label>
          <select
            type="text"
            placeholder="Possui WiseFi"
            value={updatedProduct.wisefi}
            onChange={(e) => setUpdatedProduct({...updatedProduct, wisefi: e.target.value})}>
            <option value="Sim">Sim</option>
            <option value="x">Não</option>
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
              {updatedProduct.id ? "Atualizar Access Point" : "Adicionar Access Point"}
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

export default AP_Modal;
