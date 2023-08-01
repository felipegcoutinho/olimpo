import { AdminContext } from "../App";
import DarkModeToggle from "../Hooks/DarkModeToggle";
import ImgAp from "../assets/ap.png";
import ImgConv from "../assets/conversor.png";
import ImgHo from "../assets/ho.png";
import ImgOnt from "../assets/ont.png";
import ImgRadio from "../assets/radio.png";
import ImgSfp from "../assets/sfp.png";
import ImgSw from "../assets/sw.png";
import Tiles from "../ui/Tiles";
import AvisoModal from "./AvisoModal";
import LoginModal from "./LoginModal";
import React, { useState } from "react";
import { useContext } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
  const { openModal, admin, openModalAviso } = useContext(AdminContext);
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

  const setorTiles = {
    "Wi-Fi Empresarial": { link: "#wifi-empresarial", img: ImgAp },
    "Radio Outdoor": { link: "#radio-outdoor", img: ImgRadio },
    Switch: { link: "#switch", img: ImgSw },
    Roteador: { link: "#roteador", img: ImgHo },
    "Conversor de Midia": { link: "#conversor", img: ImgConv },
    "Módulo SFP": { link: "#modulo-sfp", img: ImgSfp },
    "Onu/Ont": { link: "#onu-ont", img: ImgOnt },
  };

  function handleSignOut() {
    localStorage.removeItem("admin");
    window.location.reload();
  }

  return (
    <div className="bg-[url('../assets/ttten.svg')] mb-2">
      <div id="top" className="flex justify-end px-4 text-slate-600 dark:text-white">
        <div className="flex gap-6 items-center">
          <p className="cursor-pointer hover:underline" onClick={openModal}>
            {!admin && "login"}
          </p>
          <LoginModal />
          {admin && (
            <p className="cursor-pointer hover:underline" onClick={handleSignOut}>
              <strong>logout</strong>
            </p>
          )}
          <p className="cursor-pointer hover:underline" onClick={openModalAviso}>
            avisos
          </p>
          <AvisoModal />
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
        <div className="flex flex-wrap gap-2 mt-10">
          {Object.entries(setorTiles).map(([setor, tiles]) => (
            <Tiles key={setor} img={tiles.img} setor={setor} link={tiles.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
