import Header from "./components/header/Header.jsx";
import React, { createContext, useState } from "react";
import { FaGithub } from "react-icons/fa6";
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
  const [HideONU, setHideONU] = useState(true);
  const [updatedProduct, setUpdatedProduct] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenAviso, setIsOpenAviso] = useState(false);

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
        </AdminContext.Provider>
        <div className="bg-itbs-default text-white p-6 text-center mb-4">
          <a href="http://github.felipecoutinho.com">
            <span className="flex justify-center items-center gap-2">
              <FaGithub />
              github.felipecoutinho.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
