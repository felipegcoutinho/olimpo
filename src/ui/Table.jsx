import {Button} from "flowbite-react";
import * as React from "react";
import {HiChevronDown, HiChevronUp, HiMagnifyingGlass} from "react-icons/hi2";

export default function OlimpoTable({
  tbody,
  thead,
  admin,
  openModal,
  createButton,
  query,
  handleSearchChange,
  handleHide,
  Hide,
  selectedDevices,
  handleCompareClick,
  Device,
}) {
  return (
    <section className="px-1 mx-auto lg:px-">
      <div className="relative overflow-hidden bg-white sm:rounded-lg">
        <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <button onClick={handleHide}>
            <div className="flex items-center gap-2">{Hide ? <HiChevronUp /> : <HiChevronDown />}</div>
          </button>
          <div className="flex items-center flex-1 space-x-4 text-3xl">{Device}</div>

          <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            {Hide && (
              <>
                {admin && (
                  <Button className="mr-auto bg-green-500 hover:bg-green-700" onClick={openModal}>
                    {createButton}
                  </Button>
                )}

                {selectedDevices.length <= 4 && (
                  <Button className="mr-auto bg-slate-500 hover:bg-slate-600" onClick={handleCompareClick}>
                    Comparar
                  </Button>
                )}

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HiMagnifyingGlass className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    value={query}
                    onChange={handleSearchChange}
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-green-500 focus:border-green-500  "
                    placeholder="Buscar Equipamentos"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        {Hide && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              {thead}
              {tbody}
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
