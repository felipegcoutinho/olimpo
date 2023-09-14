import { AdminContext } from "../../App";
import DarkModeToggle from "../../hooks/DarkModeToggle";
import AvisoModal from "./AvisoModal";
import LoginModal from "./LoginModal";
import React, { useState } from "react";
import { useContext } from "react";
import LinkBar from "./LinkBar";

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

  function handleSignOut() {
    setLogoutText("saindo...");
    setTimeout(() => {
      localStorage.removeItem("admin");
      window.location.reload();
    }, 2000);
  }

  return (
    <>
      <div className="bg-[url('../assets/ttten.svg')]">
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

        <div className="items-center flex flex-col py-10">
          <p className="text-itbs-default text-5xl font-[MuseoModerno] italic tracking-tighter">Olimpo</p>

          <div className="relative mt-8">
            <input
              type="text"
              value={urlValue}
              onChange={handleSearch}
              onKeyDown={handleKeyPress}
              className="pl-10 font-bold text-center w-96 h-14 text-slate-500 placeholder:text-slate-500 border-b border-slate-400 backdrop-blur-sm bg-transparent dark:border-green-900 rounded-full dark:bg-itbs-modern-400 dark:text-white focus:ring-itbs-default focus:border-itbs-default"
              placeholder="Pesquise em intelbras.com.br"
            />
          </div>
        </div>
      </div>
      <LinkBar />
    </>
  );
}
