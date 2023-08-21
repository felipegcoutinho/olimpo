import { AdminContext } from "../../App";
import FirebaseActions from "../../database/firebase-actions";
import UseAux from "../../hooks/UseAux";
import TableHead from "../../TableHead";
import DeviceImg from "../../assets/qi5.png";
import Content from "../../ui/Content";
import { OlimpoPageBtn } from "../../ui/OlimpoInput";
import OlimpoTable from "../../ui/Table";
import TableModel from "../../ui/TableModel";
import AccessPointCompare from "./Qi5Compare";
import { React, useState, useEffect, useContext } from "react";
import { HiPencil, HiXMark } from "react-icons/hi2";
import Modal from "react-modal";
import AccessPointModal from "./Qi5Modal";

export default function Qi5() {
  const { admin, HideQi5, setHideQi5, updatedProduct, setUpdatedProduct } = useContext(AdminContext);
  const [Qi5, setQi5] = useState([]);
  const [queryQi5, setQueryQi5] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const { fetchDevices, addDevices, deleteDevices, updateDevices } = FirebaseActions();
  const { compareStatus, Possui, NaoPossui, InterfaceStyle, calculateDateDifference, currentDate } = UseAux();
  const { Qi5_Header } = TableHead();

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  const handleHideQi5 = () => setHideQi5(!HideQi5);
  const handleSearchChangeQi5 = (e) => {
    setQueryQi5(e.target.value);
  };

  //Busca os produtos no firebase
  useEffect(() => {
    fetchDevices("qi5", setQi5);
  }, []);

  //Adiciona os produtos no firebase
  const addDevice = async () => {
    await addDevices("qi5", fetchDevices, closeModal, setUpdatedProduct, updatedProduct);
    fetchDevices("qi5", setQi5);
  };

  //Deleta os produtos no firebase
  const deleteDevice = (id) => {
    deleteDevices(id, "qi5");
  };

  /* Abrir modal de atualização */
  const openUpdateModal = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setIsOpen(true);
  };

  /* Atualizar Produto */
  const updateDevice = async () => {
    await updateDevices("qi5", setUpdatedProduct, updatedProduct, closeModal);
    fetchDevices("qi5", setQi5);
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
    const productsToCompare = Qi5.filter((product) => selectedDevices.includes(product.id));
    setComparisonDevices(productsToCompare);
    openModalCompare();
  };

  const handleSingleClick = (qi5) => {
    setComparisonDevices([qi5]);
    openModalCompare();
  };

  return (
    <Content>
      <AccessPointModal
        addDevice={addDevice}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        setUpdatedProduct={setUpdatedProduct}
        updateDevice={updateDevice}
        updatedProduct={updatedProduct}
      />
      <AccessPointCompare closeModalCompare={closeModalCompare} comparisonDevices={comparisonDevices} modalIsOpenCompare={modalIsOpenCompare} />

      <div id="qi5" className="overflow-x-auto">
        <OlimpoTable
          Hide={HideQi5}
          Device={"5G"}
          DeviceImg={DeviceImg}
          DeviceText={"Conectividade através da rede 5G e WiFi 6 de alta tecnologia e performance."}
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideQi5}
          openModal={openModal}
          query={queryQi5}
          handleSearchChange={handleSearchChangeQi5}
          admin={admin}
          createButton="Novo 5G"
          thead={Qi5_Header}
          tbody={Qi5.sort(compareStatus)
            .filter((qi5) => {
              if (qi5.modelo.toLowerCase().includes(queryQi5.toLowerCase())) {
                return qi5;
              }
            })
            .map((qi5) => {
              return (
                <TableModel
                  handleProductSelect={() => handleProductSelect(qi5.id)}
                  selectedDevicesLength={selectedDevices.length}
                  selectedDevicesIncludes={selectedDevices.includes(qi5.id)}
                  status={qi5.status}
                  modelo={qi5.modelo}
                  ocultar={qi5.ocultar}
                  admin={admin}
                  calculateDateDifference={calculateDateDifference(qi5.date, currentDate)}
                  handleSingleClick={() => handleSingleClick(qi5)}
                >
                  <td className="text-left">
                    <span className={InterfaceStyle(qi5)}>{qi5.interface}</span>
                  </td>
                  <td>{qi5.cobertura}</td>
                  <td>{qi5.raio}</td>
                  <td>{qi5.usuarioMax}</td>
                  <td>{qi5.interfaceSim === "-" ? NaoPossui : qi5.interfaceSim}</td>
                  <td>{qi5.datarateMax2G}</td>
                  <td>{qi5.datarateMax5G === "-" ? NaoPossui : qi5.datarateMax5G}</td>
                  <td>{qi5.tensao}</td>
                  <td>{qi5.repetidor === "-" ? NaoPossui : Possui}</td>
                  <td>{qi5.roteador === "-" ? NaoPossui : Possui}</td>
                  <td>{qi5.cliente === "-" ? NaoPossui : Possui}</td>
                  <td>{qi5.ap === "-" ? NaoPossui : Possui}</td>
                  <td className="text-center">{qi5.garantia}</td>
                  <td>
                    <a target="_blank" rel="noopener noreferrer" href={qi5.pagina}>
                      <OlimpoPageBtn />
                    </a>
                  </td>
                  {admin && (
                    <td className="text-center">
                      <button className="bg-yellow-300 p-1 rounded text-white" onClick={() => openUpdateModal(qi5)}>
                        <HiPencil />
                      </button>
                      <button className="bg-red-600 p-1 rounded text-white ml-2" onClick={() => deleteDevice(qi5.id)}>
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
