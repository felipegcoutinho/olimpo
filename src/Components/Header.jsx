import {AdminContext} from "../App";
import DarkModeToggle from "../Hooks/DarkModeToggle";
import LoginModal from "./LoginModal";
import {Button, TextInput} from "flowbite-react";
import React, {useState} from "react";
import {useContext} from "react";
import {HiAdjustments, HiCloudDownload, HiUserCircle} from "react-icons/hi";
import {HiLockClosed, HiLockOpen, HiXMark, HiMagnifyingGlass} from "react-icons/hi2";
import bgHeader from "../assets/ttten.svg";
import Tiles from "../ui/Tiles";
import DeviceImg from "../assets/ap.png";

export default function Header() {
  const {openModal, admin} = useContext(AdminContext);
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
    1: {sector: "Wi-Fi Empresarial", link: "Informações Gerais"},
    2: {sector: "Radio Outdoor", link: "Informações Gerais"},
    3: {sector: "Switches", link: "Informações Gerais"},
    4: {sector: "Roteadores", link: "Wireless"},
    5: {sector: "Conversor de Midia", link: "Informações Gerais"},
    6: {sector: "Módulo SFP", link: "Wireless"},
    7: {sector: "Onu/Ont", link: "Wireless"},
  };

  return (
    <div className="bg-[url('../assets/ttten.svg')] dark:bg-[url('../assets/dark_ttten.svg')]">
      <div className="flex justify-between px-2 text-slate-600 dark:text-white">
        <div className="flex justify-start">
          {/* <p className="text-sm">
            <b>Aviso!</b> Este é um material para facilitar o acesso a informações dos principais equipamentos.
            <b> Sempre consulte a documentação oficial.</b>
          </p> */}
        </div>

        <div className="text-sm flex gap-4 items-center">
          <p>Login</p>
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

          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            <button className="flex m-1 bg-itbs-default p-4 rounded text-white h-14">
              <HiMagnifyingGlass className="mr-1 text-2xl" /> Buscar
            </button>
          </a>

          {urlValue !== "" && (
            <Button size="lg" color="light" className="p-1 m-1" onClick={() => setUrlValue("")}>
              <HiXMark className="mr-1" /> Limpar
            </Button>
          )}

          {/* <Button size="lg" color="dark" className="p-1 m-1" onClick={openModal}>
            {admin ? <HiLockOpen className="mr-1" /> : <HiLockClosed className="mr-1" />}
            Login
          </Button>
          <LoginModal /> */}
        </div>

        <div className="flex gap-2 mt-10">
          {Object.values(setorTiles).map((tiles) => (
            <Tiles img={DeviceImg} setor={tiles.sector} link={tiles.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
