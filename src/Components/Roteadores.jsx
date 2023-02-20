import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import {Roteador_Thead} from "/src/TableHead";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import Modal from "react-modal";
import RoteadoresModal from "./RoteadoresModal";
import TableBar from "./TableBar";
import {Paginacao} from "./Pagination";
import {getDatabase, get, set, ref, push, remove} from "firebase/database";
import {app, db} from "../database/firebase";

export const HOContext = createContext();

export default function Roteador() {
  const [modelo, SetModelo] = useState("");
  const [cobertura, SetCobertura] = useState("");
  const [raio, SetRaio] = useState("");
  const [usuarioMax, SetUsuarioMax] = useState("");
  const [planoRecomendado, SetPlanoRecomendado] = useState("");
  const [qtdePortas, SetQtdePortas] = useState("");
  const [modulação, SetModulação] = useState("");
  const [datarateMax2G, SetDatarateMax2G] = useState("");
  const [datarateMax5G, SetDatarateMax5G] = useState("");
  const [ipv6, SetIpv6] = useState("");
  const [tensao, SetTensao] = useState("");
  const [repetidor, SetRepetidor] = useState("");
  const [roteador, SetRoteador] = useState("");
  const [cliente, SetCliente] = useState("");
  const [ap, SetAp] = useState("");
  const [garantia, SetGarantia] = useState("");
  const [status, SetStatus] = useState("");
  const [pagina, SetPagina] = useState("");
  const [queryHO, setQueryHO] = React.useState("");
  const [roteadorHO, setRoteadorHO] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {admin, HideHO, setHideHO, updatedProduct, setUpdatedProduct} = useContext(AdminContext);

  const handleHideHO = () => setHideHO(!HideHO);
  const handleSearchChangeHO = (e) => {
    setQueryHO(e.target.value);
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
    const dbRef = ref(db, "roteadorHO");
    const snapshot = await get(dbRef);
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push({
        id: childSnapshot.key,
        ...childData,
      });
    });
    setRoteadorHO(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    const dbRef = ref(db, "roteadorHO");
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
    const dbRef = ref(db, `roteadorHO/${id}`);

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
    const dbRef = ref(db, `roteadorHO/${updatedProduct.id}`);
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
        id="homeOffice"
        Hide={HideHO}
        handleHide={handleHideHO}
        tableName="Home Office"
        openModal={openModal}
        admin={admin}
        handleSearchChange={handleSearchChangeHO}
        query={queryHO}
        newButton="Novo Roteador"
      />

      <HOContext.Provider
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
        <RoteadoresModal />
      </HOContext.Provider>

      {HideHO && (
        <Paginacao
          dados={roteadorHO}
          Tablehead={<Roteador_Thead />}
          query={queryHO}
          mapFunction={(roteador, index) => (
            <tbody>
              <tr key={index}>
                <td className={roteador.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>{roteador.modelo}</td>
                <td>
                  <span className={roteador.modulação === "Fast" ? style.fast : style.giga}>{roteador.modulação}</span>
                </td>
                <td>
                  {roteador.cobertura}
                  {roteador.cobertura === "N/A" ? null : " m²"}
                </td>
                <td>
                  {roteador.raio}
                  {roteador.raio === "N/A" ? null : "m"}
                </td>
                <td>
                  {roteador.usuarioMax}
                  {roteador.usuarioMax === "N/A" ? null : " usuários"}
                </td>
                <td>{roteador.planoRecomendado}</td>
                <td>{roteador.qtdePortas}</td>
                <td>{roteador.datarateMax2G}</td>
                <td className={roteador.datarateMax5G === "-" ? style.NaoPossui : null}>
                  {roteador.datarateMax5G === "-" ? null : roteador.datarateMax5G}
                </td>
                <td>{roteador.tensao}</td>
                <td className={roteador.ipv6 === "-" ? style.NaoPossui : style.Possui}></td>
                <td>
                  {roteador.repetidor === "-" && <span className={style.NaoPossui}></span>}
                  {roteador.repetidor === "Sim" && <span className={style.Possui}></span>}
                  {roteador.repetidor === "N/A" && <span>{roteador.repetidor}</span>}
                </td>
                <td>
                  {roteador.roteador === "-" && <span className={style.NaoPossui}></span>}
                  {roteador.roteador === "Sim" && <span className={style.Possui}></span>}
                  {roteador.roteador === "N/A" && <span>{roteador.roteador}</span>}
                </td>
                <td>
                  {roteador.cliente === "-" && <span className={style.NaoPossui}></span>}
                  {roteador.cliente === "Sim" && <span className={style.Possui}></span>}
                  {roteador.cliente === "N/A" && <span>{roteador.cliente}</span>}
                </td>
                <td>
                  {roteador.ap === "-" && <span className={style.NaoPossui}></span>}
                  {roteador.ap === "Sim" && <span className={style.Possui}></span>}
                  {roteador.ap === "N/A" && <span>{roteador.ap}</span>}
                </td>
                <td>{roteador.garantia}</td>
                <td>
                  <a target="_blank" rel="noopener noreferrer" href={roteador.pagina}>
                    <span className={style.paginalink}>Ir para Página</span>
                  </a>
                </td>
                {admin && (
                  <td>
                    <button className={style.btn_alterar} onClick={() => openUpdateModal(roteador)}></button>
                    <button className={style.btn_excluir} onClick={() => deleteProduct(roteador.id)}></button>
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
