import React from "react";
import ap from "../assets/ap.png";

function Tiles({setor, img, link}) {
  return (
    <a href={link}>
      <div className="w-36 h-40 bg-slate-50 bg-opacity-10 backdrop-blur-[2px]  border-slate-600 rounded-lg hover:border-2 hover:border-itbs-default flex flex-col items-center justify-around">
        <div>
          <img src={img} className="w-24 h-24" />
        </div>
        <div className="bg-itbs-default w-full h-10 flex items-center justify-center">
          <p className="text-sm text-white">{setor}</p>
        </div>
      </div>
    </a>
  );
}

export default Tiles;
