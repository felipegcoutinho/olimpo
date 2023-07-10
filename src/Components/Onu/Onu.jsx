import React, {useEffect} from "react";
import {useState, useContext, createContext} from "react";
import {AdminContext} from "../../App";
import Content from "../../ui/Content";
import {Badge} from "flowbite-react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import {Onu_Thead} from "../../TableHeads";
import OlimpoTable from "../../ui/Table";
import CrudFirebase from "../../Database/crud";
import Modal from "react-modal";
import UseAux from "../../Hooks/UseAux";
import DeviceImg from "../../assets/ont.png";
import OnuModal from "./OnuModal";
import OnuCompare from "./OnuCompare";
import TableStart from "../../ui/TableStart";

export const OnuContext = createContext();

export default function onu() {
  const {admin, HideONU, setHideONU, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [onu, setOnu] = useState([]);
  const [queryOnu, setQueryOnu] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, Possui, NaoPossui, ModulacaoStyle, calculateDateDifference, currentDate} = UseAux();

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
    deleteDevices(id, "onu", fetchDevices);
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
    await updateDevices("onu", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
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

      <div className="overflow-x-auto">
        <OlimpoTable
          Hide={HideONU}
          Device={"Onu/Ont"}
          DeviceImg={DeviceImg}
          DeviceText={"Wi-Fi de alta performance com qualidade de fibra óptica e porta Gigabit Ethernet."}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideONU}
          openModal={openModal}
          query={queryOnu}
          handleSearchChange={handleSearchChangeOnu}
          admin={admin}
          createButton="Nova Onu/Ont"
          thead={<Onu_Thead />}
          tbody={onu
            .sort(compareStatus)
            .filter((onu) => {
              if (onu.modelo.toLowerCase().includes(queryOnu.toLowerCase())) {
                return onu;
              } else if (onu.modulação.toLowerCase().includes(queryOnu.toLowerCase())) {
                return onu;
              } else {
              }
            })
            .map((onu) => {
              return (
                <tbody className="text-slate-700">
                  <tr
                    className={`border border-slate-100 hover:bg-slate-100 text-xs text-center whitespace-nowrap h-9 ${
                      selectedDevices.includes(onu.id) && "bg-orange-200 hover:bg-orange-300"
                    } ${onu.ocultar === "Sim" && !admin && "hidden"}`}>
                    <TableStart
                      handleProductSelect={() => handleProductSelect(onu.id)}
                      selectedDevicesLength={selectedDevices.length}
                      selectedDevicesIncludes={selectedDevices.includes(onu.id)}
                      status={onu.status}
                      modelo={onu.modelo}
                      ocultar={onu.ocultar}
                      calculateDateDifference={calculateDateDifference(onu.date, currentDate)}
                      handleSingleClick={() => handleSingleClick(onu)}
                    />
                    <td className="text-left">
                      <span className={ModulacaoStyle(onu)}>{onu.modulação}</span>
                    </td>
                    <td className="font-bold">{onu.fxs}</td>
                    <td>{onu.qtdeportas}</td>
                    <td>{onu.tipo}</td>
                    <td>{onu.sensibilidade}</td>
                    <td>{onu.cobertura}</td>
                    <td>{onu.clientesSimultaneos === "-" ? NaoPossui : onu.throughputWireless50}</td>
                    <td>{onu.transmissao2ghz}</td>
                    <td>{onu.transmissao5ghz}</td>
                    <td>{onu.ssid}</td>
                    <td>{onu.tr069}</td>
                    <td>{onu.customize}</td>
                    <td>{onu.remotize}</td>
                    <td>{onu.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={onu.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(onu)}>
                          <HiPencil />
                        </button>
                        <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(onu.id)}>
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