import React from "react";
import style from "/src/App.module.css";
import AP_Heads from "../TableHead";
import {useEffect, useState} from "react";
import Modal from "react-modal";

export default function Ap() {
  const [queryAP, setQueryAP] = React.useState("");
  const [HideAP, setHideAP] = React.useState(true);
  const handleHideAP = () => setHideAP(!HideAP);

  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
  };

  /* Modal Configs */
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      padding: "30px",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      // height: "200px",
    },
  };

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const [linha, setLinha] = useState("");
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
  const addProduct = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/aps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({modelo, modulação, cobertura, garantia, raio}),
    });
    setModelo("");
    setModulação("");
    setCobertura("");
    setGarantia("");
    fetchProducts();
    closeModal();
  };

  /* Deletar Produto */
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3000/aps/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  /* Atualizar  Produto */
  const openUpdateModal = (selectedProduct) => {
    setUpdatedProduct(selectedProduct);
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
    setUpdatedProduct({});
    fetchProducts();
    closeModal();
  };

  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button id="ap" className={HideAP ? style.arrowHide : style.arrowShow} onClick={handleHideAP}>
          <span className={style.title}>Access Point</span>
        </button>
        <button className={style.btn_add} onClick={openModal}>
          Adicionar Access Point
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <h1>{updatedProduct.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}</h1>
          <form onSubmit={updatedProduct.id ? updateProduct : addProduct}>
            <div className={style.formContainer}>
              <input
                type="text"
                placeholder="Modelo do produto"
                value={updatedProduct.modelo || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value}) || setModelo(e.target.value)}
              />

              <input
                type="text"
                placeholder="Modulação"
                value={updatedProduct.modulação || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value}) || setModulação(e.target.value)}
              />

              <input
                type="text"
                placeholder="Área de cobertura"
                value={updatedProduct.cobertura || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value}) || setCobertura(e.target.value)}
              />
              <input
                type="text"
                placeholder="Garantia do produto"
                value={updatedProduct.garantia || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value}) || setGarantia(e.target.value)}
              />
              <input
                type="text"
                placeholder="Raio"
                value={updatedProduct.raio || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value}) || setRaio(e.target.value)}
              />
              <input
                type="text"
                placeholder="Modelo do produto"
                value={updatedProduct.modelo || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value}) || setModelo(e.target.value)}
              />

              <input
                type="text"
                placeholder="Modulação"
                value={updatedProduct.modulação || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value}) || setModulação(e.target.value)}
              />

              <input
                type="text"
                placeholder="Área de cobertura"
                value={updatedProduct.cobertura || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value}) || setCobertura(e.target.value)}
              />
              <input
                type="text"
                placeholder="Garantia do produto"
                value={updatedProduct.garantia || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value}) || setGarantia(e.target.value)}
              />
              <input
                type="text"
                placeholder="Raio"
                value={updatedProduct.raio || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value}) || setRaio(e.target.value)}
              />
              <input
                type="text"
                placeholder="Modelo do produto"
                value={updatedProduct.modelo || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value}) || setModelo(e.target.value)}
              />

              <input
                type="text"
                placeholder="Modulação"
                value={updatedProduct.modulação || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value}) || setModulação(e.target.value)}
              />

              <input
                type="text"
                placeholder="Área de cobertura"
                value={updatedProduct.cobertura || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value}) || setCobertura(e.target.value)}
              />
              <input
                type="text"
                placeholder="Garantia do produto"
                value={updatedProduct.garantia || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, garantia: e.target.value}) || setGarantia(e.target.value)}
              />
              <input
                type="text"
                placeholder="Raio"
                value={updatedProduct.raio || ""}
                onChange={(e) => setUpdatedProduct({...updatedProduct, raio: e.target.value}) || setRaio(e.target.value)}
              />
              <button className={style.btn_addUpd} type="submit">
                {updatedProduct.id ? "Atualizar Equipamento" : "Adicionar Equipamento"}
              </button>
              <button className={style.btn_addUpdCancel} onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        </Modal>
        <label>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Pesquise o Equipamento" value={queryAP} onChange={handleSearchChangeAP} className={style.searchBarDevices} />
        </label>
      </div>

      {HideAP ? (
        <div style={{overflowX: "auto"}}>
          <table className={style.devicesTable}>
            {/* Table Headers*/}
            <AP_Heads />

            {accessPoint
              .filter((ap) => {
                if (ap.modelo.toLowerCase().includes(queryAP.toLowerCase())) {
                  return ap;
                } else if (ap.modulação.toLowerCase().includes(queryAP.toLowerCase())) {
                  return ap;
                }
              })
              .map((ap, index) => {
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
                        <span className={style.tooltip}>
                          {ap.connectiVersion} {ap.connectiVersion !== "N/A" && <i className="fa-regular fa-circle-question"></i>}
                          {ap.connectiVersion !== "N/A" && (
                            <span className={style.tooltiptext}>
                              O AP precisa estar com a versão {ap.connectiVersion} para o connectFi funcionar.
                            </span>
                          )}
                        </span>
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
                      <td>
                        <button className={style.btn_alterar} onClick={() => openUpdateModal(ap)}></button>
                        <button className={style.btn_excluir} onClick={() => deleteProduct(ap.id)}></button>
                      </td>
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
