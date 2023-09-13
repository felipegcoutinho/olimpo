import React from "react";
import { HiInformationCircle } from "react-icons/hi2";
import ModalComponentCompare from "../../ui/ModalComponentCompare";

function ConversorCompare({ comparisonDevices, modalIsOpenCompare, closeModalCompare }) {
  const groupIcons = {
    "Informações Gerais": HiInformationCircle,
  };

  const propertyMappings = {
    modulação: { label: "Modulação", group: "Informações Gerais" },
    fibra: { label: "Tipo da Fibra", group: "Informações Gerais" },
    garantia: { label: "Garantia", group: "Informações Gerais" },
    conector: { label: "Conector", group: "Informações Gerais" },
    CompRX: { label: "Comprimento Sinal RX", group: "Informações Gerais" },
    CompTX: { label: "Comprimento Sinal TX", group: "Informações Gerais" },
    potencia: { label: "Potência", group: "Informações Gerais" },
    sensibilidade: { label: "Sensibilidade Máx. | Mín.", group: "Informações Gerais" },
  };

  return (
    <ModalComponentCompare
      comparisonDevices={comparisonDevices}
      modalIsOpenCompare={modalIsOpenCompare}
      closeModalCompare={closeModalCompare}
      groupIcons={groupIcons}
      propertyMappings={propertyMappings}
      setor={"Conversor de Mídia"}
    />
  );
}

export default ConversorCompare;
