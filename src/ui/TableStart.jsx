import React from "react";
import {HiChevronUp} from "react-icons/hi2";

function TableStart({
  handleProductSelect,
  selectedDevicesLength,
  selectedDevicesIncludes,
  status,
  modelo,
  ocultar,
  calculateDateDifference,
  handleSingleClick,
  children,
  admin,
}) {
  return (
    <tbody className="text-slate-700 dark:text-slate-200">
      <tr
        className={`border border-slate-100 dark:border-slate-800 border-t-0 hover:bg-slate-300 dark:hover:bg-orange-900 text-xs whitespace-nowrap h-9 ${
          selectedDevicesIncludes && "bg-orange-200 dark:bg-orange-700"
        } ${ocultar === "Sim" && !admin && "hidden"}`}>
        <td>
          <div className="flex gap-2 items-center font-bold text-sm text-black dark:text-white">
            <div>
              <input
                disabled={selectedDevicesLength >= 4 && !selectedDevicesIncludes}
                type="checkbox"
                className={`w-4 h-4 ml-1 text-itbs-default focus:ring-green-500 rounded-sm ${
                  selectedDevicesLength >= 4 && !selectedDevicesIncludes
                    ? "border-slate-100 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 cursor-not-allowed"
                    : "border-slate-300 dark:border-slate-600 dark:bg-slate-800"
                }`}
                onChange={handleProductSelect}
                checked={selectedDevicesIncludes}
              />
            </div>
            <div
              className={`${
                status === "Suporte"
                  ? "bg-green-500 shadow-green-400/50"
                  : status === "Phaseout"
                  ? "bg-red-500 shadow-red-400/50"
                  : "bg-amber-300 shadow-amber-400/50"
              } w-3 h-3 rounded-full shadow-sm`}></div>
            <div className="flex items-center">
              <p
                className="underline cursor-pointer flex items-center gap-1"
                onClick={handleSingleClick}>
                {modelo}
                <HiChevronUp className="text-slate-600 dark:text-slate-200" />
              </p>
              <p>
                {ocultar === "Sim" && (
                  <span className=" ml-1 uppercase border rounded border-black px-1 text-xs">
                    Oculto
                  </span>
                )}
              </p>
              {calculateDateDifference <= 30 && (
                <p className="ml-1 uppercase rounded border border-red-500 text-red-500 px-1 text-xs">
                  Novo
                </p>
              )}
            </div>
          </div>
        </td>
        {children}
      </tr>
    </tbody>
  );
}

export default TableStart;
