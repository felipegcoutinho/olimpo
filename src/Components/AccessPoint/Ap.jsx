import React, {useEffect} from "react";
import {useState, useContext, createContext} from "react";
import Ap_Modal from "./ApModal";
import {AdminContext} from "../../App";
import Content from "../../ui/Content";
import {Badge} from "flowbite-react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import AP_Thead from "../../TableHeads";
import OlimpoTable from "../../ui/Table";
import CrudFirebase from "../../Database/crud";
import Modal from "react-modal";
import UseAux from "../../Hooks/UseAux";
import DeviceImg from "../../assets/ap.png";
import ApCompare from "./ApCompare";
import TableStart from "../../ui/TableStart";

export const APContext = createContext();

export default function Ap() {
  const {admin, HideAP, setHideAP, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [accessPoint, setAccessPoint] = useState([]);
  const [queryAP, setQueryAP] = useState("");
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
    const productsToCompare = accessPoint.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (ap) => {
    setComparisonDevices([ap]);
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
        <ApCompare />
      </APContext.Provider>

      <div className="overflow-x-auto">
        <OlimpoTable
          Hide={HideAP}
          Device={"Access Points"}
          DeviceImg={DeviceImg}
          DeviceText={"Wi-Fi de alta performance para ambientes profissionais e diversas necessidades."}
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
                <tbody className="text-slate-700">
                  <tr
                    className={`border border-slate-100 hover:bg-slate-100 text-xs whitespace-nowrap h-9 ${
                      selectedDevices.includes(ap.id) && "bg-orange-200"
                    } ${ap.ocultar === "Sim" && !admin && "hidden"}`}>
                    <TableStart
                      handleProductSelect={() => handleProductSelect(ap.id)}
                      selectedDevicesLength={selectedDevices.length}
                      selectedDevicesIncludes={selectedDevices.includes(ap.id)}
                      status={ap.status}
                      modelo={ap.modelo}
                      ocultar={ap.ocultar}
                      calculateDateDifference={calculateDateDifference(ap.date, currentDate)}
                      handleSingleClick={() => handleSingleClick(ap)}
                    />
                    <td>
                      <span className={ModulacaoStyle(ap)}>{ap.modulação}</span>
                    </td>
                    <td className="font-bold">{ap.cobertura}</td>
                    <td>{ap.raio}</td>
                    <td className="font-bold">{ap.usuarioMax}</td>
                    <td>{ap.throughputWireless24}</td>
                    <td className="font-bold">{ap.throughputWireless50 === "-" ? NaoPossui : ap.throughputWireless50}</td>
                    <td>{ap.padrao}</td>
                    <td>{ap.qtdePortas}</td>
                    <td className="font-bold">{ap.tensao}</td>
                    <td>{ap.poe}</td>
                    <td className="font-bold">{ap.handover === "-" ? NaoPossui : Possui}</td>
                    <td>{ap.inmaster === "Não" ? NaoPossui : Possui}</td>
                    <td className="font-bold">{ap.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={ap.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
                      </a>
                    </td>
                    {admin && (
                      <td className="text-center">
                        <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(ap)}>
                          <HiPencil />
                        </button>
                        <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(ap.id)}>
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
