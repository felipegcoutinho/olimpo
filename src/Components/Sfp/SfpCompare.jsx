import ModalComponentCompare from "../ModalComponentCompare";
import {SfpContext} from "./Sfp";
import React, {useContext} from "react";
import {HiInformationCircle, HiRocketLaunch} from "react-icons/hi2";

function SfpCompare() {
  const {comparisonDevices, modalIsOpenCompare, closeModalCompare} = useContext(SfpContext);

  const groupIcons = {
    "Informações Gerais": HiInformationCircle,
    Fibra: HiRocketLaunch,
  };

  const propertyMappings = {
    modulação: {label: "Modulação", group: "Informações Gerais"},
    tipoConector: {label: "Tipo de conector", group: "Fibra"},
    wdm: {label: "WDM", group: "Fibra"},
    garantia: {label: "Garantia", group: "Informações Gerais"},
    modulo: {label: "Módulo", group: "Informações Gerais"},
    distancia: {label: "Distância", group: "Informações Gerais"},
    fibra: {label: "Fibra", group: "Fibra"},
    potencia: {label: "Potência", group: "Informações Gerais"},
    sensibilidade: {label: "Sensibilidade Máx. Mín.", group: "Informações Gerais"},
    CompRX: {label: "Comp. RX", group: "Informações Gerais"},
    CompTX: {label: "Comp. TX", group: "Informações Gerais"},
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
