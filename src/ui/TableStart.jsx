import React from "react";

function TableStart({
  handleProductSelect,
  selectedDevicesLength,
  selectedDevicesIncludes,
  status,
  modelo,
  ocultar,
  calculateDateDifference,
  handleSingleClick,
}) {
  return (
    <>
      <td>
        <div className="flex items-center gap-2">
          <input
            disabled={selectedDevicesLength >= 4 && !selectedDevicesIncludes}
            type="checkbox"
            className={`w-4 h-4 ml-1 text-[#00A335] focus:ring-green-500 rounded-sm ${
              selectedDevicesLength >= 4 && !selectedDevicesIncludes
                ? "border-slate-100 bg-slate-100 cursor-not-allowed"
                : "border-slate-300"
            }`}
            onChange={handleProductSelect}
            checked={selectedDevicesIncludes}
          />
          <div className={`${status === "Suporte" ? "bg-green-500" : "bg-red-500"} w-3 h-3 rounded-full`}></div>
        </div>
      </td>
      <td className="font-bold text-sm text-left text-black">
        <div className="flex items-center gap-1">
          <span className="underline cursor-pointer" onClick={handleSingleClick}>
            {modelo}
          </span>
          <span>{ocultar === "Sim" && <span className="uppercase border rounded border-black px-1 text-xs">Oculto</span>}</span>
          {calculateDateDifference <= 30 && <span className="rounded border border-green-500 text-green-500 px-2 text-xs">Novo</span>}
        </div>
      </td>
    </>
  );
}

export default TableStart;
