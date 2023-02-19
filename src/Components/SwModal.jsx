import React from "react";
import {useContext} from "react";
import {SwContext} from "./Switches";
import Modal from "react-modal";
import style from "../css/App.module.css";

function SwModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(SwContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.modal_overlay}>
      {updatedProduct.id ? <h1>Atualizar {updatedProduct.modelo}</h1> : <h1>Adicionar Switch</h1>}
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
            placeholder="SG 1002 MR L2+"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />

          <label>Status do suporte</label>
          <select
            type="text"
            placeholder="Status do suporte"
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

          <label>Modulação</label>
          <select
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
            <option value="Giga (Uplink)">Giga (Uplink)</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Qtde Portas RJ45</label>
          <input
            type="text"
            placeholder="8 Portas"
            value={updatedProduct.qtdePortas}
            onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
          />

          <label>Gerenciável</label>
          <select
            type="text"
            value={updatedProduct.gerenciavel}
            onChange={(e) => setUpdatedProduct({...updatedProduct, gerenciavel: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Alimenta via PoE</label>
          <select type="text" value={updatedProduct.poe} onChange={(e) => setUpdatedProduct({...updatedProduct, poe: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="802.3af - 802.3at">802.3af - 802.3at</option>
            <option value="802.3af/B - 802.3at">802.3af/B - 802.3at</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Encaminhamento de Pacotes</label>
          <input
            type="text"
            placeholder="15 Mpps"
            value={updatedProduct.pps}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pps: e.target.value})}
          />

          <label>Backplane</label>
          <input
            type="text"
            placeholder="20 Gbps"
            value={updatedProduct.backplane}
            onChange={(e) => setUpdatedProduct({...updatedProduct, backplane: e.target.value})}
          />

          <label>Qtde Interface SFP</label>
          <input
            type="text"
            placeholder="2 Independentes"
            value={updatedProduct.sfp}
            onChange={(e) => setUpdatedProduct({...updatedProduct, sfp: e.target.value})}
          />

          <label>PoE Extender</label>
          <select
            type="text"
            value={updatedProduct.poeExtender}
            onChange={(e) => setUpdatedProduct({...updatedProduct, poeExtender: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>PoE p/ Porta</label>
          <input
            type="text"
            placeholder="30 W"
            value={updatedProduct.poePorta}
            onChange={(e) => setUpdatedProduct({...updatedProduct, poePorta: e.target.value})}
          />

          <label>PoE Total</label>
          <input
            type="text"
            placeholder="97 W"
            value={updatedProduct.poeTotal}
            onChange={(e) => setUpdatedProduct({...updatedProduct, poeTotal: e.target.value})}
          />

          <label>Qos</label>
          <select type="text" value={updatedProduct.qos} onChange={(e) => setUpdatedProduct({...updatedProduct, qos: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

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
            placeholder="https://www.intelbras.com/pt-br/switch-gerenciavel-com-8-portas-giga-2-portas-mini-gbic-sg-1002-mr-l2"
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

export default SwModal;
