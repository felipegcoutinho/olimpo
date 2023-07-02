import React, {useEffect} from "react";
import {useState, useContext, createContext} from "react";
import SwModal from "./SwModal";
import {AdminContext} from "../../App";
import Content from "../../ui/Content";
import {Badge} from "flowbite-react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import OlimpoTable from "../../ui/Table";
import CrudFirebase from "../../Database/crud";
import Modal from "react-modal";
import UseAux from "../../Hooks/UseAux";
import {Switch_Thead} from "../../TableHeads";
import Swal from "sweetalert2";
import SwitchModalCompare from "./SwitchCompare";
import DeviceImg from "../../assets/sw.png";

export const SwContext = createContext();

export default function Switches() {
  const {admin, HideSwitch, setHideSwitch, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [switches, setSwitches] = useState([]);
  const [querySWITCH, setQuerySWITCH] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, ModulacaoStyle} = UseAux();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideSwitch = () => setHideSwitch(!HideSwitch);
  const handleSearchChangeSwitch = (e) => {
    setQuerySWITCH(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("switches", setSwitches);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "switches", fetchDevices);
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("switches", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("switches", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
  };

  // Esse trecho vai gerenciar os produtos selecionados
  const [modalIsOpenCompare, setIsOpenCompare] = useState(false);

  function openModalCompare() {
    setIsOpenCompare(true);
  }

  function closeModalCompare() {
    setIsOpenCompare(false);
    setSelectedDevices([]);
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
    const productsToCompare = switches.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (ap) => {
    setComparisonDevices([ap]);
    openModalCompare();
  };

  return (
    <Content>
      <SwContext.Provider
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
        <SwModal />
        <SwitchModalCompare />
      </SwContext.Provider>

      <div className="overflow-x-auto">
        <OlimpoTable
          Hide={HideSwitch}
          Device={"Switches"}
          DeviceImg={DeviceImg}
          DeviceText={"Robustez e alta performance para transmissão de dados"}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideSwitch}
          openModal={openModal}
          query={querySWITCH}
          handleSearchChange={handleSearchChangeSwitch}
          admin={admin}
          createButton="Novo Switch"
          thead={<Switch_Thead />}
          tbody={switches
            .sort(compareStatus)
            .filter((sw) => {
              if (sw.modelo.toLowerCase().includes(querySWITCH.toLowerCase())) {
                return sw;
              } else if (sw.modulação.toLowerCase().includes(querySWITCH.toLowerCase())) {
                return sw;
              } else {
              }
            })
            .map((sw) => {
              return (
                <tbody className="text-slate-600">
                  <tr className="border border-[#E6ECEE] hover:bg-slate-100 text-xs whitespace-nowrap h-9 text-center">
                    <td>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 ml-1 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                          onChange={() => handleProductSelect(sw.id)}
                          checked={selectedDevices.includes(sw.id)}
                        />
                        <div className={`${sw.status === "Suporte" ? "bg-green-500" : "bg-red-500"} w-3 h-3 rounded-full`}></div>
                      </div>
                    </td>
                    <td className="font-bold text-sm text-left text-black pl-2" onClick={() => handleSingleClick(sw)}>
                      <span className="underline cursor-pointer flex items-center gap-1">
                        {sw.ocultar === "Sim" ? `${sw.modelo} | Oculto` : sw.modelo}
                      </span>
                    </td>
                    <td className="text-left">
                      <span className={ModulacaoStyle(sw)}>{sw.modulação}</span>
                    </td>
                    <td className="font-bold">{sw.qtdePortas}</td>
                    <td>{sw.gerenciavel}</td>
                    <td className="">{sw.poe}</td>
                    <td>{sw.pps}</td>
                    <td>{sw.backplane}</td>
                    <td>{sw.sfp}</td>
                    <td>{sw.poeExtender}</td>
                    <td>{sw.poePorta}</td>
                    <td>{sw.poeTotal}</td>
                    <td>{sw.qos}</td>
                    <td>{sw.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={sw.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(sw)}>
                          <HiPencil />
                        </button>
                        <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(sw.id)}>
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
