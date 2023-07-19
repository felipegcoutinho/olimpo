import ModalComponentCompare from "../ModalComponentCompare";
import {SwContext} from "./Switch";
import React, {useContext} from "react";
import {FaPlug} from "react-icons/fa";
import {HiWifi, HiInformationCircle, HiComputerDesktop} from "react-icons/hi2";

function SwitchCompare() {
  const {comparisonDevices, modalIsOpenCompare, closeModalCompare} = useContext(SwContext);

  const groupIcons = {
    Wireless: HiWifi,
    "Informações Gerais": HiInformationCircle,
    "Software de Gerenciamento": HiComputerDesktop,
    Alimentação: FaPlug,
  };

  const propertyMappings = {
    modulação: {label: "Modulação", group: "Informações Gerais"},
    qtdePortas: {label: "Qtde de portas", group: "Informações Gerais"},
    gerenciavel: {label: "Gerenciavel", group: "Informações Gerais"},
    poe : {label: "PoE", group: "Informações Gerais"},
    pps: {label: "PPS", group: "Informações Gerais"},
    backplane: {label: "Backplane", group: "Informações Gerais"},
    sfp: {label: "SFP", group: "Informações Gerais"},
    poeExtender: {label: "PoE Extender", group: "PoE"},
    poePorta: {label: "PoE por Porta", group: "PoE"},
    poeTotal: {label: "PoE Total", group: "PoE"},
    qos: {label: "QoS", group: "Informações Gerais"},
    garantia: {label: "Garantia", group: "Informações Gerais"},
  };

  return (
    <ModalComponentCompare
      comparisonDevices={comparisonDevices}
      modalIsOpenCompare={modalIsOpenCompare}
      closeModalCompare={closeModalCompare}
      groupIcons={groupIcons}
      propertyMappings={propertyMappings}
      sector="Switch"
    />
  );
}

export default SwitchCompare;
