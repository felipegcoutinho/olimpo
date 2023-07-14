import {OlimpoBtnCateg} from "./OlimpoTextInput";
import React from "react";

function Tiles({setor, img, link}) {
  return (
    <div className="flex flex-col items-center justify-around p-2 dark:border-slate-900 dark:hover:border-itbs-default w-32 h-40">
      <div>
        <img src={img} alt={setor} className="w-24 h-24" />
      </div>
      <a href={link}>
        <div className="w-full flex justify-center">
          <OlimpoBtnCateg setor={setor} />
        </div>
      </a>
    </div>
  );
}

export default Tiles;
