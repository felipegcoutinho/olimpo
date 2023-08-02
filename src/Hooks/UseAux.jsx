import { HiCheckCircle, HiXCircle } from "react-icons/hi2";

function UseAux() {
  function compareStatus(a, b) {
    if (a.status === "Ativo" && b.status !== "Ativo") {
      return -1;
    } else if (a.status !== "Ativo" && b.status === "Ativo") {
      return 1;
    } else if (a.status === "Descontinuado" && b.status !== "Descontinuado") {
      return 1;
    } else if (a.status !== "Descontinuado" && b.status === "Descontinuado") {
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
    <div className="flex items-center">
      <HiXCircle className="text-red-400 text-2xl" />
    </div>
  );

  const Possui = (
    <div className="flex items-center">
      <HiCheckCircle className="text-green-400 text-2xl" />
    </div>
  );

  function InterfaceStyle(device) {
    const modulacaoClass = device.interface === "Fast" ? "bg-orange-500 shadow-orange-500/50" : "bg-green-500 shadow-green-500/50";
    return `${modulacaoClass} px-3 py-1 rounded-2xl font-bold text-white shadow-sm`;
  }

  function calculateDateDifference(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Convert the date strings to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in days
    const diffInDays = Math.round(Math.abs((start - end) / oneDay));

    return diffInDays;
  }

  const currentDate = new Date().toLocaleDateString("en-US");

  const statusStyles = {
    Ativo: "bg-lime-600 shadow-green-400/50",
    Descontinuado: "bg-red-600 shadow-red-400/50",
    Estendido: "bg-amber-400 shadow-amber-400/50",
  };

  return { compareStatus, NaoPossui, Possui, InterfaceStyle, calculateDateDifference, currentDate, statusStyles };
}

export default UseAux;
