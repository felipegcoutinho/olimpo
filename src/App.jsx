import Header from "./components/Header.jsx";
import AccessPoints from "./components/access-point/AccessPoint.jsx";
import Conversores from "./components/conversor/Conversor.jsx";
import Onu from "./components/onu/Onu.jsx";
import RadiosOutdoor from "./components/radio/Radio.jsx";
import RoteadoresHO from "./components/roteador/Roteador.jsx";
import Sfp from "./components/sfp/Sfp.jsx";
import Switch from "./components/switch/Switch.jsx";
import BtnTop from "./ui/BtnTop.jsx";
import Qi5 from "./components/qi5/Qi5.jsx";
import React, { createContext, useState } from "react";
import { HiOutlineXCircle } from "react-icons/hi2";
// import { Tabs } from 'flowbite-react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const AdminContext = createContext();

function App() {
  const [admin, setAdmin] = useState(localStorage.getItem("admin") === "true" ? true : false);
  const [HideAP, setHideAP] = useState(true);
  const [HideQi5, setHideQi5] = useState(true);
  const [HideRADIO, setHideRADIO] = useState(true);
  const [HideHO, setHideHO] = useState(true);
  const [HideSwitch, setHideSwitch] = useState(true);
  const [HideConversor, setHideConversor] = useState(true);
  const [HideSFP, setHideSFP] = useState(true);
  const [HideSwEspecial, setHideSwEspecial] = useState(true);
  const [HideONU, setHideONU] = useState(true);
  const [updatedProduct, setUpdatedProduct] = useState("");
  const [ShowHide, setShowHide] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenAviso, setIsOpenAviso] = useState(false);



  const alternarMostrarOcultar = () => {
    setShowHide(!ShowHide);
    setHideAP(!ShowHide);
    setHideQi5(!ShowHide);
    setHideRADIO(!ShowHide);
    setHideHO(!ShowHide);
    setHideSwitch(!ShowHide);
    setHideConversor(!ShowHide);
    setHideSFP(!ShowHide);
    setHideONU(!ShowHide);
    setHideSwEspecial(!ShowHide);
  };

  const getButtonClasses = (isActive) => {
    const baseClasses = "flex items-center gap-1 mr-auto rounded-full px-4 mt-6 py-1 ml-4 text-slate-600 dark:text-white text-sm";
    return isActive
      ? `${baseClasses} bg-slate-800 border border-slate-800 text-white dark:border-itbs-default hover:bg-slate-800 hover:text-white`
      : `${baseClasses} bg-transparent border border-slate-600 dark:border-white hover:bg-slate-800 hover:text-white`;
  };

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

  const tabsName = [
    "Wi-Fi Empresarial",
    "Rádio Outdoor",
    "Switch",
    "5G",
    "Roteador",
    "Conversor de Mídia",
    "Módulo SFP",
    "Onu/Ont",
    "Projetos Especiais",
  ];

  return (
    <div className="flex flex-col">
      <div className="w-[85%] self-center bg-white dark:bg-itbs-modern-100">
        <AdminContext.Provider
          value={{
            admin,
            setAdmin,
            HideAP,
            setHideAP,
            HideQi5,
            setHideQi5,
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
            HideSwEspecial,
            setHideSwEspecial,
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
          {/* <button onClick={alternarMostrarOcultar} className={getButtonClasses(!ShowHide)}>
            {ShowHide ? "Ocultar Tudo" : "Mostrar Tudo"} {!ShowHide && <HiOutlineXCircle className="text-lg text-slate-200" />}
          </button> */}

          {/* <Tabs.Group aria-label="Pills" style="underline" className="flex justify-center ">

            <Tabs.Item active title="Wi-Fi Empresarial">
              <AccessPoints />
            </Tabs.Item>

            <Tabs.Item title="Rádio Outdoor">
              <RadiosOutdoor />
            </Tabs.Item>

            <Tabs.Item title="Switch">
              <Switch />
            </Tabs.Item>

            <Tabs.Item title="5G">
              <Qi5 />
            </Tabs.Item>

            <Tabs.Item title="Roteador">
              <RoteadoresHO />
            </Tabs.Item>

            <Tabs.Item title="Conversor de Mídia">
              <Conversores />
            </Tabs.Item>

            <Tabs.Item title="Módulo SFP">
              <Sfp />
            </Tabs.Item>

            <Tabs.Item title="Onu/Ont">
              <Onu />
            </Tabs.Item>

            <Tabs.Item title="Projetos Especiais">
              <Onu />
            </Tabs.Item>

          </Tabs.Group> */}

          <Tabs>
            <TabList className="flex justify-center bg-slate-50">

              {tabsName.map((tabName) => (
                <Tab key={tabName}>{tabName}</Tab>
              ))}

            </TabList>

            <TabPanel>
              <AccessPoints />
            </TabPanel>
            <TabPanel>
              <RadiosOutdoor />
            </TabPanel>
            <TabPanel>
              <Switch />
            </TabPanel>
            <TabPanel>
              <Qi5 />
            </TabPanel>
            <TabPanel>
              <RoteadoresHO />
            </TabPanel>
            <TabPanel>
              <Conversores />
            </TabPanel>
            <TabPanel>
              <Sfp />
            </TabPanel>
            <TabPanel>
              <Onu />
            </TabPanel>
            <TabPanel>
              <Onu />
            </TabPanel>
          </Tabs>

          <BtnTop />  {/*Botão para voltar ao topo da página */}
          {/* <AccessPoints />
          <RadiosOutdoor /> */}
          {/* <Switch />
          <Qi5 />
          <RoteadoresHO />
          <Conversores />
          <Sfp />
          <Onu /> */}
        </AdminContext.Provider>
      </div>
    </div>
  );
}

export default App;
