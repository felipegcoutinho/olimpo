import React, {useContext} from "react";
import ModalComponentCompare from "../ModalComponentCompare";
import {HiWifi, HiInformationCircle} from "react-icons/hi2";
import {FaPlug} from "react-icons/fa";
import {RadioContext} from "./Radio";

function RadioCompare() {
  const {comparisonDevices, modalIsOpenCompare, closeModalCompare} = useContext(RadioContext);

  const groupIcons = {
    Wireless: HiWifi,
    "Informações Gerais": HiInformationCircle,
    Alimentação: FaPlug,
  };

  const propertyMappings = {
    modulação: {label: "Modulação", group: "Informações Gerais"},
    indicado: {label: "Indicado", group: "Informações Gerais"},
    ganho: {label: "Ganho", group: "Informações Gerais"},
    potencia: {label: "Potencia", group: "Informações Gerais"},
    pps: {label: "PPS", group: "Informações Gerais"},
    throughputEfetivo: {label: "Throughput Efetivo", group: "Wireless"},
    throughputNominal: {label: "Throughput Nominal", group: "Wireless"},
    aberturaHorVer: {label: "Throughput 2.4GHz", group: "Wireless"},
    distancia: {label: "Distancia", group: "Wireless"},
    wireless: {label: "Wireless", group: "Wireless"},
    garantia: {label: "Garantia", group: "Informações Gerais"},
    alimentaçao: {label: "Alimentaçao", group: "Alimentação"},
  };

  return (
    <ModalComponentCompare
      comparisonDevices={comparisonDevices}
      modalIsOpenCompare={modalIsOpenCompare}
      closeModalCompare={closeModalCompare}
      groupIcons={groupIcons}
      propertyMappings={propertyMappings}
    />
  );
}

export default RadioCompare;
