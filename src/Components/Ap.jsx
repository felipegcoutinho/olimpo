import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import AP_Thead from "../TableHeads";
import Ap_Modal from "./ApModal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import Modal from "react-modal";
import TableBar from "./TableBar";
import {getDatabase, get, set, ref, push, remove} from "firebase/database";
import {app, db} from "../database/firebase";
import Content from "../UI Components/Content";
import {Pagination} from "./Pagination";
import TableTeste from "../UI Components/Table";
import {Badge} from "flowbite-react";
import {HiArrowTopRightOnSquare} from "react-icons/hi2";

export const APContext = createContext();

export default function Ap() {
  const [queryAP, setQueryAP] = useState("");
  const [accessPoint, setAccessPoint] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {admin, HideAP, setHideAP, updatedProduct, setUpdatedProduct} = useContext(AdminContext);

  const handleHideAP = () => setHideAP(!HideAP);
  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
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
    const apRef = ref(db, "aps");
    const snapshot = await get(apRef);
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push({
        id: childSnapshot.key,
        ...childData,
      });
    });
    setAccessPoint(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Adicionar Produto */
  const addProduto = async (e) => {
    e.preventDefault();
    const apRef = ref(db, "aps");
    const newAPRef = push(apRef);
    await set(newAPRef, updatedProduct);
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
    const apRef = ref(db, `aps/${id}`);
    Swal.fire({
      title: "Você tem certeza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006e39",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(apRef);
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
    const apRef = ref(db, `aps/${updatedProduct.id}`);
    await set(apRef, updatedProduct);
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
        id="ap"
        Hide={HideAP}
        handleHide={handleHideAP}
        tableName="Access Points"
        openModal={openModal}
        admin={admin}
        handleSearchChange={handleSearchChangeAP}
        query={queryAP}
        newButton="Novo Access Point"
      />
      <APContext.Provider
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
        <Ap_Modal />
      </APContext.Provider>

      {HideAP && (
        <Pagination
          dados={accessPoint}
          Tablehead={<AP_Thead />}
          query={queryAP}
          mapFunction={(ap, index) => (
            <>
              <tbody>
                <tr key={index} className={ap.ocultar === "Sim" && !admin ? style.OcultarTd : ""}>
                  <td className={ap.status === "Phaseout" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}>
                    {ap.ocultar === "Sim" ? `${ap.modelo} | Oculto` : ap.modelo}
                  </td>
                  <td>
                    <span className={ap.modulação === "Fast" ? style.fast : style.giga}>{ap.modulação}</span>{" "}
                  </td>
                  <td>{ap.cobertura}</td>
                  <td>{ap.raio}</td>
                  <td>{ap.usuarioMax}</td>
                  <td>{ap.throughputWireless24}</td>
                  <td className={ap.throughputWireless50 === "-" && style.NaoPossui}>
                    {ap.throughputWireless50 !== "-" && ap.throughputWireless50}
                  </td>
                  <td>{ap.qtdePortas}</td>
                  <td className={ap.poe === "-" && style.NaoPossui}>{ap.poe !== "-" && ap.poe}</td>
                  <td>{ap.tensao}</td>
                  <td className={ap.connectiVersion === "-" && style.NaoPossui}>{ap.connectiVersion !== "-" && ap.connectiVersion}</td>
                  <td className={ap.handover === "-" ? style.NaoPossui : style.Possui}></td>
                  <td className={ap.wisefi === "-" ? style.NaoPossui : style.Possui}></td>
                  <td>{ap.potencia2G}</td>
                  <td className={ap.potencia5G === "-" && style.NaoPossui}>{ap.potencia5G !== "-" && ap.potencia5G}</td>
                  <td>{ap.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={ap.pagina}>
                      <Badge size="xs" icon={HiArrowTopRightOnSquare} className="bg-green-500 text-white">
                        Página
                      </Badge>
                    </a>
                  </td>
                  {admin && (
                    <td>
                      <button className={style.btn_alterar} onClick={() => openUpdateModal(ap)}></button>
                      <button className={style.btn_excluir} onClick={() => deleteProduct(ap.id)}></button>
                    </td>
                  )}
                </tr>
              </tbody>
            </>
          )}
        />
      )}
    </Content>
  );
}
