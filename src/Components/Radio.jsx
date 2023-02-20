import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import {Radio_Thead} from "/src/TableHead";
import RadioModal from "./RadioModal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import Modal from "react-modal";
import {Paginacao} from "./Pagination";
import TableBar from "./TableBar";
import {getDatabase, get, set, ref, push, remove} from "firebase/database";
import {app, db} from "../database/firebase";

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
  const [alimentaçao, setAlimentaçao] = useState("");
  const [wireless, setWireless] = useState("");
  const [status, setStatus] = useState("");
  const [pagina, setPagina] = useState("");
  const [queryRADIO, setQueryRADIO] = useState("");
  const [RadiosOutdoor, setRadiosOutdoor] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {admin, HideRADIO, setHideRADIO, updatedProduct, setUpdatedProduct} = useContext(AdminContext);

  const handleHideRADIO = () => setHideRADIO(!HideRADIO);
  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
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
    const dbRef = ref(db, "radios");
    const snapshot = await get(dbRef);
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push({
        id: childSnapshot.key,
        ...childData,
      });
    });
    setRadiosOutdoor(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();

    const dbRef = ref(db, "radios");
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
    const dbRef = ref(db, `radios/${id}`);
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
    const dbRef = ref(db, `radios/${updatedProduct.id}`);
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
    <div className={style.box_content}>
      <TableBar
        id="radio"
        Hide={HideRADIO}
        handleHide={handleHideRADIO}
        tableName="Radios Outdoor"
        openModal={openModal}
        admin={admin}
        handleSearchChange={handleSearchChangeRADIO}
        query={queryRADIO}
        newButton="Novo Radio Outdoor"
      />

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
        <Paginacao
          dados={RadiosOutdoor}
          Tablehead={<Radio_Thead />}
          query={queryRADIO}
          mapFunction={(radio, index) => (
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
                <td className={radio.aberturaHorVer === "-" && style.NaoPossui}>{radio.aberturaHorVer !== "-" && radio.aberturaHorVer}</td>
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
          )}
        />
      )}
    </div>
  );
}
