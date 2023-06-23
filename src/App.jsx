import React from "react";
import {createContext, useState} from "react";
import Header from "./components/Header.jsx";
import AccessPoints from "./components/Ap.jsx";
import RadiosOutdoor from "./components/Radio.jsx";
import RoteadoresHO from "./components/Roteadores.jsx";
import Switches from "./components/Switches.jsx";
import Conversores from "./components/Conversores.jsx";
import Sfp from "./components/Sfp.jsx";
import Onu from "./components/Onu.jsx";
import Modal from "react-modal";
import {Button} from "flowbite-react";

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
    <div className="flex flex-col">
      <div className="w-[90%] self-center bg-white">
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

          {/* <Button color="dark" className="mb-4" onClick={alternarMostrarOcultar}>
            {ShowHide ? "Ocultar Tudo" : "Mostrar Tudo"}
          </Button> */}

          <AccessPoints />
          {/* <RadiosOutdoor />
          <RoteadoresHO />
          <Switches />
          <Conversores />
          <Sfp />
          <Onu /> */}
        </AdminContext.Provider>
      </div>
    </div>
  );
}

export default App;
