import React, {useEffect} from "react";
import {useState, useContext, createContext} from "react";
import Content from "../../ui/Content";
import {Badge} from "flowbite-react";
import {HiPencil, HiXMark} from "react-icons/hi2";
import {Sfp_Thead} from "../../TableHeads";
import OlimpoTable from "../../ui/Table";
import CrudFirebase from "../../Database/crud";
import Modal from "react-modal";
import UseAux from "../../Hooks/UseAux";
import DeviceImg from "../../assets/sfp.png";
import {AdminContext} from "../../App";
import SfpModal from "./SfpModal";
import SfpCompare from "./SfpCompare";
import TableStart from "../../ui/TableStart";

export const SfpContext = createContext();

export default function Sfp() {
  const {admin, HideSFP, setHideSFP, updatedProduct, setUpdatedProduct} = useContext(AdminContext);
  const [sfp, setSfp] = useState([]);
  const [querySfp, setQuerySfp] = useState("");
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
    deleteDevices(id, "sfp", fetchDevices);
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
    await updateDevices("sfp", setUpdatedProduct, updatedProduct, fetchDevices, closeModal);
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
        }}>
        <SfpModal />
        <SfpCompare />
      </SfpContext.Provider>

      <div className="overflow-x-auto">
        <OlimpoTable
          Hide={HideSFP}
          Device={"Módulo SFP"}
          DeviceImg={DeviceImg}
          DeviceText={
            "Permitem ampliar a rede para distâncias de até 10 km, garantindo mais velocidade e segurança na transmissão de dados."
          }
          selectedDevices={selectedDevices.length >= 2 && selectedDevices}
          handleCompareClick={handleCompareClick}
          handleHide={handleHideSFP}
          openModal={openModal}
          query={querySfp}
          handleSearchChange={handleSearchChangeSfp}
          admin={admin}
          createButton="Novo Módulo SFP"
          thead={<Sfp_Thead />}
          tbody={sfp
            .sort(compareStatus)
            .filter((sfp) => {
              if (sfp.modelo.toLowerCase().includes(querySfp.toLowerCase())) {
                return sfp;
              } else if (sfp.modulação.toLowerCase().includes(querySfp.toLowerCase())) {
                return sfp;
              } else {
              }
            })
            .map((sfp) => {
              return (
                <tbody className="text-slate-700">
                  <tr
                    className={`border border-slate-100 hover:bg-slate-100 text-xs text-center whitespace-nowrap h-9 ${
                      selectedDevices.includes(sfp.id) && "bg-orange-200 hover:bg-orange-300"
                    } ${sfp.ocultar === "Sim" && !admin && "hidden"}`}>
                    <TableStart
                      handleProductSelect={() => handleProductSelect(sfp.id)}
                      selectedDevicesLength={selectedDevices.length}
                      selectedDevicesIncludes={selectedDevices.includes(sfp.id)}
                      status={sfp.status}
                      modelo={sfp.modelo}
                      ocultar={sfp.ocultar}
                      calculateDateDifference={calculateDateDifference(sfp.date, currentDate)}
                      handleSingleClick={() => handleSingleClick(sfp)}
                    />
                    <td className="text-left">
                      <span className={ModulacaoStyle(sfp)}>{sfp.modulação}</span>
                    </td>
                    <td className="font-bold">{sfp.tipoConector}</td>
                    <td>{sfp.modulo}</td>
                    <td>{sfp.wdm}</td>
                    <td>{sfp.distancia}</td>
                    <td>{sfp.fibra}</td>
                    <td>{sfp.potencia}</td>
                    <td>{sfp.sensibilidade}</td>
                    <td>{sfp.CompRX}</td>
                    <td>{sfp.CompTX}</td>
                    <td>{sfp.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={sfp.pagina}>
                        <Badge size="xs" className="bg-green-500 text-white flex justify-center items-center">
                          Página
                        </Badge>
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
                  </tr>
                </tbody>
              );
            })}
        />
      </div>
    </Content>
  );
}