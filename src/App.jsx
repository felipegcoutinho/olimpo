import classNames from "classnames";
import AccessPoints from "./components/access-point/AccessPoint.jsx";
import Conversores from "./components/conversor/Conversor.jsx";
import Header from "./components/Header.jsx";
import Onu from "./components/onu/Onu.jsx";
import RadiosOutdoor from "./components/radio/Radio.jsx";
import RoteadoresHO from "./components/roteador/Roteador.jsx";
import Sfp from "./components/sfp/Sfp.jsx";
import React, { createContext, useState } from "react";
import BtnTop from "./ui/BtnTop.jsx";
import Switch from "./components/switch/Switch.jsx";

export const AdminContext = createContext();

function App() {
  const [admin, setAdmin] = useState(localStorage.getItem("admin") === "true" ? true : false);
  const [HideAP, setHideAP] = useState(true);
  const [HideRADIO, setHideRADIO] = useState(true);
  const [HideHO, setHideHO] = useState(true);
  const [HideSwitch, setHideSwitch] = useState(true);
  const [HideConversor, setHideConversor] = useState(true);
  const [HideSFP, setHideSFP] = useState(true);
  const [HideONU, setHideONU] = useState(true);
  const [updatedProduct, setUpdatedProduct] = useState("");
  const [ShowHide, setShowHide] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenAviso, setIsOpenAviso] = useState(false);

  const alternarMostrarOcultar = () => {
    setShowHide(!ShowHide);
    setHideAP(!ShowHide);
    setHideRADIO(!ShowHide);
    setHideHO(!ShowHide);
    setHideSwitch(!ShowHide);
    setHideConversor(!ShowHide);
    setHideSFP(!ShowHide);
    setHideONU(!ShowHide);
  };

  const buttonClasses = classNames("border border-black dark:border-white px-4 py-1 mt-4 ml-4 font-normal rounded-full text-sm", {
    "bg-transparent dark:text-white": ShowHide,
    "bg-black dark:bg-itbs-default text-white": !ShowHide,
  });

  /* Modal */
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  function openModalAviso() {
    setIsOpenAviso(true);
  }
  function closeModalAviso() {
    setIsOpenAviso(false);
  }

  return (
    <div className="flex flex-col">
      <div className="w-[85%] self-center bg-white dark:bg-itbs-modern-100">
        <AdminContext.Provider
          value={{
            admin,
            setAdmin,
            HideAP,
            setHideAP,
            HideRADIO,
            setHideRADIO,
            HideHO,
            setHideHO,
            HideSwitch,
            setHideSwitch,
            HideConversor,
            setHideConversor,
            HideSFP,
            setHideSFP,
            HideONU,
            setHideONU,
            updatedProduct,
            setUpdatedProduct,
            openModal,
            closeModal,
            modalIsOpen,
            setIsOpen,
            modalIsOpenAviso,
            openModalAviso,
            closeModalAviso,
          }}
        >
          <Header />

          <button className={buttonClasses} onClick={alternarMostrarOcultar}>
            {ShowHide ? "Ocultar Tudo" : "Mostrar Tudo"}
          </button>

          <BtnTop />
          <AccessPoints />
          <RadiosOutdoor />
          <Switch />
          <RoteadoresHO />
          <Conversores />
          <Sfp />
          <Onu />
        </AdminContext.Provider>
      </div>
    </div>
  );
}

export default App;
