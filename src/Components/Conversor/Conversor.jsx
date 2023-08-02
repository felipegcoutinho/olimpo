import { AdminContext } from "../../App";
import CrudFirebase from "../../database/crud";
import UseAux from "../../hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/conversor.png";
import Content from "../../ui/Content";
import { OlimpoPageBtn } from "../../ui/OlimpoInput";
import OlimpoTable from "../../ui/Table";
import TableStart from "../../ui/TableStart";
import ConversorCompare from "./ConversorCompare";
import ConversorModal from "./ConversorModal";
import { React, useState, useEffect, useContext, createContext } from "react";
import { HiPencil, HiXMark } from "react-icons/hi2";
import Modal from "react-modal";

export const ConversorContext = createContext();

export default function Conversor() {
  const { admin, HideConversor, setHideConversor, updatedProduct, setUpdatedProduct } = useContext(AdminContext);
  const [conversor, setConversor] = useState([]);
  const [queryCONVERSOR, setQueryConversor] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const { fetchDevices, addDevices, deleteDevices, updateDevices } = CrudFirebase();
  const { compareStatus, InterfaceStyle, Possui, NaoPossui, calculateDateDifference, currentDate } = UseAux();
  const { Conversor_Header } = TableHead();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideConversor = () => setHideConversor(!HideConversor);
  const handleSearchChangeConversor = (e) => {
    setQueryConversor(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("conversores", setConversor);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "conversores");
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("conversores", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("conversores", setUpdatedProduct, updatedProduct, closeModal);
    fetchDevices("conversores", setConversor);
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
    const productsToCompare = conversor.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (conversor) => {
    setComparisonDevices([conversor]);
    openModalCompare();
  };

  return (
    <Content>
      <ConversorContext.Provider
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
        }}
      >
        <ConversorModal />
        <ConversorCompare />
      </ConversorContext.Provider>

      <div id="conversor" className="overflow-x-auto">
        <OlimpoTable
          Hide={HideConversor}
          Device={"Conversor de Mídia"}
          DeviceImg={DeviceImg}
          DeviceText={"Amplia em até 20 km o alcance da rede com muito mais velocidade e qualidade."}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideConversor}
          openModal={openModal}
          query={queryCONVERSOR}
          handleSearchChange={handleSearchChangeConversor}
          admin={admin}
          createButton="Novo Conversor de Mídia"
          thead={Conversor_Header}
          tbody={conversor
            .sort(compareStatus)
            .filter((conversor) => {
              if (conversor.modelo.toLowerCase().includes(queryCONVERSOR.toLowerCase())) {
                return conversor;
              } else if (conversor.interface.toLowerCase().includes(queryCONVERSOR.toLowerCase())) {
                return conversor;
              } else {
              }
            })
            .map((conversor) => {
              return (
                <TableStart
                  handleProductSelect={() => handleProductSelect(conversor.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(conversor.id)}
                  status={conversor.status}
                  modelo={conversor.modelo}
                  ocultar={conversor.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(conversor.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(conversor)}
                >
                  <td>
                    <span className={InterfaceStyle(conversor)}>{conversor.interface}</span>
                  </td>
                  <td className="px-2 font-normal">{conversor.conector}</td>
                  <td className="px-4">{conversor.wdm === "-" ? NaoPossui : Possui}</td>
                  <td>{conversor.distancia}</td>
                  <td>{conversor.fibra}</td>
                  <td>{conversor.potencia}</td>
                  <td>{conversor.sensibilidade}</td>
                  <td>{conversor.CompRX}</td>
                  <td>{conversor.CompTX}</td>
                  <td>{conversor.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={conversor.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td>
                      <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(conversor)}>
                        <HiPencil />
                      </button>
                      <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(conversor.id)}>
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
