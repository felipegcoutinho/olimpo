import * as React from "react";
import { HiEye, HiEyeSlash, HiMagnifyingGlass } from "react-icons/hi2";

export default function OlimpoTable({
  tbody,
  thead,
  admin,
  openModal,
  createButton,
  query,
  handleSearchChange,
  Hide,
  selectedDevices,
  handleCompareClick,
  Device,
  DeviceImg,
  DeviceText,
  handleHide,
}) {
  return (
    <section className="px-1 mx-auto ">
      <div className="relative overflow-hidden">
        <div className="flex flex-col pt-4 pr-4 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <div className="flex flex-1 items-center">
            <img src={DeviceImg} alt={Device} className="w-20 h-20" />
            <div className="flex flex-col flex-1">
              <p className="text-2xl font-bold dark:text-white">
                {Device}
                <button onClick={handleHide}>
                  <div className="flex items-center ml-2">{Hide ? <HiEyeSlash /> : <HiEye />}</div>
                </button>
              </p>
              <p className="text-zinc-600 text-sm dark:text-white">{DeviceText}</p>
            </div>
          </div>

          <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            {Hide && (
              <>
                {admin && (
                  <button className="mr-auto bg-itbs-default hover:bg-itbs-hover rounded-full px-4 py-2 text-white text-sm" onClick={openModal}>
                    {createButton}
                  </button>
                )}

                {Device === "Switches" && (
                  <button className="mr-auto bg-slate-500 hover:bg-slate-600 rounded-full px-4 py-2 text-white text-sm">Gerenciável Com PoE</button>
                )}

                {selectedDevices.length <= 4 && (
                  <button className="mr-auto bg-slate-500 hover:bg-slate-600 rounded-full px-4 py-2 text-white text-sm" onClick={handleCompareClick}>
                    Comparar
                  </button>
                )}

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HiMagnifyingGlass className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 dark:border-green-900 rounded-lg w-60 bg-gray-50 dark:bg-itbs-modern-400 dark:text-white focus:ring-green-500 focus:border-green-500  "
                    placeholder="Buscar Equipamentos"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {Hide ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              {thead}
              {tbody.length > 0 ? (
                tbody
              ) : (
                <th colSpan="15" className="text-center py-4 italic">
                  Nenhum equipamento encontrado :(
                </th>
              )}
            </table>
          </div>
        ) : (
          <div className="flex justify-center items-center h-28 bg-slate-200 dark:bg-slate-800">
            <div className="flex text-slate-700 dark:text-slate-200 italic text-sm items-center gap-1">
              <HiEyeSlash /> Dados Ocultos
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
