import {HiCheckCircle, HiXCircle} from "react-icons/hi2";

function UseAux() {
  function compareStatus(a, b) {
    if (a.status === "Suporte" && b.status !== "Suporte") {
      return -1;
    } else if (a.status !== "Suporte" && b.status === "Suporte") {
      return 1;
    } else if (a.status === "Phaseout" && b.status !== "Phaseout") {
      return 1;
    } else if (a.status !== "Phaseout" && b.status === "Phaseout") {
      return -1;
    } else {
      if (a.modelo < b.modelo) {
        return -1;
      } else if (a.modelo > b.modelo) {
        return 1;
      }
      return 0;
    }
  }

  const NaoPossui = (
    <div className="flex justify-center items-center">
      <HiXCircle className="text-red-400 text-center text-2xl" />
    </div>
  );

  const Possui = (
    <div className="flex justify-center items-center">
      <HiCheckCircle className="text-green-400 text-center text-2xl" />
    </div>
  );

  function ModulacaoStyle(device) {
    const modulacaoClass = device.modulação === "Fast" ? "bg-orange-400" : "bg-green-400";
    return `${modulacaoClass} px-2 py-1 rounded-md uppercase font-bold text-white`;
  }

  return {compareStatus, NaoPossui, Possui, ModulacaoStyle};
}

export default UseAux;
