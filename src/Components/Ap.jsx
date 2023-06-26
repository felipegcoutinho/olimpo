import React, {useEffect} from "react";
import {useState, useContext, createContext} from "react";
import Ap_Modal from "./ApModal";
import {AdminContext} from "../App";
import Content from "../ui/Content";
import {Badge} from "flowbite-react";
import {HiCheckCircle, HiXCircle, HiPencil, HiXMark} from "react-icons/hi2";
import AP_Thead from "../TableHeads";
import OlimpoTable from "../ui/Table";
import CrudFirebase from "../Database/crud";
import AP_ModalCompare from "./ApModalCompare";

export const APContext = createContext();

export default function Ap() {
  const {admin, HideAP, setHideAP, updatedProduct, setUpdatedProduct, openModal, closeModal, modalIsOpen, setIsOpen} =
    useContext(AdminContext);
  const [accessPoint, setAccessPoint] = useState([]);
  const [queryAP, setQueryAP] = useState("");

  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();

  const handleHideAP = () => setHideAP(!HideAP);
  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("aps", setAccessPoint);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "aps", fetchDevices);
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("aps", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("aps", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
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

  const NaoPossui = (
    <div className="flex justify-center items-center">
      <HiXCircle className="text-red-400 text-center text-2xl" />
    </div>
  );

  const Possui = (
    <div className="flex justify-center items-center">
      <HiCheckCircle className="text-green-400 text-center text-2xl" />
    </div>
  );

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
      <APContext.Provider
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
        <Ap_Modal />
        <AP_ModalCompare />
      </APContext.Provider>

      <div className="overflow-x-auto">
        <OlimpoTable
          Hide={HideAP}
          Device={"Access Points"}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideAP}
          openModal={openModal}
          query={queryAP}
          handleSearchChange={handleSearchChangeAP}
          admin={admin}
          createButton="Novo Access Point"
          thead={<AP_Thead />}
          tbody={accessPoint
            .sort(compareStatus)
            .filter((ap) => {
              if (ap.modelo.toLowerCase().includes(queryAP.toLowerCase())) {
                return ap;
              } else if (ap.modulação.toLowerCase().includes(queryAP.toLowerCase())) {
                return ap;
              } else {
              }
            })
            .map((ap) => {
              return (
                <tbody className="text-slate-600">
                  <tr className="border-b border-[#E6ECEE] hover:bg-slate-100 text-xs text-center whitespace-nowrap">
                    <td>
                      <div className="flex gap-2">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 ml-1 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 "
                            onChange={() => handleProductSelect(ap.id)}
                          />
                        </div>
                        <div
                          className={`${ap.status === "Suporte" ? "bg-green-500" : "bg-red-600"} inline-block w-4 h-4 rounded-full`}></div>
                      </div>
                    </td>
                    <th className="flex items-center px-2 w-max py-1 font-bold text-gray-900 ">
                      {/* <img src={ap.img} className="w-7 h-7 mr-1" /> */}
                      <td className="font-bold text-sm">{ap.ocultar === "Sim" ? `${ap.modelo} | Oculto` : ap.modelo}</td>
                    </th>
                    <td>
                      <span
                        className={`${
                          ap.modulação === "Fast" ? "bg-orange-400" : "bg-green-400"
                        } px-2 py-1 rounded-md uppercase font-bold text-white`}>
                        {ap.modulação}
                      </span>
                    </td>
                    <td className="font-bold">{ap.cobertura}</td>
                    <td>{ap.raio}</td>
                    <td>{ap.usuarioMax}</td>
                    <td>{ap.throughputWireless24}</td>
                    <td>{ap.throughputWireless50 === "-" ? NaoPossui : ap.throughputWireless50}</td>
                    <td>{ap.qtdePortas}</td>
                    <td>{ap.tensao}</td>
                    <td>{ap.poe}</td>
                    <td>{ap.handover === "-" ? NaoPossui : Possui}</td>
                    <td>{ap.inmaster === "-" ? NaoPossui : Possui}</td>
                    <td>{ap.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={ap.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className="bg-yellow-400 p-1 rounded-md text-white" onClick={() => openUpdateModal(ap)}>
                          <HiPencil />
                        </button>
                        <button className="bg-red-700 p-1 rounded-md text-white ml-2" onClick={() => deleteDevice(ap.id)}>
                          <HiXMark />
                        </button>
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
