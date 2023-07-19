import ModalComponentCompare from "../ModalComponentCompare";
import {ConversorContext} from "./Conversor";
import React, {useContext} from "react";
import {FaPlug} from "react-icons/fa";
import {HiWifi, HiInformationCircle, HiComputerDesktop} from "react-icons/hi2";

function ConversorCompare() {
  const {comparisonDevices, modalIsOpenCompare, closeModalCompare} = useContext(ConversorContext);

  const groupIcons = {
    "Informações Gerais": HiInformationCircle,
  };

  const propertyMappings = {
    modulação: {label: "Modulação", group: "Informações Gerais"},
    fibra: {label: "Tipo da Fibra", group: "Informações Gerais"},
    garantia: {label: "Garantia", group: "Informações Gerais"},
    conector: {label: "Conector", group: "Informações Gerais"},
    CompRX: {label: "Comprimento Sinal RX", group: "Informações Gerais"},
    CompTX: {label: "Comprimento Sinal TX", group: "Informações Gerais"},
    potencia: {label: "Potência", group: "Informações Gerais"},
    sensibilidade: {label: "Sensibilidade Máx. | Mín.", group: "Informações Gerais"},
  };

  return (
    <ModalComponentCompare
      comparisonDevices={comparisonDevices}
      modalIsOpenCompare={modalIsOpenCompare}
      closeModalCompare={closeModalCompare}
      groupIcons={groupIcons}
      propertyMappings={propertyMappings}
      sector={"Conversor de Mídia"}
    />
  );
}

export default ConversorCompare;
