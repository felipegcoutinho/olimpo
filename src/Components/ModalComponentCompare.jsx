import {motion, AnimatePresence} from "framer-motion";
import React from "react";
import Modal from "react-modal";

function ModalComponentCompare({
  comparisonDevices,
  modalIsOpenCompare,
  closeModalCompare,
  groupIcons,
  propertyMappings,
  sector,
}) {
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Modal
      isOpen={modalIsOpenCompare}
      ariaHideApp={false}
      onRequestClose={closeModalCompare}
      className={`bg-white dark:bg-itbs-modern-200 rounded-lg h-[90%] ${width} inset-1/2 outline-none overflow-auto p-2 absolute -translate-x-1/2 -translate-y-1/2`}
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0 backdrop-blur-sm">
      {modalIsOpenCompare && (
        <div
          className="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden">
          <div className="w-full overflow-x-auto">
            <div className="overflow-hidden min-w-max">
              <div
                className={`grid ${gridCols} py-8 text-sm font-medium border-b border-itbs-default text-black dark:text-white rounded-sm bg-[url('../assets/ttten.svg')] dark:dark:bg-[url('../assets/dark_ttten.svg')]`}>
                <div className="flex items-center font-bold text-md px-2 w-max">{sector}</div>
                {comparisonDevices.map((device) => (
                  <div key={device.id} className={`flex items-center`}>
                    <div
                      className={`${
                        device.status === "Suporte"
                          ? "bg-green-500"
                          : device.status === "Phaseout"
                          ? "bg-red-500"
                          : "bg-amber-300"
                      } w-3 h-3 rounded-full`}></div>
                    <div className="rounded-lg p-2 w-full">
                      <div className="font-bold text-xl">{device.modelo}</div>
                    </div>
                  </div>
                ))}
              </div>

              {Object.entries(groupedProperties).map(([group, properties]) => {
                const Icon = groupIcons[group];
                return (
                  <div key={group}>
                    <div
                      className={`${Icon} py-2 flex items-center text-xl gap-2 text-itbs-default font-bold`}>
                      {Icon && <Icon />}
                      {group}
                    </div>
                    {properties.map(({property, label}) => (
                      <div
                        key={`${group}-${property}`}
                        className={`grid ${gridCols} py-2 text-sm border-b border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800`}>
                        <div className="text-slate-600 dark:text-slate-300 px-2">{label}</div>
                        {comparisonDevices.map((device) => (
                          <div key={device.id}>
                            <p className={`font-bold dark:text-slate-100`}>{device[property]}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default ModalComponentCompare;
