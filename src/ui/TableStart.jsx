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
    <td>
      <div className="flex gap-2 items-center font-bold text-sm text-black">
        <div>
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
        </div>
        <div className={`${status === "Suporte" ? "bg-green-500" : "bg-red-500"} w-3.5 h-3.5 rounded-full`}></div>
        <div className="flex items-center">
          <p className="underline cursor-pointer" onClick={handleSingleClick}>
            {modelo}
          </p>
          <p>{ocultar === "Sim" && <span className=" ml-1 uppercase border rounded border-black px-1 text-xs">Oculto</span>}</p>
          {calculateDateDifference <= 30 && <p className="ml-1 uppercase rounded border border-red-500 text-red-500 px-1 text-xs">Novo</p>}
        </div>
      </div>
    </td>
  );
}

export default TableStart;
