import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "/src/App.module.css";
import {SWITCH} from "/src/TableHead";
import Modal from "react-modal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import SwModal from "./SwModal";

export const SwContext = createContext();

export default function Ap() {
  const [modelo, Setmodelo] = useState("");
  const [qtdePortas, SetqtdePortas] = useState("");
  const [modulação, Setmodulação] = useState("");
  const [gerenciavel, Setgerenciavel] = useState("");
  const [sfp, Setsfp] = useState("");
  const [pps, SetPps] = useState("");
  const [backplane, Setbackplane] = useState("");
  const [pdAlive, SetpdAlive] = useState("");
  const [qos, SetqosSet] = useState("");
  const [poe, Setpoe] = useState("");
  const [poeExtender, SetpoeExtender] = useState("");
  const [poePorta, SetpoePorta] = useState("");
  const [poeTotal, SetpoeTotal] = useState("");
  const [status, Setstatus] = useState("");
  const [garantia, Setgarantia] = useState("");
  const [pagina, Setpagina] = useState("");
  const [datasheet, Setdatasheet] = useState("");
  const [guia, Setguia] = useState("");
  const [manual, Setmanual] = useState("");

  const [switches, setSwitches] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState("");

  const {admin, HideSwitch, setHideSwitch} = useContext(AdminContext);
  const [querySWITCH, setQuerySWITCH] = React.useState("");
  const handleHideSwitch = () => setHideSwitch(!HideSwitch);

  const handleSearchChangeSWITCH = (e) => {
    setQuerySWITCH(e.target.value);
  };

  /* Configs Modal */
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  /* Buscar Produto */
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/switches");
    const data = await response.json();
    setSwitches(data);
  };

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/switches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
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
    await fetch(`http://localhost:3000/switches/${id}`, {
      method: "DELETE",
    });
    Swal.fire({
      title: "Você tem certeza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006e39",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Switch deletado!");
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
    await fetch(`http://localhost:3000/switches/${updatedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    Swal.fire({
      title: "Atualizado!",
      confirmButtonColor: "#006e39",
    });

    setUpdatedProduct({});
    fetchProducts();
    closeModal();
  };

  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button id="switch" className={HideSwitch ? style.arrowHide : style.arrowShow} onClick={handleHideSwitch}>
          <span className={style.title}>Switches</span>
        </button>

        {admin && (
          <button className={style.btn_add} onClick={openModal}>
            Adicionar Switch
          </button>
        )}

        <input className={style.searchBarDevices} placeholder="Pesquise o Switch" value={querySWITCH} onChange={handleSearchChangeSWITCH} />
      </div>

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

      {HideSwitch ? (
        <div style={{overflowX: "auto"}}>
          <table className={style.devicesTable}>
            <SWITCH />
            {switches
              .filter((swicth) => {
                if (swicth.modelo.toLowerCase().includes(querySWITCH.toLowerCase())) {
                  return swicth;
                } else if (swicth.gerenciavel.toLowerCase().includes(querySWITCH.toLowerCase())) {
                  return swicth;
                }
              })
              .map((swicth) => {
                return (
                  <tbody>
                    <tr id={style.swicth_id}>
                      <td className={swicth.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>
                        <span className={style.tooltip}>
                          {swicth.modelo}
                          {swicth.modelo === "SG 2404 PoE L2+" && <i className="fa-regular fa-circle-question"></i>}
                          {swicth.modelo === "SG 2404 PoE L2+" && <span className={style.tooltiptext}>SG 2404 PoE L2+ (4760062)</span>}
                        </span>
                      </td>
                      <td>
                        <span className={swicth.modulação === "Fast" ? style.fast : style.giga}>{swicth.modulação}</span>
                      </td>
                      <td>{swicth.qtdePortas}</td>
                      <td>
                        {swicth.gerenciavel === "x" && <span className={style.NaoPossui}></span>}
                        {swicth.gerenciavel === "Sim" && <span className={style.Possui}></span>}
                      </td>
                      <td>
                        {swicth.poe === "x" && <span className={style.NaoPossui}></span>}
                        {swicth.poe !== "x" && <span>{swicth.poe}</span>}
                      </td>
                      <td>{swicth.pps}</td>
                      <td>{swicth.backplane}</td>
                      <td>
                        {swicth.sfp === "x" && <span className={style.NaoPossui}></span>}
                        {swicth.sfp !== "x" && <span>{swicth.sfp}</span>}
                      </td>
                      <td>
                        {swicth.poeExtender === "x" && <span className={style.NaoPossui}></span>}
                        {swicth.poeExtender !== "x" && <span className={style.Possui}></span>}
                      </td>
                      <td>
                        {swicth.poePorta === "x" && <span className={style.NaoPossui}></span>}
                        {swicth.poePorta !== "x" && <span>{swicth.poePorta}</span>}
                      </td>
                      <td>
                        {swicth.poeTotal === "x" && <span className={style.NaoPossui}></span>}
                        {swicth.poeTotal !== "x" && <span>{swicth.poeTotal}</span>}
                      </td>
                      <td>
                        {swicth.qos === "x" && <span className={style.NaoPossui}></span>}
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
                );
              })}
          </table>
        </div>
      ) : null}
    </div>
  );
}
