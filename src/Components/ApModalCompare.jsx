import React from "react";
import {useContext} from "react";
import {APContext} from "./Ap";
import ModalComponentCompare from "./ModalCompare";

function AP_ModalCompare() {
  const {comparisonDevices, modalIsOpenCompare, closeModalCompare} = useContext(APContext);

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

  const groupedProperties = {};

  Object.entries(propertyMappings).forEach(([property, {label, group}]) => {
    if (!groupedProperties[group]) {
      groupedProperties[group] = [];
    }
    groupedProperties[group].push({property, label});
  });

  let gridCols = "";
  let width = "";

  if (comparisonDevices.length === 2) {
    gridCols = "grid-cols-3";
    width = "w-1/2";
  } else if (comparisonDevices.length === 3) {
    gridCols = "grid-cols-4";
    width = "w-2/3";
  } else if (comparisonDevices.length === 4) {
    gridCols = "grid-cols-5";
    width = "w-3/4";
  }

  return (
    <ModalComponentCompare modalIsOpen={modalIsOpenCompare} closeModal={closeModalCompare} width={width}>
      <div className="w-full overflow-x-auto">
        <div className="overflow-hidden min-w-max">
          <div className={`grid ${gridCols} p-4 text-sm font-medium text-gray-900 bg-gray-100 `}>
            <div className="flex items-center"></div>
            {comparisonDevices.map((ap) => (
              <div className="flex justify-center flex-col items-start py-5">
                {/* <img className="h-40 w-40" src={ap.img}></img> */}
                <div className="rounded-lg border-black px-4 py-2 border-2">
                  <p className="font-bold text-xl">{ap.modelo}</p>
                </div>
              </div>
            ))}
          </div>

          {Object.entries(groupedProperties).map(([group, properties]) => (
            <div key={group}>
              <div className="py-2 px-1 text-black font-bold">{group}</div>
              {properties.map(({property, label}) => (
                <div className={`grid ${gridCols} py-2 text-sm text-gray-700 border-b border-gray-200`} key={property}>
                  <div className="text-gray-500 px-1 ">{label}</div>
                  {comparisonDevices.map((ap) => (
                    <div key={ap.id}>
                      <p className="font-bold">{ap[property]}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </ModalComponentCompare>
  );
}

export default AP_ModalCompare;
