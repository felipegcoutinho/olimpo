import React, {useState} from "react";
import {useContext} from "react";
import {AdminContext} from "../App";
import LoginModal from "./LoginModal";
import {Button, TextInput} from "flowbite-react";
import {HiLockClosed, HiLockOpen, HiXMark, HiMagnifyingGlass} from "react-icons/hi2";
import {HiAdjustments, HiCloudDownload, HiUserCircle} from "react-icons/hi";
import TableTeste from "../ui/Table";

export default function Header() {
  const {openModal, admin} = useContext(AdminContext);
  const [urlValue, setUrlValue] = React.useState("");
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
    <div>
      {/* <div className="bg-white" id="home">
        <b>Aviso!</b> Este é um material para facilitar o acesso a informações dos principais equipamentos.
        <b> Sempre consulte a documentação oficial.</b>
      </div> */}
      <div className="items-center flex flex-col" id="home">
        <div className="mt-20">
          <p className="text-green-500 text-5xl font-[pacifico]">Olimpo!</p>
        </div>

        <div className="flex mt-10 items-center">
          <TextInput
            sizing="lg"
            type="text"
            className="rounded-sm text-black text-lg font-bold text-center w-96 focus:ring-red-500"
            value={urlValue}
            placeholder="Pesquise em intelbras.com.br"
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
          />

          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            {/* {urlValue !== "" && ( */}
            <Button size="lg" color="success" className="p-1 m-1">
              <HiMagnifyingGlass className="mr-1 text-2xl" />
            </Button>
          </a>

          {urlValue !== "" && (
            <Button size="lg" color="light" className="p-1 m-1" onClick={() => setUrlValue("")}>
              <HiXMark className="mr-1" /> Limpar
            </Button>
          )}

          {/* <Button size="lg" color="dark" className="p-1 m-1" onClick={openModal}>
            {admin ? <HiLockOpen className="mr-1" /> : <HiLockClosed className="mr-1" />}
            Logar
          </Button> */}

          <LoginModal />
        </div>

        <div className="m-10">
          <Button.Group>
            <Button size="xl" color="gray" className="py-6">
              <HiUserCircle className="mr-3 h-4 w-4" />
              <p>Access Point</p>
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
            <button className="btnCategory">Access Point</button>
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
