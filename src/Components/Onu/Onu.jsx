import {AdminContext} from "../../App";
import CrudFirebase from "../../Database/crud";
import UseAux from "../../Hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/ont.png";
import Content from "../../ui/Content";
import {OlimpoPageBtn} from "../../ui/OlimpoTextInput";
import OlimpoTable from "../../ui/Table";
import TableStart from "../../ui/TableStart";
import OnuCompare from "./OnuCompare";
import OnuModal from "./OnuModal";
import {React, useState, useEffect, useContext, createContext} from "react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import Modal from "react-modal";

export const OnuContext = createContext();

export default function onu() {
  const {admin, HideONU, setHideONU, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [onu, setOnu] = useState([]);
  const [queryOnu, setQueryOnu] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, Possui, NaoPossui, InterfaceStyle, calculateDateDifference, currentDate} =
    UseAux();
  const {Onu_Header} = TableHead();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideONU = () => setHideONU(!HideONU);
  const handleSearchChangeOnu = (e) => {
    setQueryOnu(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("onu", setOnu);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "onu");
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("onu", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("onu", setUpdatedProduct, updatedProduct, closeModal);
    fetchDevices("onu", setOnu);
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
    const productsToCompare = onu.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (onu) => {
    setComparisonDevices([onu]);
    openModalCompare();
  };

  return (
    <Content>
      <OnuContext.Provider
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
        <OnuModal />
        <OnuCompare />
      </OnuContext.Provider>

      <div id="onu-ont" className="overflow-x-auto">
        <OlimpoTable
          Hide={HideONU}
          Device={"Onu/Ont"}
          DeviceImg={DeviceImg}
          DeviceText={
            "Wi-Fi de alta performance com qualidade de fibra óptica e porta Gigabit Ethernet."
          }
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideONU}
          openModal={openModal}
          query={queryOnu}
          handleSearchChange={handleSearchChangeOnu}
          admin={admin}
          createButton="Nova Onu/Ont"
          thead={Onu_Header}
          tbody={onu
            .sort(compareStatus)
            .filter((onu) => {
              if (onu.modelo.toLowerCase().includes(queryOnu.toLowerCase())) {
                return onu;
              } else if (onu.interface.toLowerCase().includes(queryOnu.toLowerCase())) {
                return onu;
              } else {
              }
            })
            .map((onu) => {
              return (
                <TableStart
                  handleProductSelect={() => handleProductSelect(onu.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(onu.id)}
                  status={onu.status}
                  modelo={onu.modelo}
                  ocultar={onu.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(onu.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(onu)}>
                  <td className="text-left">
                    <span className={InterfaceStyle(onu)}>{onu.interface}</span>
                  </td>
                  <td>{onu.fxs === "-" ? NaoPossui : onu.fxs}</td>
                  <td>{onu.qtdeportas}</td>
                  <td>{onu.sensibilidade}</td>
                  <td>{onu.cobertura === "-" ? NaoPossui : onu.cobertura}</td>
                  <td>{onu.clientesSimultaneos === "-" ? NaoPossui : onu.clientesSimultaneos}</td>
                  <td>{onu.transmissao2ghz === "-" ? NaoPossui : onu.transmissao2ghz}</td>
                  <td>{onu.transmissao5ghz === "-" ? NaoPossui : onu.transmissao5ghz}</td>
                  <td className="px-4">{onu.ssid === "-" ? NaoPossui : onu.ssid}</td>
                  <td className="px-4">{onu.tr069 === "-" ? NaoPossui : Possui}</td>
                  <td>{onu.customize === "-" ? NaoPossui : Possui}</td>
                  <td>{onu.remotize === "-" ? NaoPossui : Possui}</td>
                  <td>{onu.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={onu.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td className="text-center">
                      <button
                        className="bg-yellow-300 p-1 rounded text-white"
                        onClick={() => openUpdateModal(onu)}>
                        <HiPencil />
                      </button>
                      <button
                        className="bg-red-600 p-1 rounded text-white ml-2"
                        onClick={() => deleteDevice(onu.id)}>
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
