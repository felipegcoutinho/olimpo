import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "/src/App.module.css";
import {RADIO} from "/src/TableHead";
import Modal from "react-modal";
import RadioModal from "./RadioModal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";

export const RadioContext = createContext();

export default function Radios() {
  const [modelo, setModelo] = useState("");
  const [indicado, setIndicado] = useState("");
  const [garantia, setGarantia] = useState("");
  const [ganho, setGanho] = useState("");
  const [potencia, setPotencia] = useState("");
  const [modulação, setModulação] = useState("");
  const [pps, setPps] = useState("");
  const [throughputEfetivo, setThroughputEfetivo] = useState("");
  const [throughputNominal, setThroughputNominal] = useState("");
  const [aberturaHorVer, setAberturaHorVer] = useState("");
  const [distancia, setDistancia] = useState("");
  const [comprimentoCabo, setComprimentoCabo] = useState("");
  const [alimentaçao, setAlimentaçao] = useState("");
  const [wireless, setWireless] = useState("");
  const [status, setStatus] = useState("");
  const [pagina, setPagina] = useState("");
  const [datasheet, setDatasheet] = useState("");
  const [guia, setGuia] = useState("");
  const [manual, setManual] = useState("");

  const [RadiosOutdoor, setRadiosOutdoor] = useState([]);

  const {admin, HideRADIO, setHideRADIO, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [queryRADIO, setQueryRADIO] = useState("");
  const handleHideRADIO = () => setHideRADIO(!HideRADIO);
  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
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

  /* Buscar Produto */
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/radios");
    const data = await response.json();
    setRadiosOutdoor(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/radios", {
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
    await fetch(`http://localhost:3000/radios/${id}`, {
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
        Swal.fire("Rádio deletado!");
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
    await fetch(`http://localhost:3000/radios/${updatedProduct.id}`, {
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
        <button id="radio" className={HideRADIO ? style.arrowHide : style.arrowShow} onClick={handleHideRADIO}>
          <span className={style.title}>Radios Outdoor</span>
        </button>

        {admin && (
          <button className={style.btn_add} onClick={openModal}>
            Novo Radio Outdoor
          </button>
        )}

        <input
          placeholder="Pesquise por um equipamento"
          value={queryRADIO}
          onChange={handleSearchChangeRADIO}
          className={style.searchBarDevices}
        />
      </div>

      <RadioContext.Provider
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
        <RadioModal />
      </RadioContext.Provider>

      {HideRADIO && (
        <div style={{overflowX: "auto"}}>
          <table className={style.devicesTable}>
            {/* Table Headers*/}
            <RADIO />

            {RadiosOutdoor.filter((radio) => {
              if (radio.modelo.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else if (radio.modulação.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              }
            }).map((radio, index) => {
              return (
                <tbody>
                  <tr key={index}>
                    <td className={radio.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>{radio.modelo}</td>
                    <td>{radio.indicado}</td>
                    <td>
                      <span className={radio.modulação === "Fast" ? style.fast : style.giga}>{radio.modulação}</span>
                    </td>
                    <td>
                      <span className={style.tooltip}>
                        {radio.ganho} {radio.ganho === "SEM ANTENA" && <i className="fa-regular fa-circle-question"></i>}
                        {radio.ganho === "SEM ANTENA" && (
                          <span className={style.tooltiptext}>
                            Antena adquirida separadamente, indicar parceria <a href="http://www.algcom.com.br">ALGCOM</a>
                          </span>
                        )}
                      </span>
                    </td>
                    <td>{radio.potencia}</td>
                    <td>{radio.pps}</td>
                    <td>{radio.throughputEfetivo}</td>
                    <td>{radio.throughputNominal}</td>
                    <td className={radio.aberturaHorVer === "-" && style.NaoPossui}>
                      {radio.aberturaHorVer !== "-" && radio.aberturaHorVer}
                    </td>
                    <td className={radio.distancia === "-" && style.NaoPossui}>{radio.distancia !== "-" && radio.distancia}</td>
                    <td>{radio.wireless}</td>
                    <td>{radio.alimentaçao}</td>
                    <td>{radio.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={radio.pagina}>
                        <span className={style.paginalink}>Ir para Página</span>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className={style.btn_alterar} onClick={() => openUpdateModal(radio)}></button>
                        <button className={style.btn_excluir} onClick={() => deleteProduct(radio.id)}></button>
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
