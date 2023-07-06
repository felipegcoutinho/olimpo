import React, {useEffect} from "react";
import {useState, useContext, createContext} from "react";
import Content from "../../ui/Content";
import {Badge} from "flowbite-react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import OlimpoTable from "../../ui/Table";
import CrudFirebase from "../../Database/crud";
import Modal from "react-modal";
import UseAux from "../../Hooks/UseAux";
import ConversorModal from "./ConversorModal";
import {Conversor_Thead} from "../../TableHeads";
import {AdminContext} from "../../App";
import ConversorCompare from "./ConversorCompare";
import DeviceImg from "../../assets/conversor.png";
import TableStart from "../../ui/TableStart";

export const ConversorContext = createContext();

export default function Conversor() {
  const {admin, HideConversor, setHideConversor, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [conversor, setConversor] = useState([]);
  const [queryCONVERSOR, setQueryConversor] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, ModulacaoStyle, calculateDateDifference, currentDate} = UseAux();

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
    deleteDevices(id, "conversores", fetchDevices);
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
    await updateDevices("conversores", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
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
        }}>
        <ConversorModal />
        <ConversorCompare />
      </ConversorContext.Provider>

      <div className="overflow-x-auto">
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
          thead={<Conversor_Thead />}
          tbody={conversor
            .sort(compareStatus)
            .filter((conversor) => {
              if (conversor.modelo.toLowerCase().includes(queryCONVERSOR.toLowerCase())) {
                return conversor;
              } else if (conversor.modulação.toLowerCase().includes(queryCONVERSOR.toLowerCase())) {
                return conversor;
              } else {
              }
            })
            .map((conversor) => {
              return (
                <tbody className="text-slate-700">
                  <tr
                    className={`border border-slate-100 hover:bg-slate-100 text-xs text-center whitespace-nowrap h-9 ${
                      selectedDevices.includes(conversor.id) && "bg-orange-200 hover:bg-orange-300"
                    } ${conversor.ocultar === "Sim" && !admin ? "hidden" : ""}`}>
                    <TableStart
                      handleProductSelect={() => handleProductSelect(conversor.id)}
                      selectedDevicesLength={selectedDevices.length}
                      selectedDevicesIncludes={selectedDevices.includes(conversor.id)}
                      status={conversor.status}
                      modelo={conversor.modelo}
                      ocultar={conversor.ocultar}
                      calculateDateDifference={calculateDateDifference(conversor.date, currentDate)}
                      handleSingleClick={() => handleSingleClick(conversor)}
                    />

                    <td>
                      <span className={ModulacaoStyle(conversor)}>{conversor.modulação}</span>
                    </td>
                    <td>{conversor.conector}</td>
                    <td>{conversor.wdm}</td>
                    <td>{conversor.distancia}</td>
                    <td>{conversor.fibra}</td>
                    <td>{conversor.potencia}</td>
                    <td>{conversor.sensibilidade}</td>
                    <td>{conversor.CompRX}</td>
                    <td>{conversor.CompTX}</td>
                    <td>{conversor.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={conversor.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
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
                  </tr>
                </tbody>
              );
            })}
        />
      </div>
    </Content>
  );
}
