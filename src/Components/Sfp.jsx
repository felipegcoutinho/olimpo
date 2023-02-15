import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import {Sfp_Thead} from "/src/TableHead";
import Modal from "react-modal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import SfpModal from "./SfpModal";
import TableBar from "./TableBar";
import {Paginacao} from "./Pagination";

export const SfpContext = createContext();

export default function Ap() {
  const [modelo, setmodelo] = useState("");
  const [conector, setconector] = useState("");
  const [modulo, setmodulo] = useState("");
  const [wdm, setwdm] = useState("");
  const [distancia, setdistancia] = useState("");
  const [modulação, setmodulação] = useState("");
  const [fibra, setfibra] = useState("");
  const [potencia, setpotencia] = useState("");
  const [sensibilidade, setsensibilidade] = useState("");
  const [CompTX, setCompTX] = useState("");
  const [CompRX, setCompRX] = useState("");
  const [status, setstatus] = useState("");
  const [garantia, setgarantia] = useState("");
  const [pagina, setpagina] = useState("");
  const [datasheet, setdatasheet] = useState("");
  const [guia, setguia] = useState("");
  const [sfp, setSfp] = useState([]);

  const {admin, HideSFP, setHideSFP, updatedProduct, setUpdatedProduct, urlJsonServer} = useContext(AdminContext);

  const [querySfp, setQuerySfp] = React.useState("");
  const handleSearchChangeSfp = (e) => {
    setQuerySfp(e.target.value);
  };

  const handleHideSFP = () => setHideSFP(!HideSFP);

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

  /* Buscar Produto */
  const fetchProducts = async () => {
    const response = await fetch(`${urlJsonServer}/sfp`);
    const data = await response.json();
    setSfp(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    await fetch(`${urlJsonServer}/sfp`, {
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
    await fetch(`${urlJsonServer}/sfp/${id}`, {
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
        Swal.fire("Módulo SFP deletado!");
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
    await fetch(`${urlJsonServer}/sfp/${updatedProduct.id}`, {
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
      <TableBar
        id="sfp"
        Hide={HideSFP}
        handleHide={handleHideSFP}
        tableName="Módulo SFP"
        openModal={openModal}
        admin={admin}
        handleSearchChange={handleSearchChangeSfp}
        query={querySfp}
        newButton="Novo Módulo SFP"
      />

      <SfpContext.Provider
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
        <SfpModal />
      </SfpContext.Provider>

      {HideSFP && (
        <Paginacao
          dados={sfp}
          Tablehead={<Sfp_Thead />}
          query={querySfp}
          mapFunction={(sfp, index) => (
            <tbody>
              <tr key={index}>
                <td className={sfp.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>{sfp.modelo}</td>
                <td>
                  <span className={sfp.modulação === "Fast" ? style.fast : style.giga}>{sfp.modulação}</span>
                </td>
                <td>{sfp.tipoConector}</td>
                <td>
                  {sfp.modulo === "SFP+" && <span className={style.variado1}>SFP+</span>}
                  {sfp.modulo === "SFP" && <span className={style.variado2}>SFP</span>}
                  {sfp.modulo === "Epon" && <span className={style.variado3}>EPON</span>}
                  {sfp.modulo === "Gpon" && <span className={style.fast}>GPON</span>}
                  {sfp.modulo === "XFP" && <span className={style.giga}>XFP</span>}
                </td>
                <td>
                  {sfp.wdm === "-" && <span className={style.NaoPossui}></span>}
                  {sfp.wdm !== "-" && <span className={style.Possui}></span>}
                </td>
                <td>
                  <span className={style.tooltip}>
                    {sfp.distancia} {sfp.fibra === "Multimodo" && <i className="fa-regular fa-circle-question"></i>}
                    {sfp.fibra === "Multimodo" && <span className={style.tooltiptext}>62,5 / 125 μm até 275 mts</span>}
                  </span>
                </td>

                <td>{sfp.fibra}</td>
                <td>{sfp.potencia}</td>
                <td>{sfp.sensibilidade}</td>
                <td>{sfp.garantia}</td>
                <td>
                  <a target="_blank" rel="noopener noreferrer" href={sfp.pagina}>
                    <span className={style.paginalink}>Ir para Página</span>
                  </a>
                </td>
                {admin && (
                  <td>
                    <button className={style.btn_alterar} onClick={() => openUpdateModal(sfp)}></button>
                    <button className={style.btn_excluir} onClick={() => deleteProduct(sfp.id)}></button>
                  </td>
                )}
              </tr>
            </tbody>
          )}
        />
      )}
    </div>
  );
}
