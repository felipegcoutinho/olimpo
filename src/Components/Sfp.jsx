import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import {Sfp_Thead} from "/src/TableHeads";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import Modal from "react-modal";
import SfpModal from "./SfpModal";
import TableBar from "./TableBar";
import {Pagination} from "./Pagination";
import {getDatabase, get, set, ref, push, remove} from "firebase/database";
import {app, db} from "../database/firebase";
import Content from "../UI Components/Content";

export const SfpContext = createContext();

export default function Ap() {
  const [querySfp, setQuerySfp] = React.useState("");
  const [sfp, setSfp] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {admin, HideSFP, setHideSFP, updatedProduct, setUpdatedProduct} = useContext(AdminContext);

  const handleHideSFP = () => setHideSFP(!HideSFP);
  const handleSearchChangeSfp = (e) => {
    setQuerySfp(e.target.value);
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
    const dbRef = ref(db, "sfp");
    const snapshot = await get(dbRef);
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push({
        id: childSnapshot.key,
        ...childData,
      });
    });
    setSfp(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    const dbRef = ref(db, "sfp");
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
    const dbRef = ref(db, `sfp/${id}`);
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
    const dbRef = ref(db, `sfp/${updatedProduct.id}`);
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
    <Content>
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
        <Pagination
          dados={sfp}
          Tablehead={<Sfp_Thead />}
          query={querySfp}
          mapFunction={(sfp, index) => (
            <tbody>
              <tr key={index} className={sfp.ocultar === "Sim" && !admin ? style.OcultarTd : ""}>
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
                <td>{sfp.CompRX}</td>
                <td>{sfp.CompTX}</td>
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
    </Content>
  );
}
