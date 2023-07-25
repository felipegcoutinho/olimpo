import { Button } from "flowbite-react";
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
import React from "react";
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

          <Button color="dark" className="mb-4" onClick={alternarMostrarOcultar}>
            {ShowHide ? "Ocultar Tudo" : "Mostrar Tudo"}
          </Button>


          <AccessPoints />
          <RadiosOutdoor />
          <Switches />
          <RoteadoresHO />
          <Conversores />
          <Sfp />
          <Onu />

          {/* <div className="border-b border-gray-200 dark:border-none">
            <ul
              className="flex flex-wrap justify-center text-sm font-bold text-center text-itbs-default"
              id="myTab"
              data-tabs-toggle="#TabContent"
              role="tab">
              {Object.values(DeviceTabs).map((item, index) => (
                <li key={index} role="presentation">
                  <button
                    className="inline-block p-4 border-b-2 hover:border-itbs-default dark:hover:border-itbs-hover"
                    data-tabs-target={item.dataTabsTarget}
                    type="button"
                    aria-selected="false"
                    role="tab">

                    <div className="flex flex-col items-center">
                      <img src={item.img} className="w-20 h-20"/>
                      {item.setor}
                    </div>

                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="TabContent">
            {Object.values(DeviceTabs).map((item, index) => (
              <div key={index} className="hidden" id={item.id} role="tab">
                {item.content}
              </div>
            ))}
          </div> */}
        </AdminContext.Provider>
      </div>
    </div>
  );
}

export default App;
