import ModalComponentCompare from "../ModalComponentCompare";
import React from "react";
import { FaPlug } from "react-icons/fa";
import { HiWifi, HiInformationCircle, HiComputerDesktop } from "react-icons/hi2";

function Qi5Compare({ comparisonDevices, modalIsOpenCompare, closeModalCompare }) {
  const groupIcons = {
    Wireless: HiWifi,
    "Informações Gerais": HiInformationCircle,
    Alimentação: FaPlug,
    "Modo de Funcionamento": HiComputerDesktop,
  };

  const propertyMappings = {
    modulação: { label: "Modulação", group: "Informações Gerais" },
    cobertura: { label: "Cobertura", group: "Informações Gerais" },
    qtdePortas: { label: "Quantidade de Portas", group: "Informações Gerais" },
    raio: { label: "Raio", group: "Informações Gerais" },
    usuarioMax: { label: "Usuários simultâneos", group: "Informações Gerais" },
    planoRecomendado: { label: "Plano Recomendado", group: "Informações Gerais" },
    datarateMax2G: { label: "Datarate Máx. 2.4GHz", group: "Wireless" },
    datarateMax5G: { label: "Datarate Máx. 5.0GHz", group: "Wireless" },
    repetidor: { label: "Modo Repetidor", group: "Modo de Funcionamento" },
    roteador: { label: "Modo Roteador", group: "Modo de Funcionamento" },
    cliente: { label: "Modo Cliente", group: "Modo de Funcionamento" },
    ap: { label: "Modo AP", group: "Modo de Funcionamento" },
    tensao: { label: "Tensão", group: "Alimentação" },
    garantia: { label: "Garantia", group: "Informações Gerais" },
  };

  return (
    <ModalComponentCompare
      comparisonDevices={comparisonDevices}
      modalIsOpenCompare={modalIsOpenCompare}
      closeModalCompare={closeModalCompare}
      groupIcons={groupIcons}
      propertyMappings={propertyMappings}
      setor="5G"
    />
  );
}

export default Qi5Compare;
