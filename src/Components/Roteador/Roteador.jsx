import React, {useEffect} from "react";
import {useState, useContext, createContext} from "react";
import {AdminContext} from "../../App";
import Content from "../../ui/Content";
import {Badge} from "flowbite-react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import AP_Thead, {Roteador_Thead} from "../../TableHeads";
import OlimpoTable from "../../ui/Table";
import CrudFirebase from "../../Database/crud";
import Modal from "react-modal";
import UseAux from "../../Hooks/UseAux";
import RoteadoresModal from "./RoteadorModal";
import RoteadorCompare from "./RoteadorCompare";
import DeviceImg from "../../assets/ho.png";

export const HOContext = createContext();

export default function Ap() {
  const {admin, HideHO, setHideHO, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [roteadorHO, setRoteadorHO] = useState([]);
  const [queryHO, setQueryHO] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, Possui, NaoPossui, ModulacaoStyle} = UseAux();

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

      <div className="overflow-x-auto">
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
          thead={<Roteador_Thead />}
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
                <tbody className="text-slate-600">
                  <tr
                    className={`border-b border-[#E6ECEE] hover:bg-slate-100 text-xs text-center whitespace-nowrap h-9 ${
                      selectedDevices.includes(roteador.id) && "bg-orange-100"
                    }`}>
                    <td>
                      <div className="flex items-center gap-2">
                        <input
                          disabled={selectedDevices.length >= 4 && !selectedDevices.includes(roteador.id)}
                          type="checkbox"
                          className={`w-4 h-4 ml-1 text-green-600 bg-gray-100 rounded focus:ring-green-500 ${
                            selectedDevices.length >= 4 && !selectedDevices.includes(roteador.id) ? "border-gray-100" : "border-gray-300"
                          }`}
                          onChange={() => handleProductSelect(roteador.id)}
                          checked={selectedDevices.includes(roteador.id)}
                        />
                        <div className={`${roteador.status === "Suporte" ? "bg-green-500" : "bg-red-500"} w-3 h-3 rounded-full`}></div>
                      </div>
                    </td>
                    <td className="font-bold text-sm text-left text-black pl-2" onClick={() => handleSingleClick(roteador)}>
                      <span className="underline cursor-pointer flex items-center gap-1">
                        {roteador.ocultar === "Sim" ? `${roteador.modelo} | Oculto` : roteador.modelo}
                      </span>
                    </td>
                    <td className="text-left">
                      <span className={ModulacaoStyle(roteador)}>{roteador.modulação}</span>
                    </td>
                    <td className="font-bold">{roteador.cobertura}</td>
                    <td>{roteador.raio}</td>
                    <td>{roteador.usuarioMax}</td>
                    <td>{roteador.planoRecomendado}</td>
                    <td>{roteador.qtdePortas}</td>
                    <td>{roteador.datarateMax2G}</td>
                    <td>{roteador.datarateMax5G}</td>
                    <td>{roteador.tensao}</td>
                    <td>{roteador.repetidor}</td>
                    <td>{roteador.roteador}</td>
                    <td>{roteador.cliente}</td>
                    <td>{roteador.ap}</td>
                    <td>{roteador.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={roteador.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(roteador)}>
                          <HiPencil />
                        </button>
                        <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(roteador.id)}>
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
