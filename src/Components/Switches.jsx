import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import {Switch_Thead} from "/src/TableHeads";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import Modal from "react-modal";
import SwModal from "./SwModal";
import {Pagination} from "./Pagination";
import TableBar from "./TableBar";
import {getDatabase, get, set, ref, push, remove} from "firebase/database";
import {app, db} from "../database/firebase";
import Content from "../UI Components/Content";

export const SwContext = createContext();

export default function Ap() {
  const [querySWITCH, setQuerySWITCH] = React.useState("");
  const [switches, setSwitches] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {admin, HideSwitch, setHideSwitch, updatedProduct, setUpdatedProduct} = useContext(AdminContext);

  const handleHideSwitch = () => setHideSwitch(!HideSwitch);
  const handleSearchChangeSWITCH = (e) => {
    setQuerySWITCH(e.target.value);
  };

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  /* Buscar Produto */
  const fetchProducts = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "switches");
    const snapshot = await get(dbRef);
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push({
        id: childSnapshot.key,
        ...childData,
      });
    });
    setSwitches(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    const dbRef = ref(db, "switches");
    const newdbRef = push(dbRef);
    await set(newdbRef, updatedProduct);
    Swal.fire({
      title: "Adicionado!",
      confirmButtonColor: "#006e39",
    });
    setUpdatedProduct({});
    fetchProducts();
    closeModal();
  };

  /* Deletar Produto */
  const deleteProduct = async (id) => {
    const db = getDatabase(app);
    const dbRef = ref(db, `switches/${id}`);
    Swal.fire({
      title: "Você tem certeza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006e39",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(dbRef);
        Swal.fire("Equipamento deletado!");
        fetchProducts();
      }
    });
  };

  /* Atualizar  Produto */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };
  const updateProduct = async (e) => {
    e.preventDefault();
    const dbRef = ref(db, `switches/${updatedProduct.id}`);
    await set(dbRef, updatedProduct);
    Swal.fire({
      title: "Atualizado!",
      confirmButtonColor: "#006e39",
    });
    setUpdatedProduct({});
    fetchProducts();
    closeModal();
  };

  return (
    <Content>
      <TableBar
        id="switch"
        Hide={HideSwitch}
        handleHide={handleHideSwitch}
        tableName="Switches"
        openModal={openModal}
        admin={admin}
        handleSearchChange={handleSearchChangeSWITCH}
        query={querySWITCH}
        newButton="Novo Switch"
      />

      <SwContext.Provider
        value={{
          updateProduct,
          updatedProduct,
          setUpdatedProduct,
          modalIsOpen,
          setIsOpen,
          openModal,
          closeModal,
          addProduto,
          admin,
        }}>
        <SwModal />
      </SwContext.Provider>

      {HideSwitch && (
        <Pagination
          dados={switches}
          Tablehead={<Switch_Thead />}
          query={querySWITCH}
          mapFunction={(swicth, index) => (
            <tbody>
              <tr key={index} className={swicth.ocultar === "Sim" && !admin ? style.OcultarTd : ""}>
                <td className={swicth.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>
                  <span className={style.tooltip}>
                    {swicth.ocultar === "Sim" ? `${swicth.modelo} | Oculto` : swicth.modelo}
                    {swicth.modelo === "SG 2404 PoE L2+" && <i className="fa-regular fa-circle-question"></i>}
                    {swicth.modelo === "SG 2404 PoE L2+" && <span className={style.tooltiptext}>SG 2404 PoE L2+ (4760062)</span>}
                  </span>
                </td>
                <td>
                  <span className={swicth.modulação === "Fast" ? style.fast : style.giga}>{swicth.modulação}</span>
                </td>
                <td>{swicth.qtdePortas}</td>
                <td>
                  {swicth.gerenciavel === "-" && <span className={style.NaoPossui}></span>}
                  {swicth.gerenciavel === "Sim" && <span className={style.Possui}></span>}
                </td>
                <td>
                  {swicth.poe === "-" && <span className={style.NaoPossui}></span>}
                  {swicth.poe !== "-" && <span>{swicth.poe}</span>}
                </td>
                <td>{swicth.pps}</td>
                <td>{swicth.backplane}</td>
                <td>
                  {swicth.sfp === "-" && <span className={style.NaoPossui}></span>}
                  {swicth.sfp !== "-" && <span>{swicth.sfp}</span>}
                </td>
                <td>
                  {swicth.poeExtender === "-" && <span className={style.NaoPossui}></span>}
                  {swicth.poeExtender !== "-" && <span className={style.Possui}></span>}
                </td>
                <td>
                  {swicth.poePorta === "-" && <span className={style.NaoPossui}></span>}
                  {swicth.poePorta !== "-" && <span>{swicth.poePorta}</span>}
                </td>
                <td>
                  {swicth.poeTotal === "-" && <span className={style.NaoPossui}></span>}
                  {swicth.poeTotal !== "-" && <span>{swicth.poeTotal}</span>}
                </td>
                <td>
                  {swicth.qos === "-" && <span className={style.NaoPossui}></span>}
                  {swicth.qos === "Sim" && <span className={style.Possui}></span>}
                </td>
                <td>{swicth.garantia}</td>
                <td>
                  <a target="_blank" rel="noopener noreferrer" href={swicth.pagina}>
                    <span className={style.paginalink}>Ir para Página</span>
                  </a>
                </td>
                {admin && (
                  <td>
                    <button className={style.btn_alterar} onClick={() => openUpdateModal(swicth)}></button>
                    <button className={style.btn_excluir} onClick={() => deleteProduct(swicth.id)}></button>
                  </td>
                )}
              </tr>
            </tbody>
          )}
        />
      )}
    </Content>
  );
}
