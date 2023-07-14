import ModalComponentCompare from "../ModalComponentCompare";
import {RadioContext} from "./Radio";
import React, {useContext} from "react";
import {FaPlug} from "react-icons/fa";
import {HiWifi, HiInformationCircle} from "react-icons/hi2";

function RadioCompare() {
  const {comparisonDevices, modalIsOpenCompare, closeModalCompare} = useContext(RadioContext);

  const groupIcons = {
    Wireless: HiWifi,
    "Informações Gerais": HiInformationCircle,
    Alimentação: FaPlug,
  };

  const propertyMappings = {
    modulação: {label: "Interface", group: "Informações Gerais"},
    indicado: {label: "Indicado", group: "Informações Gerais"},
    ganho: {label: "Ganho", group: "Informações Gerais"},
    potencia: {label: "Potência de Transmissão", group: "Informações Gerais"},
    pps: {label: "PPS", group: "Informações Gerais"},
    throughputEfetivoNominal: {label: "Throughput Efetivo e Nominal", group: "Wireless"},
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
      sector={"Rádio Outdoor"}
    />
  );
}

export default RadioCompare;
