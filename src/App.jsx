import React from "react";
import {createContext, useState} from "react";
import style from "../src/css/App.module.css";
import Header from "./components/Header.jsx";
import AccessPoints from "./components/Ap.jsx";
import RadiosOutdoor from "./components/Radio.jsx";
import RoteadoresHO from "./components/Roteadores.jsx";
import Switches from "./components/Switches.jsx";
import Conversores from "./components/Conversores.jsx";
import Sfp from "./components/Sfp.jsx";
import Onu from "./components/Onu.jsx";
import Modal from "react-modal";

export const AdminContext = createContext();

function App() {
  const [admin, setAdmin] = useState(true);
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

  /* Configs Modal */
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUpdatedProduct(false);
  }

  return (
    <div className={style.container}>
      <div className={style.box_container}>
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
          }}>
          <Header />

          {ShowHide ? (
            <button className={style.buttonShowAll} onClick={alternarMostrarOcultar}>
              Ocultar Tudo
            </button>
          ) : (
            <button className={style.buttonHideAll} onClick={alternarMostrarOcultar}>
              Mostrar Tudo
            </button>
          )}

          {/* APs */}
          <AccessPoints />
          {/* Rádios */}
          <RadiosOutdoor />
          {/* Roteadores HO */}
          <RoteadoresHO />
          {/* SWITCHES */}
          <Switches />
          {/* CONVERSORES */}
          <Conversores />
          {/* SFPs */}
          <Sfp />
          {/* ONUs */}
          <Onu />
        </AdminContext.Provider>
      </div>
    </div>
  );
}

export default App;
