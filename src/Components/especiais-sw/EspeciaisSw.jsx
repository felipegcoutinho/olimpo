import { AdminContext } from "../../App";
import FirebaseActions from "../../database/firebase-actions";
import UseAux from "../../hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/sw.png";
import Content from "../../ui/Content";
import { OlimpoPageBtn } from "../../ui/OlimpoInput";
import OlimpoTable from "../../ui/Table";
import TableModel from "../../ui/TableModel";
import SwModal from "./SwModal";
import SwitchModalCompare from "./SwitchCompare";
import { React, useState, useEffect, useContext } from "react";
import { HiPencil, HiXMark } from "react-icons/hi2";
import Modal from "react-modal";

export default function Switch() {
  const { admin, HideSwitch, setHideSwitch, updatedProduct, setUpdatedProduct } = useContext(AdminContext);
  const [switches, setSwitches] = useState([]);
  const [querySWITCH, setQuerySWITCH] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const { fetchDevices, addDevices, deleteDevices, updateDevices } = FirebaseActions();
  const { compareStatus, InterfaceStyle, Possui, NaoPossui, calculateDateDifference, currentDate } = UseAux();
  const { Switch_Header } = TableHead();

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

  const [PoE, setPoE] = useState(false);
  const [SemPoE, setSemPoE] = useState(false);
  const [Gerenciavel, setGerenciavel] = useState(false);
  const [NaoGerenciavel, setNaoGerenciavel] = useState(false);

  const handlePoE = () => {
    setPoE(!PoE);
  };

  const handleSemPoE = () => {
    setSemPoE(!SemPoE);
  };

  const handleGerenciavel = () => {
    setGerenciavel(!Gerenciavel);
  };

  const handleNaoGerenciavel = () => {
    setNaoGerenciavel(!NaoGerenciavel);
  };

  return (
    <Content>
      <SwModal
        addDevice={addDevice}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        setUpdatedProduct={setUpdatedProduct}
        updateDevice={updateDevice}
        updatedProduct={updatedProduct}
      />
      <SwitchModalCompare closeModalCompare={closeModalCompare} comparisonDevices={comparisonDevices} modalIsOpenCompare={modalIsOpenCompare} />

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
          handleGerenciavel={handleGerenciavel}
          Gerenciavel={Gerenciavel}
          handlePoE={handlePoE}
          PoE={PoE}
          SemPoE={SemPoE}
          handleSemPoE={handleSemPoE}
          handleNaoGerenciavel={handleNaoGerenciavel}
          NaoGerenciavel={NaoGerenciavel}
          tbody={switches
            .sort(compareStatus)
            .filter((sw) => {
              const isPoE = PoE ? sw.poe !== "-" : true;
              const isSemPoE = SemPoE ? sw.poe === "-" : true;
              const isGerenciavel = Gerenciavel ? sw.gerenciavel === "Sim" : true;
              const isNaoGerenciavel = NaoGerenciavel ? sw.gerenciavel === "-" : true;

              return isPoE && isSemPoE && isGerenciavel && isNaoGerenciavel && sw.modelo.toLowerCase().includes(querySWITCH.toLowerCase());
            })

            .map((sw) => {
              return (
                <TableModel
                  handleProductSelect={() => handleProductSelect(sw.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(sw.id)}
                  status={sw.status}
                  modelo={sw.modelo}
                  ocultar={sw.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(sw.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(sw)}
                >
                  <td className="text-left">
                    <span className={InterfaceStyle(sw)}>{sw.interface}</span>
                  </td>
                  <td>{sw.qtdePortas}</td>
                  <td>{sw.gerenciavel === "-" ? NaoPossui : Possui}</td>
                  <td>{sw.poe === "-" ? NaoPossui : Possui}</td>
                  <td>{sw.pps}</td>
                  <td>{sw.backplane}</td>
                  <td>{sw.sfp === "-" ? NaoPossui : sw.sfp}</td>
                  <td>{sw.poeExtender === "-" ? NaoPossui : Possui}</td>
                  <td>{sw.poePorta === "-" ? NaoPossui : sw.poePorta}</td>
                  <td>{sw.poeTotal === "-" ? NaoPossui : sw.poeTotal}</td>
                  <td>{sw.qos === "-" ? NaoPossui : Possui}</td>
                  <td className="font-normal text-center">{sw.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={sw.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td className="text-center">
                      <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(sw)}>
                        <HiPencil />
                      </button>
                      <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(sw.id)}>
                        <HiXMark />
                      </button>
                    </td>
                  )}
                </TableModel>
              );
            })}
        />
      </div>
    </Content>
  );
}
