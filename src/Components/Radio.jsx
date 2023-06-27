import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import style from "../css/App.module.css";
import {Radio_Thead} from "/src/TableHeads";
import RadioModal from "./RadioModal";
import {AdminContext} from "../App";
import Swal from "sweetalert2";
import Modal from "react-modal";
import {Pagination} from "./Pagination";
import TableBar from "./TableBar";
import {getDatabase, get, set, ref, push, remove} from "firebase/database";
import {app, db} from "../database/firebase";
import Content from "../ui/Content";
import CrudFirebase from "../Database/crud";
import OlimpoTable from "../ui/Table";

export const RadioContext = createContext();

export default function Radios() {
  const {admin, HideRADIO, setHideRADIO, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [RadiosOutdoor, setRadiosOutdoor] = useState([]);
  const [queryRADIO, setQueryRADIO] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideRADIO = () => setHideRADIO(!HideRADIO);
  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("radios", setRadiosOutdoor);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "radios", fetchDevices);
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("radios", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("radios", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
  };

  function compareStatus(a, b) {
    if (a.status === "Suporte" && b.status !== "Suporte") {
      return -1;
    } else if (a.status !== "Suporte" && b.status === "Suporte") {
      return 1;
    } else if (a.status === "Phaseout" && b.status !== "Phaseout") {
      return 1;
    } else if (a.status !== "Phaseout" && b.status === "Phaseout") {
      return -1;
    } else {
      if (a.modelo < b.modelo) {
        return -1;
      } else if (a.modelo > b.modelo) {
        return 1;
      }
      return 0;
    }
  }

  // Esse trecho vai gerenciar os produtos selecionados
  const [modalIsOpenCompare, setIsOpenCompare] = useState(false);

  function openModalCompare() {
    setIsOpenCompare(true);
  }

  function closeModalCompare() {
    setIsOpenCompare(false);
  }

  const [selectedDevices, setSelectedDevices] = useState([]);
  const [comparisonDevices, setComparisonDevices] = useState([]);

  const handleProductSelect = (productId) => {
    if (selectedDevices.includes(productId)) {
      setSelectedDevices(selectedDevices.filter((id) => id !== productId));
    } else {
      setSelectedDevices([...selectedDevices, productId]);
    }
  };

  const handleCompareClick = () => {
    const productsToCompare = accessPoint.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  return (
    <Content>
      <RadioContext.Provider
        value={{
          updateDevice,
          updatedProduct,
          setUpdatedProduct,
          modalIsOpen,
          setIsOpen,
          openModal,
          closeModal,
          addDevice,
          admin,
          comparisonDevices,
          openModalCompare,
          closeModalCompare,
          modalIsOpenCompare,
        }}>
        <RadioModal />
      </RadioContext.Provider>

      <div className="overflow-x-auto">
        <OlimpoTable
          Hide={HideRADIO}
          Device={"Rádio Outdoor"}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideRADIO}
          openModal={openModal}
          query={queryRADIO}
          handleSearchChange={handleSearchChangeRADIO}
          admin={admin}
          createButton="Novo Rádio Outdoor"
          thead={<Radio_Thead />}
          tbody={RadiosOutdoor.sort(compareStatus)
            .filter((radio) => {
              if (radio.modelo.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else if (radio.modulação.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else {
              }
            })
            .map((radio) => {
              return (
                <tbody>
                  <tr className="border-b border-[#E6ECEE] hover:bg-slate-100 text-xs  whitespace-nowrap h-9">
                    <td>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 ml-1 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 "
                          onChange={() => handleProductSelect(radio.id)}
                        />
                        <div className={`${radio.status === "Suporte" ? "bg-green-500" : "bg-red-600"} w-3 h-3 rounded-full`}></div>
                      </div>
                    </td>
                    <td className="font-bold text-sm text-left text-black pl-2">
                      {radio.ocultar === "Sim" ? `${radio.modelo} | Oculto` : radio.modelo}
                    </td>
                    <td>
                      <span
                        className={`${
                          radio.modulação === "Fast" ? "bg-orange-400" : "bg-green-400"
                        } px-2 py-1 rounded-md uppercase font-bold text-white`}>
                        {radio.modulação}
                      </span>
                    </td>
                    <td>{radio.indicado}</td>
                    <td>
                      <span className={style.tooltip}>
                        {radio.ganho}
                        {/* {radio.ganho === "SEM ANTENA" && <i className="fa-regular fa-circle-question"></i>}
                        {radio.ganho === "SEM ANTENA" && (
                          <span className={style.tooltiptext}>
                            Antena adquirida separadamente, indicar parceria <a href="http://www.algcom.com.br">ALGCOM</a>
                          </span>
                        )} */}
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
                        <span className={style.paginalink}>Página</span>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className={style.btn_alterar} onClick={() => openUpdateModal(radio)}>
                          editar
                        </button>
                        <button className={style.btn_excluir} onClick={() => deleteDevice(radio.id)}></button>
                      </td>
                    )}
                  </tr>
                </tbody>
              );
            })}
        />
      </div>
    </Content>
  );
}
