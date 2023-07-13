import {AdminContext} from "../App";
import DarkModeToggle from "../Hooks/DarkModeToggle";
import LoginModal from "./LoginModal";
import {Button, TextInput} from "flowbite-react";
import React, {useState} from "react";
import {useContext} from "react";
import {HiAdjustments, HiCloudDownload, HiUserCircle} from "react-icons/hi";
import {HiLockClosed, HiLockOpen, HiXMark, HiMagnifyingGlass} from "react-icons/hi2";
import bgHeader from "../assets/ttten.svg"

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

  return (
    <div className="bg-[url('../assets/ttten.svg')]">
      <div className="flex">

     
      <div className="flex justify-start">
        <p><b>Aviso!</b> Este é um material para facilitar o acesso a informações dos principais equipamentos.
        <b> Sempre consulte a documentação oficial.</b></p>
      </div>

      <div className="text-sm px-2 flex gap-4 justify-end text-slate-800 dark:text-white items-center">
        <p>Avisos</p>
        <p>Login</p>
        <p><DarkModeToggle/></p>
      </div>
      </div>
      
      <div className="items-center flex flex-col">
        <div className="mt-20">
          <p className="text-itbs-default text-5xl">Olimpo!</p>
        </div>

        {/*  */}

        <div className="flex mt-10 items-center">
          <input
            type="text"
            className="rounded-lg bg-zinc-100 text-black dark:text-white text-lg font-bold focus:ring-itbs-default focus:border-itbs-default border-2 dark:border-itbs-default 
            text-center w-96 h-14 dark:bg-[#091111]"
            value={urlValue}
            placeholder="Pesquise em intelbras.com.br"
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
          />
                

          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            <button className="flex m-1 bg-itbs-default p-4 rounded text-white h-14 ">
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

        <div className="m-10">
          <Button.Group>
            <Button size="xl" color="gray" className="py-6">
              <HiUserCircle className="mr-3 h-4 w-4" />
              <p>Wi-Fi Empresarial</p>
            </Button>
            <Button size="xl" color="gray" className="py-6">
              <HiAdjustments className="mr-3 h-4 w-4" />
              <p>Radio Outdoor</p>
            </Button>
            <Button size="xl" color="gray" className="py-6">
              <HiCloudDownload className="mr-3 h-4 w-4" />
              <p>Home Office</p>
            </Button>
            <Button size="xl" color="gray" className="py-6">
              <HiUserCircle className="mr-3 h-4 w-4" />
              <p>Switch</p>
            </Button>
            <Button size="xl" color="gray" className="py-6">
              <HiAdjustments className="mr-3 h-4 w-4" />
              <p>Conversor de Mídia</p>
            </Button>
            <Button size="xl" color="gray" className="py-6">
              <HiCloudDownload className="mr-3 h-4 w-4" />
              <p>Módulo SFP</p>
            </Button>
            <Button size="xl" color="gray" className="py-6">
              <HiCloudDownload className="mr-3 h-4 w-4" />
              <p>Onu/Ont</p>
            </Button>
          </Button.Group>
          {/* <a href="#ap">
            <button className="btnCategory">Wi-Fi Empresarial</button>
          </a>
          <a href="#radio">
            <button className="btnCategory">Radio Outdoor</button>
          </a>
          <a href="#homeOffice">
            <button className="btnCategory">Home Office</button>
          </a>
          <a href="#switch">
            <button className="btnCategory">Switch</button>
          </a>
          <a href="#conversor">
            <button className="btnCategory">Conversor de Mídia</button>
          </a>
          <a href="#sfp">
            <button className="btnCategory">Módulo SFP</button>
          </a>
          <a href="#onu">
            <button className="btnCategory">Onu/Ont</button>
          </a> */}
        </div>
      </div>
    </div>
  );
}
