import React from "react";
import Modal from "react-modal";
import style from "/src/App.module.css";
import {useContext} from "react";
import {HOContext} from "./Roteadores";

function HoModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(HOContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.modal_overlay}>
      {updatedProduct.id ? <h1>Atualizar {updatedProduct.modelo}</h1> : <h1>Adicionar Access Point</h1>}
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

          <label>Modulação</label>
          <select
            type="text"
            value={updatedProduct.modulação}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value})}>
            <option value="Giga">Giga</option>
            <option value="Fast">Fast</option>
            <option value="Giga WAN | Fast LAN">Giga WAN | Fast LAN</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Datarate Máx. 2G</label>
          <input
            type="text"
            placeholder="Datarate Máx. 2G"
            value={updatedProduct.datarateMax2G}
            onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax2G: e.target.value})}
          />

          <label>Datarate Máx. 5G</label>
          <input
            type="text"
            placeholder="Datarate Máx. 5G"
            value={updatedProduct.datarateMax5G}
            onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax5G: e.target.value})}
          />

          <label>IPv6</label>
          <select type="text" value={updatedProduct.ipv6} onChange={(e) => setUpdatedProduct({...updatedProduct, ipv6: e.target.value})}>
            <option value="Sim">Sim</option>
            <option value="x">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>WPS</label>
          <input
            type="text"
            placeholder="WPS"
            value={updatedProduct.wps}
            onChange={(e) => setUpdatedProduct({...updatedProduct, wps: e.target.value})}
          />

          <label>Qtde de Antenas</label>
          <input
            type="text"
            placeholder="Qtde de Antenas"
            value={updatedProduct.antenas}
            onChange={(e) => setUpdatedProduct({...updatedProduct, antenas: e.target.value})}
          />

          <label>Ganho de Antena (2.4ghz | 5ghz)</label>
          <input
            type="text"
            placeholder="Ganho de Antena"
            value={updatedProduct.ganho}
            onChange={(e) => setUpdatedProduct({...updatedProduct, ganho: e.target.value})}
          />

          <label>Potência Máx.</label>
          <input
            type="text"
            placeholder="Potência Máx."
            value={updatedProduct.potenciaMax}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potenciaMax: e.target.value})}
          />

          <label>Tensão</label>
          <input
            type="text"
            placeholder="Tensão"
            value={updatedProduct.tensao}
            onChange={(e) => setUpdatedProduct({...updatedProduct, tensao: e.target.value})}
          />

          <label>Consumo</label>
          <input
            type="text"
            placeholder="Consumo"
            value={updatedProduct.consumo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, consumo: e.target.value})}
          />

          <label>Modo Repetidor</label>
          <select
            type="text"
            value={updatedProduct.repetidor}
            onChange={(e) => setUpdatedProduct({...updatedProduct, repetidor: e.target.value})}>
            <option value="Sim">Sim</option>
            <option value="x">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Modo Roteador</label>
          <select
            type="text"
            value={updatedProduct.roteador}
            onChange={(e) => setUpdatedProduct({...updatedProduct, roteador: e.target.value})}>
            <option value="Sim">Sim</option>
            <option value="x">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Cliente Wireless</label>
          <select
            type="text"
            value={updatedProduct.cliente}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cliente: e.target.value})}>
            <option value="Sim">Sim</option>
            <option value="x">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Modo AP</label>
          <select type="text" value={updatedProduct.ap} onChange={(e) => setUpdatedProduct({...updatedProduct, ap: e.target.value})}>
            <option value="Sim">Sim</option>
            <option value="x">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Garantia</label>
          <select
            type="text"
            value={updatedProduct.garantia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value})}>
            <option value="1 ano">1 ano</option>
            <option value="2 anos">2 anos</option>
            <option value="3 anos">3 anos</option>
            <option value="4 anos">4 anos</option>
            <option value="5 anos">5 anos</option>
            <option value="N/A">N/A</option>
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

export default HoModal;
