import React from "react";
import {useContext} from "react";
import {SfpContext} from "./Sfp";
import Modal from "react-modal";
import style from "../css/App.module.css";

function SfpModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(SfpContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.modal_overlay}>
      {updatedProduct.id ? <h1>Atualizar {updatedProduct.modelo}</h1> : <h1>Adicionar Conversor</h1>}
      <div className={style.formLegenda}>
        <h4>Caso o produto não possua a função, preencha o campo com "-".</h4>
        <h4>Se a informação do produto não houver sido encontrada, preencha o campo com "N/A".</h4>
      </div>
      <form onSubmit={updatedProduct.id ? updateProduct : addProduto}>
        <div className={style.formContainer}>
          <label>Modelo</label>
          <input
            required
            type="text"
            placeholder="KPSD 1120 E"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />

          <label>Status do suporte</label>
          <select
            type="text"
            value={updatedProduct.status}
            onChange={(e) => setUpdatedProduct({...updatedProduct, status: e.target.value})}>
            <option value="Suporte">Suporte</option>
            <option value="Phaseout">Phaseout</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Modulação</label>
          <select
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
          </select>

          <label>Tipo do Conector</label>
          <select
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
          </select>

          <label>Tipo do Módulo</label>
          <select
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
          </select>

          <label>WDM</label>
          <select type="text" value={updatedProduct.wdm} onChange={(e) => setUpdatedProduct({...updatedProduct, wdm: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Distância</label>
          <input
            type="text"
            placeholder="20 Km"
            value={updatedProduct.distancia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, distancia: e.target.value})}
          />

          <label>Tipo da Fibra</label>
          <select type="text" value={updatedProduct.fibra} onChange={(e) => setUpdatedProduct({...updatedProduct, fibra: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Monomodo">Monomodo</option>
            <option value="Multimodo">Multimodo</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Potência de Sinal</label>
          <input
            type="text"
            placeholder="2,5 dBm | 7 dBm"
            value={updatedProduct.potencia}
            onChange={(e) => setUpdatedProduct({...updatedProduct, potencia: e.target.value})}
          />

          <label>Sensibilidade de Sinal</label>
          <input
            type="text"
            placeholder="-8 dBm | -30 dbm"
            value={updatedProduct.sensibilidade}
            onChange={(e) => setUpdatedProduct({...updatedProduct, sensibilidade: e.target.value})}
          />

          <label>Comprimento Sinal RX</label>
          <input
            type="text"
            placeholder="1310 nm"
            value={updatedProduct.CompRX}
            onChange={(e) => setUpdatedProduct({...updatedProduct, CompRX: e.target.value})}
          />

          <label>Comprimento Sinal TX</label>
          <input
            type="text"
            placeholder="1490 nm"
            value={updatedProduct.CompTX}
            onChange={(e) => setUpdatedProduct({...updatedProduct, CompTX: e.target.value})}
          />

          <label>Tempo da Garantia</label>
          <select
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
          </select>

          <label>URL da Página</label>
          <input
            type="text"
            placeholder="https://www.intelbras.com/pt-br/modulo-sfp-epon-kpsd-1120-e"
            value={updatedProduct.pagina}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pagina: e.target.value})}
          />

          <div className={style.btnModalActions}>
            <button type="submit" className={style.btn_addUpd}>
              {updatedProduct.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}
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

export default SfpModal;
