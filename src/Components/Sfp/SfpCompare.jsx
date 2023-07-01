import React, {useContext} from "react";
import ModalComponentCompare from "../ModalCompare";
import {HiWifi, HiInformationCircle, HiComputerDesktop} from "react-icons/hi2";
import {FaPlug} from "react-icons/fa";
import {SfpContext} from "./Sfp";

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

  const groupedProperties = {};

  Object.entries(propertyMappings).forEach(([property, {label, group}]) => {
    if (!groupedProperties[group]) {
      groupedProperties[group] = [];
    }
    groupedProperties[group].push({property, label});
  });

  const gridSizeMapping = {
    1: {gridCols: "grid-cols-2", width: "w-1/2"},
    2: {gridCols: "grid-cols-3", width: "w-1/2"},
    3: {gridCols: "grid-cols-4", width: "w-2/3"},
    4: {gridCols: "grid-cols-5", width: "w-3/4"},
  };

  const comparisonDevicesLength = comparisonDevices.length;
  const {gridCols, width} = gridSizeMapping[comparisonDevicesLength] || {};

  return (
    <ModalComponentCompare modalIsOpen={modalIsOpenCompare} closeModal={closeModalCompare} width={width}>
      <div className="w-full overflow-x-auto">
        <div className="overflow-hidden min-w-max">
          <div className={`grid ${gridCols} py-4 text-sm font-medium text-gray-100 bg-slate-900 rounded-md border border-black`}>
            <div className="flex items-center px-4">Modelo</div>
            {comparisonDevices.map((ap) => (
              <div key={ap.id} className="flex items-center py-4">
                <div className={`${ap.status === "Suporte" ? "bg-green-500" : "bg-red-600"} w-3 h-3 rounded-full`}></div>
                <div className="rounded-lg p-2 w-full">
                  <div className="font-bold text-2xl underline">{ap.modelo}</div>
                </div>
              </div>
            ))}
          </div>

          {Object.entries(groupedProperties).map(([group, properties]) => {
            const Icon = groupIcons[group];

            return (
              <div key={group}>
                <div className={`${Icon} py-2 flex items-center text-xl gap-2 text-black font-bold border-b`}>
                  {Icon && <Icon />}
                  {group}
                </div>
                {properties.map(({property, label}) => (
                  <div
                    key={`${group}-${property}`}
                    className={`grid ${gridCols} py-2 text-sm text-gray-700 border-b border-slate-200 hover:bg-slate-200`}>
                    <div className="text-gray-500 px-2">{label}</div>
                    {comparisonDevices.map((ap) => (
                      <div key={ap.id}>
                        <p className="font-bold ">{ap[property]}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </ModalComponentCompare>
  );
}

export default SfpCompare;
