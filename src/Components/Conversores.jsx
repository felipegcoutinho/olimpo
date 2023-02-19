import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import {Conversor_Thead} from "/src/TableHead";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import Modal from "react-modal";
import ConversorModal from "./ConversorModal";
import TableBar from "./TableBar";
import {Paginacao} from "./Pagination";
import {getDatabase, get, set, ref, push, remove} from "firebase/database";
import {app, db} from "../database/firebase";

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
  const [queryCONVERSOR, setQueryCONVERSOR] = React.useState("");
  const [conversor, setConversor] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {admin, HideConversor, setHideConversor, updatedProduct, setUpdatedProduct} = useContext(AdminContext);

  const handleHideConversor = () => setHideConversor(!HideConversor);
  const handleSearchChangeCONVERSOR = (e) => {
    setQueryCONVERSOR(e.target.value);
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
    const dbRef = ref(db, "conversores");
    const snapshot = await get(dbRef);
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push({
        id: childSnapshot.key,
        ...childData,
      });
    });
    setConversor(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    const dbRef = ref(db, "conversores");
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
    const dbRef = ref(db, `conversores/${id}`);
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
    const dbRef = ref(db, `conversores/${updatedProduct.id}`);
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
        id="conversor"
        Hide={HideConversor}
        handleHide={handleHideConversor}
        tableName="Conversor de Mídia"
        openModal={openModal}
        admin={admin}
        handleSearchChange={handleSearchChangeCONVERSOR}
        query={queryCONVERSOR}
        newButton="Novo Conversor de Mídia"
      />

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
        <Paginacao
          dados={conversor}
          Tablehead={<Conversor_Thead />}
          query={queryCONVERSOR}
          mapFunction={(conversor, index) => (
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
                <td>{conversor.CompRX}</td>
                <td>{conversor.CompTX}</td>
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
          )}
        />
      )}
    </div>
  );
}
