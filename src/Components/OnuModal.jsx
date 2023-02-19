import React from "react";
import {useContext} from "react";
import {OnuContext} from "./Onu";
import Modal from "react-modal";
import style from "../css/App.module.css";

function OnuModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(OnuContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.modal_overlay}>
      {updatedProduct.id ? <h1>Atualizar {updatedProduct.modelo}</h1> : <h1>Adicionar Onu/Ont</h1>}
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
            placeholder="WiFiber 121 AC"
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
            <option value="Giga/Fast">Giga/Fast</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Qtde FXS</label>
          <select
            required
            type="text"
            value={updatedProduct.fxs}
            onChange={(e) => setUpdatedProduct({...updatedProduct, fxs: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="1 porta">1 porta</option>
            <option value="2 portas">2 portas</option>
            <option value="3 portas">3 portas</option>
            <option value="-">Não Possui</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Qtde RJ45</label>
          <select
            type="text"
            value={updatedProduct.qtdeportas}
            onChange={(e) => setUpdatedProduct({...updatedProduct, qtdeportas: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="1 porta">1 porta</option>
            <option value="2 portas">2 portas</option>
            <option value="3 portas">3 portas</option>
            <option value="4 portas">4 portas</option>
            <option value="5 portas">5 portas</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Tecnologia PON</label>
          <select
            required
            type="text"
            value={updatedProduct.tipo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, tipo: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="EPON/GPON">EPON/GPON</option>
            <option value="GPON">GPON</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Sensibilidade de sinal</label>
          <input
            type="text"
            placeholder="-7 dBm | -27 dBm"
            value={updatedProduct.sensibilidade}
            onChange={(e) => setUpdatedProduct({...updatedProduct, sensibilidade: e.target.value})}
          />

          <label>Área de cobertura</label>
          <input
            type="text"
            placeholder="120 m²"
            value={updatedProduct.cobertura}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
          />

          <label>Usuários simultâneos</label>
          <input
            type="text"
            placeholder="64 usuários"
            value={updatedProduct.clientesSimultaneos}
            onChange={(e) => setUpdatedProduct({...updatedProduct, clientesSimultaneos: e.target.value})}
          />

          <label>Datarate Máx. 2G</label>
          <input
            type="text"
            placeholder="300 Mbps"
            value={updatedProduct.transmissao2ghz}
            onChange={(e) => setUpdatedProduct({...updatedProduct, transmissao2ghz: e.target.value})}
          />

          <label>Datarate Máx. 5G</label>
          <input
            type="text"
            placeholder="867 Mbps"
            value={updatedProduct.transmissao5ghz}
            onChange={(e) => setUpdatedProduct({...updatedProduct, transmissao5ghz: e.target.value})}
          />

          <label>Qtde SSIDs</label>
          <input
            type="text"
            placeholder="8 SSIDs"
            value={updatedProduct.ssid}
            onChange={(e) => setUpdatedProduct({...updatedProduct, ssid: e.target.value})}
          />

          <label>Compatível com TR069</label>
          <select type="text" value={updatedProduct.tr069} onChange={(e) => setUpdatedProduct({...updatedProduct, tr069: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Compatível com Customize</label>
          <select
            type="text"
            value={updatedProduct.customize}
            onChange={(e) => setUpdatedProduct({...updatedProduct, customize: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Compatível com Remotize</label>
          <select
            type="text"
            value={updatedProduct.remotize}
            onChange={(e) => setUpdatedProduct({...updatedProduct, remotize: e.target.value})}>
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
            placeholder="https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-fxs-1p-wi-fi-ac-wifiber-121-ac"
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

export default OnuModal;
