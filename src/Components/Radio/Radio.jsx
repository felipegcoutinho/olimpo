import React from "react";
import {useEffect, useState, useContext, createContext} from "react";
import {Radio_Thead} from "/src/TableHeads";
import RadioModal from "./RadioModal";
import {AdminContext} from "../../App";
import Modal from "react-modal";
import Content from "../../ui/Content";
import CrudFirebase from "../../Database/crud";
import OlimpoTable from "../../ui/Table";
import UseAux from "../../Hooks/UseAux";
import RadioModalCompare from "./RadioCompare";
import {Badge} from "flowbite-react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import DeviceImg from "../../assets/radio.png";

export const RadioContext = createContext();

export default function Radios() {
  const {admin, HideRADIO, setHideRADIO, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [RadiosOutdoor, setRadiosOutdoor] = useState([]);
  const [queryRADIO, setQueryRADIO] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const {fetchDevices, addDevices, deleteDevices, updateDevices} = CrudFirebase();
  const {compareStatus, ModulacaoStyle} = UseAux();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideRADIO = () => setHideRADIO(!HideRADIO);
  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("radios", setRadiosOutdoor);
  }, []);

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "radios", fetchDevices);
  };

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("radios", closeModal, fetchDevices, setUpdatedProduct, updatedProduct);
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("radios", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
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
    const productsToCompare = RadiosOutdoor.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (radio) => {
    setComparisonDevices([radio]);
    openModalCompare();
  };

  return (
    <Content>
      <RadioContext.Provider
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
        <RadioModal />
        <RadioModalCompare />
      </RadioContext.Provider>

      <div className="overflow-x-auto">
        <OlimpoTable
          Hide={HideRADIO}
          Device={"Rádios Outdoor"}
          DeviceImg={DeviceImg}
          DeviceText={"Equipamentos para conexões sem fio profissionais"}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideRADIO}
          openModal={openModal}
          query={queryRADIO}
          handleSearchChange={handleSearchChangeRADIO}
          admin={admin}
          createButton="Novo Rádio Outdoor"
          thead={<Radio_Thead />}
          tbody={RadiosOutdoor.sort(compareStatus)
            .filter((radio) => {
              if (radio.modelo.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else if (radio.modulação.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else {
              }
            })
            .map((radio) => {
              return (
                <tbody>
                  <tr
                    className={`border border-slate-100 hover:bg-slate-100 text-xs text-center whitespace-nowrap h-9 ${
                      selectedDevices.includes(radio.id) && "bg-orange-200 hover:bg-orange-300"
                    } ${radio.ocultar === "Sim" && !admin ? "hidden" : ""}`}>
                    <td>
                      <div className="flex items-center gap-2">
                        <input
                          disabled={selectedDevices.length >= 4 && !selectedDevices.includes(radio.id)}
                          type="checkbox"
                          className={`w-4 h-4 ml-1 text-[#00A335] focus:ring-green-500 rounded-sm ${
                            selectedDevices.length >= 4 && !selectedDevices.includes(radio.id)
                              ? "border-slate-100 bg-slate-100 cursor-not-allowed"
                              : "border-slate-300"
                          }`}
                          onChange={() => handleProductSelect(radio.id)}
                          checked={selectedDevices.includes(radio.id)}
                        />
                        <div className={`${radio.status === "Suporte" ? "bg-green-500" : "bg-red-500"} w-3 h-3 rounded-full`}></div>
                      </div>
                    </td>
                    <td className="font-bold text-sm text-left text-black pl-2">
                      <div className="flex items-center gap-1">
                        <span className="underline cursor-pointer" onClick={() => handleSingleClick(radio)}>
                          {radio.modelo}
                        </span>
                        <span>
                          {radio.ocultar === "Sim" && <span className="uppercase border rounded border-black px-1 text-xs">Oculto</span>}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={ModulacaoStyle(radio)}>{radio.modulação}</span>
                    </td>
                    <td className="font-bold">{radio.indicado}</td>
                    <td>{radio.ganho}</td>
                    <td>{radio.potencia}</td>
                    <td>{radio.pps}</td>
                    <td>{radio.throughputEfetivo}</td>
                    <td>{radio.throughputNominal}</td>
                    <td>{radio.aberturaHorVer}</td>
                    <td>{radio.distancia}</td>
                    <td>{radio.wireless}</td>
                    <td>{radio.alimentaçao}</td>
                    <td>{radio.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={radio.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
                      </a>
                    </td>
                    {admin && (
                      <td>
                        <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(radio)}>
                          <HiPencil />
                        </button>
                        <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(radio.id)}>
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
