import React from "react";

function Tiles({ setor, img }) {
  return (
    <div className="grid dark:border-slate-900 dark:hover:border-itbs-default mx-4 mb-4">
      <img src={img} alt={setor} className="w-full h-24 object-contain" />
      <button className="text-sm font-bold w-full px-4 py-2 backdrop-blur-[1px] border border-itbs-default text-itbs-default hover:text-white hover:bg-itbs-default rounded-full">
        {setor}
      </button>
    </div>
  );
}

export default Tiles;
