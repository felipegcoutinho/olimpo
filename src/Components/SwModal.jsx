import React from "react";
import {useContext} from "react";
import {SwContext} from "./Switches";
import style from "../css/App.module.css";
import ModalComponent from "../UI Components/Modal";
import OlimpoTextInput from "../UI Components/OlimpoTextInput";
import OlimpoSelect from "../UI Components/OlimpoSelect";

function SwModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(SwContext);

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      updatedProductId={updatedProduct.id}
      updatedProductModelo={updatedProduct.modelo}
      setor="Switch">
      <form onSubmit={updatedProduct.id ? updateProduct : addProduto}>
        <div className={style.formContainer}>
          <label>Modelo</label>
          <OlimpoTextInput
            required
            type="text"
            placeholder="SG 1002 MR L2+"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />

          <label>Status do suporte</label>
          <OlimpoSelect
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
          </OlimpoSelect>

          <label>Modulação</label>
          <OlimpoSelect
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
          </OlimpoSelect>

          <label>Qtde Portas RJ45</label>
          <OlimpoTextInput
            type="text"
            placeholder="8 Portas"
            value={updatedProduct.qtdePortas}
            onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
          />

          <label>Gerenciável</label>
          <OlimpoSelect
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
          </OlimpoSelect>

          <label>Alimenta via PoE</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.poe}
            onChange={(e) => setUpdatedProduct({...updatedProduct, poe: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="802.3af - 802.3at">802.3af - 802.3at</option>
            <option value="802.3af/B - 802.3at">802.3af/B - 802.3at</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>

          <label>Encaminhamento de Pacotes</label>
          <OlimpoTextInput
            type="text"
            placeholder="15 Mpps"
            value={updatedProduct.pps}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pps: e.target.value})}
          />

          <label>Backplane</label>
          <OlimpoTextInput
            type="text"
            placeholder="20 Gbps"
            value={updatedProduct.backplane}
            onChange={(e) => setUpdatedProduct({...updatedProduct, backplane: e.target.value})}
          />

          <label>Qtde Interface SFP</label>
          <OlimpoTextInput
            type="text"
            placeholder="2 Independentes"
            value={updatedProduct.sfp}
            onChange={(e) => setUpdatedProduct({...updatedProduct, sfp: e.target.value})}
          />

          <label>PoE Extender</label>
          <OlimpoSelect
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
          </OlimpoSelect>

          <label>PoE p/ Porta</label>
          <OlimpoTextInput
            type="text"
            placeholder="30 W"
            value={updatedProduct.poePorta}
            onChange={(e) => setUpdatedProduct({...updatedProduct, poePorta: e.target.value})}
          />

          <label>PoE Total</label>
          <OlimpoTextInput
            type="text"
            placeholder="97 W"
            value={updatedProduct.poeTotal}
            onChange={(e) => setUpdatedProduct({...updatedProduct, poeTotal: e.target.value})}
          />

          <label>Qos</label>
          <OlimpoSelect
            type="text"
            value={updatedProduct.qos}
            onChange={(e) => setUpdatedProduct({...updatedProduct, qos: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </OlimpoSelect>

          <label>Tempo da Garantia</label>
          <OlimpoSelect
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
          </OlimpoSelect>

          <label>URL da Página</label>
          <OlimpoTextInput
            type="text"
            placeholder="https://www.intelbras.com/pt-br/switch-gerenciavel-com-8-portas-giga-2-portas-mini-gbic-sg-1002-mr-l2"
            value={updatedProduct.pagina}
            onChange={(e) => setUpdatedProduct({...updatedProduct, pagina: e.target.value})}
          />

          <label>Ocultar</label>
          <OlimpoSelect
            required
            type="text"
            value={updatedProduct.ocultar}
            onChange={(e) => setUpdatedProduct({...updatedProduct, ocultar: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Não">Não</option>
            <option value="Sim">Sim</option>
          </OlimpoSelect>
        </div>
      </form>
    </ModalComponent>
  );
}

export default SwModal;
