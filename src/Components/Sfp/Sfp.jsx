import { AdminContext } from "../../App";
import CrudFirebase from "../../Database/crud";
import UseAux from "../../Hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/sfp.png";
import Content from "../../ui/Content";
import { OlimpoPageBtn } from "../../ui/OlimpoTextInput";
import OlimpoTable from "../../ui/Table";
import TableStart from "../../ui/TableStart";
import SfpCompare from "./SfpCompare";
import SfpModal from "./SfpModal";
import { Badge } from "flowbite-react";
import { React, useState, useEffect, useContext, createContext } from "react";
import { HiPencil, HiXMark } from "react-icons/hi2";
import Modal from "react-modal";

export const SfpContext = createContext();

export default function Sfp() {
  const { admin, HideSFP, setHideSFP, updatedProduct, setUpdatedProduct } = useContext(AdminContext);
  const [sfp, setSfp] = useState([]);
  const [querySfp, setQuerySfp] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const { fetchDevices, addDevices, deleteDevices, updateDevices } = CrudFirebase();
  const { compareStatus, Possui, NaoPossui, InterfaceStyle, calculateDateDifference, currentDate } = UseAux();
  const { Sfp_Header } = TableHead();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideSFP = () => setHideSFP(!HideSFP);
  const handleSearchChangeSfp = (e) => {
    setQuerySfp(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("sfp", setSfp);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "sfp");
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("sfp", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("sfp", setUpdatedProduct, updatedProduct, closeModal);
    fetchDevices("sfp", setSfp);
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
    const productsToCompare = sfp.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (ap) => {
    setComparisonDevices([ap]);
    openModalCompare();
  };

  const statusStyles = {
    SFP: "bg-orange-500 text-white ",
    "SFP+": "bg-blue-600 text-white",
    Epon: "bg-violet-600 text-white text-white",
    Gpon: "bg-emerald-500 text-white",
    XFP: "bg-zinc-600 dark:bg-white text-white dark:text-black",
  };

  return (
    <Content>
      <SfpContext.Provider
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
        <SfpModal />
        <SfpCompare />
      </SfpContext.Provider>

      <div id="modulo-sfp" className="overflow-x-auto">
        <OlimpoTable
          Hide={HideSFP}
          Device={"Módulo SFP"}
          DeviceImg={DeviceImg}
          DeviceText={"Permitem ampliar a rede para distâncias de até 10 km, garantindo mais velocidade e segurança na transmissão de dados."}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideSFP}
          openModal={openModal}
          query={querySfp}
          handleSearchChange={handleSearchChangeSfp}
          admin={admin}
          createButton="Novo Módulo SFP"
          thead={Sfp_Header}
          tbody={sfp
            .sort(compareStatus)
            .filter((sfp) => {
              if (sfp.modelo.toLowerCase().includes(querySfp.toLowerCase())) {
                return sfp;
              } else if (sfp.interface.toLowerCase().includes(querySfp.toLowerCase())) {
                return sfp;
              } else {
              }
            })
            .map((sfp) => {
              return (
                <TableStart
                  handleProductSelect={() => handleProductSelect(sfp.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(sfp.id)}
                  status={sfp.status}
                  modelo={sfp.modelo}
                  ocultar={sfp.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(sfp.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(sfp)}
                >
                  <td className="text-left px-2">
                    <span className={InterfaceStyle(sfp)}>{sfp.interface}</span>
                  </td>
                  <td>{sfp.tipoConector}</td>
                  <td className="px-4">{sfp.wdm === "-" ? NaoPossui : Possui}</td>
                  <td>
                    <div className={`flex justify-center w-12 rounded uppercase ${statusStyles[sfp.modulo]} `}>{sfp.modulo}</div>
                  </td>
                  <td>{sfp.distancia}</td>
                  <td>{sfp.fibra}</td>
                  <td>{sfp.potencia}</td>
                  <td>{sfp.sensibilidade}</td>
                  <td>{sfp.CompRX}</td>
                  <td>{sfp.CompTX}</td>
                  <td>{sfp.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={sfp.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td>
                      <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(sfp)}>
                        <HiPencil />
                      </button>
                      <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(sfp.id)}>
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
