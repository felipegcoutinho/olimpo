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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      padding: "30px",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  /********************/
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
      body: JSON.stringify({modelo, modulação, cobertura}),
    });
    setModelo("");
    setModulação("");
    setCobertura("");
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
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <h1>{updatedProduct.id ? "Atualizar Produto" : "Adicionar Produto"}</h1>
          <button onClick={closeModal}>Fechar</button>
          <br></br>
          <form onSubmit={updatedProduct.id ? updateProduct : addProduct}>
            <input
              type="text"
              placeholder="modelo"
              value={updatedProduct.modelo || ""}
              onChange={(e) => setUpdatedProduct({...updatedProduct, modelo: e.target.value}) || setModelo(e.target.value)}
            />
            <input
              type="text"
              placeholder="modulação"
              value={updatedProduct.modulação || ""}
              onChange={(e) => setUpdatedProduct({...updatedProduct, modulação: e.target.value}) || setModulação(e.target.value)}
            />
            <input
              type="text"
              placeholder="cobertura"
              value={updatedProduct.cobertura || ""}
              onChange={(e) => setUpdatedProduct({...updatedProduct, cobertura: e.target.value}) || setCobertura(e.target.value)}
            />

            <button type="submit">{updatedProduct.id ? "Atualizar Produto" : "Adicionar Produto"}</button>
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
                      <td>{ap.modelo}</td>
                      <td>{ap.modulação}</td>
                      <td>{ap.cobertura}</td>
                      <td>
                        <button onClick={() => openUpdateModal(ap)}>Editar</button>
                        <button onClick={() => deleteProduct(ap.id)}>Excluir</button>
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
