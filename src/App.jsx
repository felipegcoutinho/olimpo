import React from "react";
import style from "../src/App.module.css";
import Header from "./Components/Header.jsx";
import AccessPoints from "./Components/Ap.jsx";
import RadiosOutdoor from "./Components/Radio.jsx";
import RoteadoresHO from "./Components/Roteadores.jsx";
import Switches from "./Components/Switches.jsx";
import Conversores from "./Components/Conversores.jsx";
import Sfp from "./Components/Sfp.jsx";
import Onu from "./Components/Onu.jsx";
import {createContext, useState} from "react";

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

  return (
    <div className={style.container}>
      <div className={style.box_container}>
        <AdminContext.Provider
          value={{
            setAdmin,
            admin,
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
