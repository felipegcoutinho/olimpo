import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "/src/App.module.css";
import {CONVERSOR} from "/src/TableHead";
import Modal from "react-modal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import ConversorModal from "./ConversorModal";

export const ConversorContext = createContext();

export default function Ap() {
  const [modelo, setmodelo] = useState("");
  const [conector, setconector] = useState("");
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
  const [manual, setmanual] = useState("");

  const [conversor, setConversor] = useState([]);

  const {admin, HideConversor, setHideConversor, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const handleHideConversor = () => setHideConversor(!HideConversor);

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
    const response = await fetch("http://localhost:3000/conversores");
    const data = await response.json();
    setConversor(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/conversores", {
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
    await fetch(`http://localhost:3000/conversores/${id}`, {
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
        Swal.fire("Conversor deletado!");
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
    await fetch(`http://localhost:3000/conversores/${updatedProduct.id}`, {
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
        <button id="conversor" className={HideConversor ? style.arrowHide : style.arrowShow} onClick={handleHideConversor}>
          <span className={style.title}>Conversor de Mídia</span>
        </button>

        {admin && (
          <button className={style.btn_add} onClick={openModal}>
            Novo Conversor de Mídia
          </button>
        )}
      </div>

      <ConversorContext.Provider
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
        <ConversorModal />
      </ConversorContext.Provider>

      {HideConversor && (
        <div style={{overflowX: "auto"}}>
          <table className={style.devicesTable}>
            <CONVERSOR />
            {conversor.map((conversor, index) => {
              return (
                <tbody>
                  <tr key={index}>
                    <td className={conversor.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>{conversor.modelo}</td>
                    <td>
                      <span className={conversor.modulação === "Fast" ? style.fast : style.giga}>{conversor.modulação}</span>
                    </td>
                    <td>{conversor.conector}</td>
                    <td>
                      {conversor.wdm === "-" && <span className={style.NaoPossui}></span>}
                      {conversor.wdm !== "-" && <span className={style.Possui}></span>}
                    </td>
                    <td>{conversor.distancia}</td>

                    <td>{conversor.fibra}</td>
                    <td>{conversor.potencia}</td>
                    <td>{conversor.sensibilidade}</td>
                    <td>{conversor.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={conversor.pagina}>
                        <span className={style.paginalink}>Ir para Página</span>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className={style.btn_alterar} onClick={() => openUpdateModal(conversor)}></button>
                        <button className={style.btn_excluir} onClick={() => deleteProduct(conversor.id)}></button>
                      </td>
                    )}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}
