import { AdminContext } from "../../App";
import FirebaseActions from "../../database/firebase-actions";
import UseAux from "../../hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/radio.png";
import Content from "../../ui/Content";
import { OlimpoPageBtn } from "../../ui/OlimpoInput";
import OlimpoTable from "../../ui/Table";
import TableModel from "../../ui/TableModel";
import RadioModalCompare from "./RadioCompare";
import RadioModal from "./RadioModal";
import { React, useState, useEffect, useContext } from "react";
import { HiPencil, HiXMark } from "react-icons/hi2";
import Modal from "react-modal";

export default function Radio() {
  const { admin, HideRADIO, setHideRADIO, updatedProduct, setUpdatedProduct } = useContext(AdminContext);
  const [RadiosOutdoor, setRadiosOutdoor] = useState([]);
  const [queryRADIO, setQueryRADIO] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const { fetchDevices, addDevices, deleteDevices, updateDevices } = FirebaseActions();
  const { compareStatus, InterfaceStyle, calculateDateDifference, currentDate } = UseAux();
  const { Radio_Header } = TableHead();

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
    deleteDevices(id, "radios");
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
    await updateDevices("radios", setUpdatedProduct, updatedProduct, closeModal);
    fetchDevices("radios", setRadiosOutdoor);
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
      <RadioModal
        addDevice={addDevice}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        setUpdatedProduct={setUpdatedProduct}
        updateDevice={updateDevice}
        updatedProduct={updatedProduct}
      />
      <RadioModalCompare closeModalCompare={closeModalCompare} comparisonDevices={comparisonDevices} modalIsOpenCompare={modalIsOpenCompare} />

      <div id="radio-outdoor" className="overflow-x-auto">
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
          thead={Radio_Header}
          tbody={RadiosOutdoor.sort(compareStatus)
            .filter((radio) => {
              if (radio.modelo.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else if (radio.interface.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else {
              }
            })
            .map((radio) => {
              return (
                <TableModel
                  handleProductSelect={() => handleProductSelect(radio.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(radio.id)}
                  status={radio.status}
                  modelo={radio.modelo}
                  ocultar={radio.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(radio.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(radio)}
                >
                  <td>
                    <span className={InterfaceStyle(radio)}>{radio.interface}</span>
                  </td>
                  <td>{radio.indicado}</td>
                  <td>{radio.ganho}</td>
                  <td>{radio.potencia}</td>
                  <td>{radio.pps}</td>
                  <td>{radio.throughputEfetivoNominal}</td>
                  <td>{radio.aberturaHorVer}</td>
                  <td>{radio.distancia}</td>
                  <td>{radio.wireless}</td>
                  <td>{radio.alimentaçao}</td>
                  <td>{radio.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={radio.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td className="text-center">
                      <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(radio)}>
                        <HiPencil />
                      </button>
                      <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(radio.id)}>
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
