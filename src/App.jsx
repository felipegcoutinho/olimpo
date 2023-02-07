import React from "react";
import style from "../src/App.module.css";
import Header from "./Components/Header.jsx";
import AccessPoints from "./Components/Ap.jsx";
import RadiosOutdoor from "./Components/Radios.jsx";
import RoteadoresHO from "./Components/Roteadores.jsx";
import Switches from "./Components/Switches.jsx";
import Conversores from "./Components/Conversores.jsx";
import Sfp from "./Components/Sfp.jsx";
import Onu from "./Components/Onu.jsx";

function App() {
  const MostrarTudo = () => {
    setHideAP(true);
    setHideRADIO(true);
    setHideHO(true);
    setHideSwitch(true);
    setHideConversor(true);
    setHideSFP(true);
    setHideONU(true);
  };

  const OcultarTudo = () => {
    setHideAP(false);
    setHideRADIO(false);
    setHideHO(false);
    setHideSwitch(false);
    setHideConversor(false);
    setHideSFP(false);
    setHideONU(false);
  };

  return (
    <div className={style.container}>
      <Header />

      {/* BOTÃO MOSTRAR / OCULTAR */}
      <div className={style.box_container}>
        <div>
          <button className={style.btn_hideShow} onClick={MostrarTudo}>
            Mostrar Tudo <i className="fa-solid fa-eye"></i>
          </button>
          <button className={style.btn_hideShow} onClick={OcultarTudo}>
            Ocultar Tudo <i className="fa-regular fa-eye-slash"></i>
          </button>
        </div>

        {/* APs */}
        <AccessPoints />

        {/* Rádios */}
        {/* <RadiosOutdoor /> */}

        {/* Roteadores HO */}
        {/* <RoteadoresHO /> */}

        {/* SWITCHES */}
        {/* <Switches /> */}

        {/* CONVERSORES */}
        {/* <Conversores /> */}

        {/* SFPs */}
        {/* <Sfp /> */}

        {/* ONUs */}
        {/* <Onu /> */}
      </div>
    </div>
  );
}

export default App;
