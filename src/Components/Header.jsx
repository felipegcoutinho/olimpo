import { AdminContext } from "../App";
import DarkModeToggle from "../hooks/DarkModeToggle";
import ImgAp from "../assets/ap.png";
import ImgConv from "../assets/conversor.png";
import ImgHo from "../assets/twibi.png";
import ImgOnt from "../assets/ont.png";
import ImgQi5 from "../assets/qi5.png";
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
  const [logoutText, setLogoutText] = useState("sair");

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
    "5G": { link: "#qi5", img: ImgQi5 },
    Roteador: { link: "#roteador", img: ImgHo },
    "Conversor de Midia": { link: "#conversor", img: ImgConv },
    "Módulo SFP": { link: "#modulo-sfp", img: ImgSfp },
    "Onu/Ont": { link: "#onu-ont", img: ImgOnt },
  };

  function handleSignOut() {
    setLogoutText("saindo...");
    setTimeout(() => {
      localStorage.removeItem("admin");
      window.location.reload();
    }, 2000);
  }

  return (
    <div id="top" className="bg-[url('../assets/ttten.svg')] mb-2">
      <div className="flex justify-end px-4 text-slate-600 dark:text-white">
        <div className="flex gap-6 items-center">
          <p className="cursor-pointer hover:underline" onClick={openModal}>
            {!admin && "login"}
          </p>
          <LoginModal />
          {admin && (
            <p className="cursor-pointer hover:underline" onClick={handleSignOut}>
              <strong>{logoutText}</strong>
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

        <div className="relative mt-10">
          <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiMagnifyingGlass className="text-slate-500" />
          </div>
          <input
            type="text"
            value={urlValue}
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
            className="pl-10 text-center w-96 h-14 text-slate-500 placeholder:text-slate-500 border-b border-slate-400 backdrop-blur-sm bg-transparent dark:border-green-900 rounded-full dark:bg-itbs-modern-400 dark:text-white focus:ring-itbs-default focus:border-itbs-default"
            placeholder="Pesquise em intelbras.com.br"
          />
        </div>

        <div className="flex flex-wrap gap-1 mt-10 mb-2">
          {Object.entries(setorTiles).map(([setor, tiles]) => (
            <Tiles key={setor} img={tiles.img} setor={setor} link={tiles.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
