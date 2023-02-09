import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "/src/App.module.css";
import Ap_theads from "../TableHead";
import Modal from "react-modal";
import Ap_Modal from "./ApModal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";

export const APContext = createContext();

export default function Ap() {
  const [modelo, setModelo] = useState("");
  const [garantia, setGarantia] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [raio, setRaio] = useState("");
  const [usuarioMax, setUsuarioMax] = useState("");
  const [qtdePortas, setQtdePortas] = useState("");
  const [status, setStatus] = useState("");
  const [modulação, setModulação] = useState("");
  const [connectiVersion, setConnectiVersion] = useState("");
  const [throughputWireless24, setThroughputWireless24] = useState("");
  const [throughputWireless50, setThroughputWireless50] = useState("");
  const [ganho, setGanho] = useState("");
  const [potencia2G, setPotencia2G] = useState("");
  const [potencia5G, setPotencia5G] = useState("");
  const [tensao, setTensao] = useState("");
  const [poe, setPoe] = useState("");
  const [distancia, setDistancia] = useState("");
  const [consumo, setConsumo] = useState("");
  const [wisefi, setWisefi] = useState("");
  const [handover, setHandover] = useState("");
  const [pagina, setPagina] = useState("");
  const [datasheet, setDatasheet] = useState("");
  const [guia, setGuia] = useState("");
  const [manual, setManual] = useState("");
  const [accessPoint, setAccessPoint] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState("");

  const {admin, setAdmin, HideAP, setHideAP} = useContext(AdminContext);

  const [queryAP, setQueryAP] = React.useState("");
  const handleHideAP = () => setHideAP(!HideAP);
  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
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
    const response = await fetch("http://localhost:3000/aps");
    const data = await response.json();
    setAccessPoint(data);
  };

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/aps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    Swal.fire("Adicionado!");
    setUpdatedProduct({});
    fetchProducts();
    closeModal();
  };

  /* Deletar Produto */
  const deleteProduct = async (id, updateProduct) => {
    await fetch(`http://localhost:3000/aps/${id}`, {
      method: "DELETE",
    });
    Swal.fire({
      title: "Você tem certeza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#18a034",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Access Point deletado!");
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
    await fetch(`http://localhost:3000/aps/${updatedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    Swal.fire("Atualizado!");
    setUpdatedProduct({});
    fetchProducts();
    closeModal();
  };

  return (
    <>
      <div className={style.box_content}>
        <div className={style.header_box_content}>
          <button id="ap" className={HideAP ? style.arrowHide : style.arrowShow} onClick={handleHideAP}>
            <span className={style.title}>Access Point</span>
          </button>

          {admin && (
            <button className={style.btn_add} onClick={openModal}>
              Adicionar Access Point
            </button>
          )}

          <input placeholder="Pesquise por um AP" value={queryAP} onChange={handleSearchChangeAP} className={style.searchBarDevices} />
        </div>

        <APContext.Provider
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
          <Ap_Modal />
        </APContext.Provider>

        {HideAP ? (
          <div style={{overflowX: "auto"}}>
            <table className={style.devicesTable}>
              {/* Table Headers*/}
              <Ap_theads />

              {accessPoint.map((ap, index) => {
                return (
                  <tbody>
                    <tr key={index}>
                      <td className={ap.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>{ap.modelo}</td>
                      <td>
                        <span className={ap.modulação === "Fast" ? style.fast : style.giga}>{ap.modulação}</span>
                      </td>
                      <td>{ap.cobertura}</td>
                      <td>{ap.raio}</td>
                      <td>{ap.usuarioMax}</td>
                      <td>{ap.throughputWireless24}</td>
                      <td className={ap.throughputWireless50 === "x" ? style.NaoPossui : null}>
                        {ap.throughputWireless50 === "x" ? null : ap.throughputWireless50}
                      </td>
                      <td>{ap.qtdePortas}</td>
                      <td className={ap.poe === "x" && style.NaoPossui}>{ap.poe === "x" ? null : ap.poe}</td>
                      <td>{ap.tensao}</td>
                      <td>
                        <span className={style.tooltip}>{ap.connectiVersion}</span>
                      </td>
                      <td className={ap.handover === "x" ? style.NaoPossui : style.Possui}></td>
                      <td className={ap.wisefi === "x" ? style.NaoPossui : style.Possui}></td>
                      <td>{ap.potencia2G}</td>
                      <td className={ap.potencia5G === "x" && style.NaoPossui}>{ap.potencia5G === "x" ? null : ap.potencia5G}</td>
                      <td>
                        <a target="_blank" rel="noopener noreferrer" href={ap.pagina}>
                          <span className={style.paginalink}>Ir para Página</span>
                        </a>
                      </td>
                      {admin && (
                        <td>
                          <button className={style.btn_alterar} onClick={() => openUpdateModal(ap)}></button>
                          <button className={style.btn_excluir} onClick={() => deleteProduct(ap.id)}></button>
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
    </>
  );
}
