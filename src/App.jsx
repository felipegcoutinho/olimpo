import React, {useEffect} from "react";
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
import Swal from "sweetalert2";

import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "./database/firebase";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: error.message,
        confirmButtonColor: "#006e39",
      });
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      setAdmin(!admin);
      Swal.fire({
        title: "Logado",
        confirmButtonColor: "#006e39",
      });
    }
  }, [user]);

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
          }}>
          <Header />

          <form>
            <div className="inputContainer">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="inputContainer">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********************"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* felipe@teste.com */}

            <button className="button" onClick={handleSignIn}>
              Entrar
            </button>
          </form>

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
