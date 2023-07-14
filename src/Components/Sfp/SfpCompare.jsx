import ModalComponentCompare from "../ModalComponentCompare";
import {SfpContext} from "./Sfp";
import React, {useContext} from "react";
import {FaPlug} from "react-icons/fa";
import {HiWifi, HiInformationCircle, HiComputerDesktop} from "react-icons/hi2";

function SfpCompare() {
  const {comparisonDevices, modalIsOpenCompare, closeModalCompare} = useContext(SfpContext);

  const groupIcons = {
    Wireless: HiWifi,
    "Informações Gerais": HiInformationCircle,
    "Software de Gerenciamento": HiComputerDesktop,
    Alimentação: FaPlug,
  };

  const propertyMappings = {
    modulação: {label: "Modulação", group: "Informações Gerais"},
    usuarioMax: {label: "Usuários simultâneos", group: "Informações Gerais"},
    qtdePortas: {label: "Quantidade de portas", group: "Informações Gerais"},
    handover: {label: "Handover", group: "Informações Gerais"},
    garantia: {label: "Garantia", group: "Informações Gerais"},
    cobertura: {label: "Cobertura", group: "Wireless"},
    raio: {label: "Raio", group: "Wireless"},
    throughputWireless24: {label: "Throughput 2.4GHz", group: "Wireless"},
    throughputWireless50: {label: "Throughput 5.0GHz", group: "Wireless"},
    potencia2G: {label: "Potência 2.4GHz", group: "Wireless"},
    potencia5G: {label: "Potência 5.0GHz", group: "Wireless"},
    inmaster: {label: "InMaster", group: "Software de Gerenciamento"},
    poe: {label: "PoE", group: "Alimentação"},
    tensao: {label: "Tensão", group: "Alimentação"},
  };

  return (
    <ModalComponentCompare
      comparisonDevices={comparisonDevices}
      modalIsOpenCompare={modalIsOpenCompare}
      closeModalCompare={closeModalCompare}
      groupIcons={groupIcons}
      propertyMappings={propertyMappings}
      sector="SFP"
    />
  );
}

export default SfpCompare;
