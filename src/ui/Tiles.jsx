import { OlimpoBtnCateg } from "./OlimpoInput";
import React from "react";

function Tiles({ setor, img, link }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-7 md:grid-cols-5 dark:border-slate-900 dark:hover:border-itbs-default">
      <a href={link} className="md:col-span-5 flex flex-col">
        <img src={img} alt={setor} className="w-full h-auto md:h-20 object-contain" />
        <div className="w-full h-full flex justify-center items-center backdrop-blur-[3px] bg-transparent mt-2">
          <OlimpoBtnCateg setor={setor} />
        </div>
      </a>
    </div>
  );
}

export default Tiles;
