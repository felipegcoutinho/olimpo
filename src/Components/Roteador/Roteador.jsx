import {AdminContext} from "../../App";
import CrudFirebase from "../../Database/crud";
import UseAux from "../../Hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/ho.png";
import Content from "../../ui/Content";
import {OlimpoPageBtn} from "../../ui/OlimpoTextInput";
import OlimpoTable from "../../ui/Table";
import TableStart from "../../ui/TableStart";
import RoteadorCompare from "./RoteadorCompare";
import RoteadoresModal from "./RoteadorModal";
import {React, useState, useEffect, useContext, createContext} from "react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import Modal from "react-modal";

export const HOContext = createContext();

export default function Ap() {
  const {admin, HideHO, setHideHO, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [roteadorHO, setRoteadorHO] = useState([]);
  const [queryHO, setQueryHO] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, Possui, NaoPossui, ModulacaoStyle, calculateDateDifference, currentDate} =
    UseAux();
  const {Roteador_Header} = TableHead();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideHO = () => setHideHO(!HideHO);
  const handleSearchChangeHO = (e) => {
    setQueryHO(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("roteadorHO", setRoteadorHO);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "roteadorHO", fetchDevices);
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("roteadorHO", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("roteadorHO", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
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
    const productsToCompare = roteadorHO.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (ap) => {
    setComparisonDevices([ap]);
    openModalCompare();
  };

  return (
    <Content>
      <HOContext.Provider
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
        <RoteadoresModal />
        <RoteadorCompare />
      </HOContext.Provider>

      <div id="roteador" className="overflow-x-auto">
        <OlimpoTable
          Hide={HideHO}
          Device={"Roteadores"}
          DeviceImg={DeviceImg}
          DeviceText={"Wi-Fi para deixar todo o mundo conectado"}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideHO}
          openModal={openModal}
          query={queryHO}
          handleSearchChange={handleSearchChangeHO}
          admin={admin}
          createButton="Novo Roteador"
          thead={Roteador_Header}
          tbody={roteadorHO
            .sort(compareStatus)
            .filter((roteador) => {
              if (roteador.modelo.toLowerCase().includes(queryHO.toLowerCase())) {
                return roteador;
              } else if (roteador.modulação.toLowerCase().includes(queryHO.toLowerCase())) {
                return roteador;
              } else {
              }
            })
            .map((roteador) => {
              return (
                <TableStart
                  handleProductSelect={() => handleProductSelect(roteador.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(roteador.id)}
                  status={roteador.status}
                  modelo={roteador.modelo}
                  ocultar={roteador.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(roteador.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(roteador)}>
                  <td className="text-left">
                    <span className={ModulacaoStyle(roteador)}>{roteador.modulação}</span>
                  </td>
                  <td className="font-bold">{roteador.cobertura}</td>
                  <td>{roteador.raio}</td>
                  <td className="font-bold">{roteador.usuarioMax}</td>
                  <td>{roteador.planoRecomendado}</td>
                  <td className="font-bold">{roteador.datarateMax2G}</td>
                  <td>{roteador.datarateMax5G === "-" ? NaoPossui : roteador.datarateMax5G}</td>
                  <td className="font-bold">{roteador.tensao}</td>
                  <td>{roteador.repetidor === "-" ? NaoPossui : roteador.repetidor}</td>
                  <td className="font-bold">
                    {roteador.roteador === "-" ? NaoPossui : roteador.roteador}
                  </td>
                  <td>{roteador.cliente === "-" ? NaoPossui : roteador.cliente}</td>
                  <td className="font-bold">{roteador.ap === "-" ? NaoPossui : roteador.ap}</td>
                  <td className="text-center">{roteador.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={roteador.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td className="text-center">
                      <button
                        className="bg-yellow-300 p-1 rounded text-white"
                        onClick={() => openUpdateModal(roteador)}>
                        <HiPencil />
                      </button>
                      <button
                        className="bg-red-600 p-1 rounded text-white ml-2"
                        onClick={() => deleteDevice(roteador.id)}>
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
