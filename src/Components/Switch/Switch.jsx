import {AdminContext} from "../../App";
import CrudFirebase from "../../Database/crud";
import UseAux from "../../Hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/sw.png";
import Content from "../../ui/Content";
import {OlimpoPageBtn} from "../../ui/OlimpoTextInput";
import OlimpoTable from "../../ui/Table";
import TableStart from "../../ui/TableStart";
import SwModal from "./SwModal";
import SwitchModalCompare from "./SwitchCompare";
import {React, useState, useEffect, useContext, createContext} from "react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import Modal from "react-modal";

export const SwContext = createContext();

export default function Switches() {
  const {admin, HideSwitch, setHideSwitch, updatedProduct, setUpdatedProduct} =
    useContext(AdminContext);
  const [switches, setSwitches] = useState([]);
  const [querySWITCH, setQuerySWITCH] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, ModulacaoStyle, Possui, NaoPossui, calculateDateDifference, currentDate} =
    UseAux();
  const {Switch_Header} = TableHead();

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
    deleteDevices(id, "switches");
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
    await updateDevices("switches", setUpdatedProduct, updatedProduct, closeModal);
    fetchDevices("switches", setSwitches);
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

  // const [PoE, setPoE] = useState(false);

  // function handlePoE() {
  //   setPoE(!PoE);
  //   console.log(PoE);
  // }

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

      <div id="switch" className="overflow-x-auto">
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
          thead={Switch_Header}
          // handlePoE={handlePoE}
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
                <TableStart
                  handleProductSelect={() => handleProductSelect(sw.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(sw.id)}
                  status={sw.status}
                  modelo={sw.modelo}
                  ocultar={sw.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(sw.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(sw)}>
                  <td className="text-left">
                    <span className={ModulacaoStyle(sw)}>{sw.modulação}</span>
                  </td>
                  <td className="font-bold">{sw.qtdePortas}</td>
                  <td>{sw.gerenciavel === "-" ? NaoPossui : Possui}</td>
                  <td>{sw.poe === "-" ? NaoPossui : Possui}</td>
                  <td className="font-bold">{sw.pps}</td>
                  <td>{sw.backplane}</td>
                  <td className="font-bold">{sw.sfp === "-" ? NaoPossui : sw.sfp}</td>
                  <td>{sw.poeExtender === "-" ? NaoPossui : Possui}</td>
                  <td className="font-bold">{sw.poePorta === "-" ? NaoPossui : sw.poePorta}</td>
                  <td>{sw.poeTotal === "-" ? NaoPossui : sw.poeTotal}</td>
                  <td>{sw.qos === "-" ? NaoPossui : Possui}</td>
                  <td className="font-bold text-center">{sw.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={sw.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td className="text-center">
                      <button
                        className="bg-yellow-300 p-1 rounded text-white"
                        onClick={() => openUpdateModal(sw)}>
                        <HiPencil />
                      </button>
                      <button
                        className="bg-red-600 p-1 rounded text-white ml-2"
                        onClick={() => deleteDevice(sw.id)}>
                        <HiXMark />
                      </button>
                    </td>
                  )}
                </TableStart>
              );
            })}
        />
      </div>
    </Content>
  );
}
