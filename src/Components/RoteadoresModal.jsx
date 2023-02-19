import React from "react";
import Modal from "react-modal";
import style from "../css/App.module.css";
import {useContext} from "react";
import {HOContext} from "./Roteadores";

function RoteadoresModal() {
  const {addProduto, updateProduct, updatedProduct, setUpdatedProduct, modalIsOpen, closeModal} = useContext(HOContext);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modal} overlayClassName={style.modal_overlay}>
      {updatedProduct.id ? <h1>Atualizar {updatedProduct.modelo}</h1> : <h1>Adicionar Equipamento HO</h1>}
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
            placeholder="TWIBI GIGA+"
            value={updatedProduct.modelo}
            onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value})}
          />

          <label>Status do suporte</label>
          <select
            required
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
            <option value="Giga WAN | Fast LAN">Giga WAN | Fast LAN</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Área de cobertura (Em m²)</label>
          <input
            type="text"
            placeholder="180 m²"
            value={updatedProduct.cobertura}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value})}
          />

          <label>Raio (Em m)</label>
          <input
            type="text"
            placeholder="7,56 m"
            value={updatedProduct.raio}
            onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value})}
          />

          <label>Usuários Máximos</label>
          <input
            type="text"
            placeholder="60 usuários"
            value={updatedProduct.usuarioMax}
            onChange={(e) => setUpdatedProduct({...updatedProduct, usuarioMax: e.target.value})}
          />

          <label>Plano recomendado</label>
          <input
            type="text"
            placeholder="Até 400Mbps"
            value={updatedProduct.planoRecomendado}
            onChange={(e) => setUpdatedProduct({...updatedProduct, planoRecomendado: e.target.value})}
          />

          <label>Qtde Portas</label>
          <input
            type="text"
            placeholder="1(LAN) + 1(W / L)"
            value={updatedProduct.qtdePortas}
            onChange={(e) => setUpdatedProduct({...updatedProduct, qtdePortas: e.target.value})}
          />

          <label>Datarate Máx. 2G</label>
          <input
            type="text"
            placeholder="300 Mbps"
            value={updatedProduct.datarateMax2G}
            onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax2G: e.target.value})}
          />

          <label>Datarate Máx. 5G</label>
          <input
            type="text"
            placeholder="867 Mbps"
            value={updatedProduct.datarateMax5G}
            onChange={(e) => setUpdatedProduct({...updatedProduct, datarateMax5G: e.target.value})}
          />

          <label>IPv6</label>
          <select type="text" value={updatedProduct.ipv6} onChange={(e) => setUpdatedProduct({...updatedProduct, ipv6: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Tensão</label>
          <input
            type="text"
            placeholder="12V (1A)"
            value={updatedProduct.tensao}
            onChange={(e) => setUpdatedProduct({...updatedProduct, tensao: e.target.value})}
          />

          <label>Modo Repetidor</label>
          <select
            type="text"
            value={updatedProduct.repetidor}
            onChange={(e) => setUpdatedProduct({...updatedProduct, repetidor: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Modo Roteador</label>
          <select
            type="text"
            value={updatedProduct.roteador}
            onChange={(e) => setUpdatedProduct({...updatedProduct, roteador: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Cliente Wireless</label>
          <select
            type="text"
            value={updatedProduct.cliente}
            onChange={(e) => setUpdatedProduct({...updatedProduct, cliente: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Modo AP</label>
          <select type="text" value={updatedProduct.ap} onChange={(e) => setUpdatedProduct({...updatedProduct, ap: e.target.value})}>
            {!updatedProduct.id && (
              <option selected disabled>
                Escolha
              </option>
            )}
            <option value="Sim">Sim</option>
            <option value="-">Não</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Garantia</label>
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
            placeholder="https://www.intelbras.com/pt-br/roteador-wi-fi-5-mesh-ac-1200-twibi-giga"
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

export default RoteadoresModal;
