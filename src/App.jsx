import AccessPoints from "./Components/AccessPoint/Ap.jsx";
import Conversores from "./Components/Conversor/Conversor.jsx";
import Header from "./Components/Header.jsx";
import Onu from "./Components/Onu/Onu.jsx";
import RadiosOutdoor from "./Components/Radio/Radio.jsx";
import RoteadoresHO from "./Components/Roteador/Roteador.jsx";
import Sfp from "./Components/Sfp/Sfp.jsx";
import Switches from "./Components/Switch/Switch.jsx";
import {Button} from "flowbite-react";
import React from "react";
import {createContext, useState} from "react";
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
      <div className="w-[85%] self-center bg-white dark:bg-[#0F1D1E]">
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
          }}>
          <Header />

          {/* <Button color="dark" className="mb-4" onClick={alternarMostrarOcultar}>
            {ShowHide ? "Ocultar Tudo" : "Mostrar Tudo"}
          </Button> */}

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
