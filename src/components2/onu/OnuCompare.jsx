import ModalComponentCompare from "../ModalComponentCompare";
import React from "react";
import { FaPlug } from "react-icons/fa";
import { HiWifi, HiInformationCircle, HiComputerDesktop } from "react-icons/hi2";

function OnuCompare({ comparisonDevices, modalIsOpenCompare, closeModalCompare }) {
  const groupIcons = {
    Wireless: HiWifi,
    "Informações Gerais": HiInformationCircle,
    Gerenciamento: HiComputerDesktop,
    Alimentação: FaPlug,
  };

  const propertyMappings = {
    modulação: { label: "Modulação", group: "Informações Gerais" },
    fxs: { label: "FXS", group: "Informações Gerais" },
    qtdeportas: { label: "Quantidade de portas", group: "Informações Gerais" },
    tipo: { label: "Tipo", group: "Informações Gerais" },
    sensibilidade: { label: "Sensibilidade", group: "Informações Gerais" },
    cobertura: { label: "Cobertura", group: "Wireless" },
    clientesSimultaneos: { label: "Usuários simultâneos", group: "Informações Gerais" },
    transmissao2ghz: { label: "Transmissão 2.4GHz", group: "Wireless" },
    transmissao5ghz: { label: "Transmissão 5.0GHz", group: "Wireless" },
    ssid: { label: "Qtde SSID", group: "Wireless" },
    tr069: { label: "TR069", group: "Gerenciamento" },
    customize: { label: "Customize", group: "Gerenciamento" },
    remotize: { label: "Remotize", group: "Gerenciamento" },
    garantia: { label: "Garantia", group: "Informações Gerais" },
  };

  return (
    <ModalComponentCompare
      comparisonDevices={comparisonDevices}
      modalIsOpenCompare={modalIsOpenCompare}
      closeModalCompare={closeModalCompare}
      groupIcons={groupIcons}
      propertyMappings={propertyMappings}
      setor="Onu/Ont"
    />
  );
}

export default OnuCompare;
