import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "/src/App.module.css";
import {ONU} from "/src/TableHead";
import {AdminContext} from "../App";
import Modal from "react-modal";
import Swal from "sweetalert2";
import OnuModal from "./OnuModal";

export const OnuContext = createContext();

export default function Onu() {
  const [modelo, setmodelo] = useState("");
  const [qtdeportas, setqtdeportas] = useState("");
  const [modulação, setmodulação] = useState("");
  const [fxs, setfxs] = useState("");
  const [tecnologiaPON, settecnologiaPON] = useState("");
  const [ssid, setssid] = useState("");
  const [tr069, settr069] = useState("");
  const [customize, setcustomize] = useState("");
  const [remotize, setremotize] = useState("");
  const [transmissao2ghz, settransmissao2ghz] = useState("");
  const [transmissao5ghz, settransmissao5ghz] = useState("");
  const [transmissaoUPDown, settransmissaoUPDown] = useState("");
  const [cobertura, setcobertura] = useState("");
  const [antenas, setantenas] = useState("");
  const [clientesSimultaneos, setclientesSimultaneos] = useState("");
  const [sensibilidade, setsensibilidade] = useState("");
  const [status, setstatus] = useState("");
  const [garantia, setgarantia] = useState("");
  const [pagina, setpagina] = useState("");
  const [datasheet, setdatasheet] = useState("");
  const [guia, setguia] = useState("");

  const [onu, setOnu] = React.useState([]);

  const {admin, HideONU, setHideONU, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const handleHideONU = () => setHideONU(!HideONU);

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
    const response = await fetch("http://localhost:3000/onu");
    const data = await response.json();
    setOnu(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/onu", {
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
    await fetch(`http://localhost:3000/onu/${id}`, {
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
        Swal.fire("Onu/Ont deletada!");
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
    await fetch(`http://localhost:3000/onu/${updatedProduct.id}`, {
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
        <button id="onu" className={HideONU ? style.arrowHide : style.arrowShow} onClick={handleHideONU}>
          <span className={style.title}> ONUs/ONTs</span>
        </button>

        {admin && (
          <button className={style.btn_add} onClick={openModal}>
            Adicionar Onu/Ont
          </button>
        )}
      </div>

      <OnuContext.Provider
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
        <OnuModal />
      </OnuContext.Provider>

      {HideONU && (
        <div style={{overflowX: "auto"}}>
          <table className={style.devicesTable}>
            <ONU />
            {onu.map((onu, index) => {
              return (
                <tbody>
                  <tr key={index}>
                    <td className={onu.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>{onu.modelo}</td>
                    <td>
                      <span className={onu.modulação === "Fast" ? style.fast : style.giga}>{onu.modulação}</span>
                    </td>
                    <td>
                      {onu.fxs === "x" && <span className={style.NaoPossui}></span>}
                      {onu.fxs !== "x" && <span>{onu.fxs}</span>}
                    </td>
                    <td>{onu.qtdeportas}</td>
                    <td>
                      {onu.tipo === "EPON/GPON" && <span className={style.variado1}>{onu.tipo}</span>}
                      {onu.tipo === "GPON" && <span className={style.variado2}>{onu.tipo}</span>}
                    </td>
                    <td>{onu.sensibilidade}</td>
                    <td>
                      {onu.cobertura === "x" && <span className={style.NaoPossui}></span>}
                      {onu.cobertura !== "x" && <span>{onu.cobertura}</span>}
                    </td>
                    <td>
                      {onu.clientesSimultaneos === "x" && <span className={style.NaoPossui}></span>}
                      {onu.clientesSimultaneos !== "x" && <span>{onu.clientesSimultaneos}</span>}
                    </td>
                    <td>
                      {onu.transmissao2ghz === "x" && <span className={style.NaoPossui}></span>}
                      {onu.transmissao2ghz !== "x" && <span>{onu.transmissao2ghz}</span>}
                    </td>
                    <td>
                      {onu.transmissao5ghz === "x" && <span className={style.NaoPossui}></span>}
                      {onu.transmissao5ghz !== "x" && <span>{onu.transmissao5ghz}</span>}
                    </td>
                    <td>
                      {onu.ssid === "x" && <span className={style.NaoPossui}></span>}
                      {onu.ssid !== "x" && <span>{onu.ssid} SSIDs</span>}
                    </td>
                    <td>
                      {onu.tr069 === "x" && <span className={style.NaoPossui}></span>}
                      {onu.tr069 === "Sim" && <span className={style.Possui}></span>}
                    </td>
                    <td>
                      {onu.customize === "x" && <span className={style.NaoPossui}></span>}
                      {onu.customize === "Sim" && <span className={style.Possui}></span>}
                    </td>
                    <td>
                      {onu.remotize === "x" && <span className={style.NaoPossui}></span>}
                      {onu.remotize === "Sim" && <span className={style.Possui}></span>}
                    </td>
                    <td>{onu.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={onu.pagina}>
                        <span className={style.paginalink}>Ir para Página</span>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className={style.btn_alterar} onClick={() => openUpdateModal(onu)}></button>
                        <button className={style.btn_excluir} onClick={() => deleteProduct(onu.id)}></button>
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
