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
import {Button} from "flowbite-react";
import React, {useState} from "react";
import {useContext} from "react";
import {HiXMark, HiMagnifyingGlass} from "react-icons/hi2";

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
  const setorTiles = {
    1: {sector: "Wi-Fi Empresarial", link: "#wifi-empresarial", img: ImgAp},
    2: {sector: "Radio Outdoor", link: "#radio-outdoor", img: ImgRadio},
    3: {sector: "Switches", link: "#switch", img: ImgSw},
    4: {sector: "Roteadores", link: "#roteador", img: ImgHo},
    5: {sector: "Conversor de Midia", link: "#conversor", img: ImgConv},
    6: {sector: "Módulo SFP", link: "#modulo-sfp", img: ImgSfp},
    7: {sector: "Onu/Ont", link: "#onu-ont", img: ImgOnt},
  };

  return (
    <div className="bg-[url('../assets/ttten.svg')] dark:bg-[url('../assets/dark_ttten.svg')]">
      <div className="flex justify-end px-2 text-slate-600 dark:text-white">
        <div className="text-sm flex gap-4 items-center">
          <p className="cursor-pointer" onClick={openModal}>
            {admin ? `Logado como ${email}` : "Login"}
          </p>
          <LoginModal />
          <p>
            <DarkModeToggle />
          </p>
        </div>
      </div>

      <div className="items-center flex flex-col">
        <div className="mt-20">
          <p className="text-itbs-default text-5xl">Olimpo!</p>
        </div>

        <div className="flex mt-10 items-center">
          <input
            type="text"
            className="rounded-lg backdrop-blur-[2px] bg-transparent text-black dark:text-white focus:ring-itbs-default focus:border-itbs-default border dark:border-itbs-default 
            text-center w-96 h-14"
            value={urlValue}
            placeholder="Pesquise em intelbras.com.br"
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
          />

          {urlValue !== "" && (
            <Button size="lg" color="light" className="p-1 m-1" onClick={() => setUrlValue("")}>
              <HiXMark className="mr-1" />
            </Button>
          )}

          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            <button className="flex m-1 bg-itbs-default hover:bg-itbs-hover p-4 rounded text-white h-14">
              <HiMagnifyingGlass className="mr-1 text-2xl" /> Buscar
            </button>
          </a>
        </div>

        <div className="flex gap-2 mt-10">
          {Object.values(setorTiles).map((tiles) => (
            <Tiles img={tiles.img} setor={tiles.sector} link={tiles.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
