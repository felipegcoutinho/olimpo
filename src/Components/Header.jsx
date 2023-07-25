import {AdminContext} from "../App";
import DarkModeToggle from "../Hooks/DarkModeToggle";
import ImgAp from "../assets/ap.png";
import ImgConv from "../assets/conversor.png";
import ImgHo from "../assets/ho.png";
import ImgOnt from "../assets/ont.png";
import ImgRadio from "../assets/radio.png";
import ImgSfp from "../assets/sfp.png";
import ImgSw from "../assets/sw.png";
import Tiles from "../ui/Tiles";
import LoginModal from "./LoginModal";
import React, {useState} from "react";
import {useContext} from "react";
import {HiMagnifyingGlass} from "react-icons/hi2";

export default function Header() {
  const {openModal, admin, email} = useContext(AdminContext);
  const [urlValue, setUrlValue] = useState("");
  const urlSearch = `https://www.intelbras.com/pt-br/busca/?q=${urlValue}&tipo_busca=pagina-resultado`;

  const handleSearch = (e) => {
    setUrlValue(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.open(urlSearch, "_blank");
    }
  };

  return (
    <div className="bg-[url('../assets/ttten.svg')] mb-2">
      <div className="flex justify-end px-4 text-slate-600 dark:text-white">
        <div className="flex gap-6 items-center">
          <p className="cursor-pointer hover:underline" onClick={openModal}>
            {admin ? email : "login"}
          </p>
          avisos
          <LoginModal />
          <DarkModeToggle />
        </div>
      </div>

      <div className="items-center flex flex-col">
        <div className="mt-20">
          <p className="text-itbs-default text-5xl font-[MuseoModerno] italic">Olimpo</p>
        </div>

        <div className="flex mt-10 items-center">
          <input
            type="text"
            className="rounded-lg backdrop-blur-[3px] bg-transparent text-black dark:text-white focus:ring-itbs-default focus:border-itbs-default border dark:border-itbs-default 
            text-center w-96 h-14"
            value={urlValue}
            placeholder="Pesquise em intelbras.com.br"
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
          />

          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            <button className="flex m-1 bg-itbs-default hover:bg-itbs-hover p-4 rounded text-white h-14">
              <HiMagnifyingGlass className="mr-1 text-2xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
