import AccessPoints from "./Components/AccessPoint/Ap.jsx";
import Conversores from "./Components/Conversor/Conversor.jsx";
import Header from "./Components/Header.jsx";
import Onu from "./Components/Onu/Onu.jsx";
import RadiosOutdoor from "./Components/Radio/Radio.jsx";
import RoteadoresHO from "./Components/Roteador/Roteador.jsx";
import Sfp from "./Components/Sfp/Sfp.jsx";
import Switches from "./Components/Switch/Switch.jsx";
import ImgAp from "./assets/ap.png";
import ImgConv from "./assets/conversor.png";
import ImgHo from "./assets/ho.png";
import ImgOnt from "./assets/ont.png";
import ImgRadio from "./assets/radio.png";
import ImgSfp from "./assets/sfp.png";
import ImgSw from "./assets/sw.png";
import {Button} from "flowbite-react";
import React from "react";
import {createContext, useState} from "react";
import {HiArrowLongUp, HiArrowUp} from "react-icons/hi2";

export const AdminContext = createContext();

function App() {
  const [admin, setAdmin] = useState(false);
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
  const [email, setEmail] = useState("");

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

  /* Modal */
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
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
            email,
            setEmail,
          }}>
          <Header />

          <button
            className={` ${
              ShowHide
                ? "bg-transparent dark:text-white"
                : "bg-black dark:bg-itbs-default text-white dark:border-transparent"
            } border border-black dark:border-white px-4 py-1 mt-4 ml-4 font-normal rounded-full text-sm`}
            onClick={alternarMostrarOcultar}>
            {ShowHide ? "Ocultar Tudo" : "Mostrar Tudo"}
          </button>

          <div className="fixed left-5 bottom-5">
            <a href="#top">
              <button className="bg-itbs-default rounded-full p-3">
                <HiArrowUp className="text-white text-lg" />
              </button>
            </a>
          </div>

          <AccessPoints />
          <RadiosOutdoor />
          <Switches />
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
