import * as React from "react";
import { HiEye, HiEyeSlash, HiMagnifyingGlass, HiOutlineXCircle } from "react-icons/hi2";

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
  PoE,
  handleSemPoE,
  SemPoE,
  Gerenciavel,
  handlePoE,
  handleGerenciavel,
  handleNaoGerenciavel,
  NaoGerenciavel,
}) {
  const getButtonClasses = (isDisabled, isActive) => {
    const baseClasses = "flex items-center gap-1 mr-auto rounded-full px-5 py-1 text-slate-600 dark:text-white text-sm";
    if (isDisabled) {
      return `${baseClasses} cursor-not-allowed bg-slate-100 text-slate-200 text-opacity-30 dark:bg-slate-900 dark:text-slate-800`;
    } else {
      return `${baseClasses} ${
        isActive
          ? "bg-slate-800 border border-slate-800 text-white dark:border-itbs-default"
          : "bg-transparent border border-slate-600 dark:border-white"
      } hover:bg-slate-800 hover:text-white`;
    }
  };

  const IconX = <HiOutlineXCircle className="text-lg text-slate-200" />;

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
                {Device === "Switch" && (
                  <>
                    <button onClick={SemPoE ? null : handlePoE} className={getButtonClasses(SemPoE, PoE)}>
                      PoE Ativo {PoE && IconX}
                    </button>

                    <button onClick={PoE ? null : handleSemPoE} className={getButtonClasses(PoE, SemPoE)}>
                      Sem PoE {SemPoE && IconX}
                    </button>

                    <button onClick={NaoGerenciavel ? null : handleGerenciavel} className={getButtonClasses(NaoGerenciavel, Gerenciavel)}>
                      Gerenciável {Gerenciavel && IconX}
                    </button>

                    <button onClick={Gerenciavel ? null : handleNaoGerenciavel} className={getButtonClasses(Gerenciavel, NaoGerenciavel)}>
                      Não Gerenciável {NaoGerenciavel && IconX}
                    </button>
                  </>
                )}

                {admin && (
                  <button className="mr-auto bg-itbs-default hover:bg-itbs-hover rounded-full px-4 py-2 text-white text-sm" onClick={openModal}>
                    {createButton}
                  </button>
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
                    className="p-2 pl-10 text-sm text-slate-500 placeholder:text-slate-500 border border-slate-400 bg-slate-50 dark:border-green-900 rounded-full w-60 dark:bg-itbs-modern-400 dark:text-white focus:border-itbs-default focus:ring-itbs-default"
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
