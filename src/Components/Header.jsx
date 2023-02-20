import React, {useState} from "react";
import {useContext} from "react";
import {AdminContext} from "../App";
import style from "../css/App.module.css";
import LoginModal from "./LoginModal";

export default function Header() {
  const {openModal} = useContext(AdminContext);
  const [urlValue, setUrlValue] = React.useState("");
  // const isPwd = urlValue.startsWith("@");
  const urlSearch = `https://www.intelbras.com/pt-br/busca/?q=${urlValue}&tipo_busca=pagina-resultado`;

  const handleSearch = (e) => {
    setUrlValue(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.open(urlSearch, "_blank");
    }
  };

  // const EnableAdmin = () => {
  //   setAdmin(!admin);
  //   {
  //     admin
  //       ? Swal.fire({
  //           title: "Modo admin desativado!",
  //           icon: "error",
  //         })
  //       : Swal.fire({
  //           title: "Modo admin ativado!",
  //           icon: "success",
  //         });
  //   }
  // };

  return (
    <div>
      <div className={style.aviso} id="home">
        <b>Aviso!</b> Este é um material para facilitar o acesso a informações dos principais equipamentos.
        <b> Sempre consulte a documentação oficial.</b> :)
      </div>
      <div className={style.header_content}>
        <div className={style.logo}>
          Olimpo!<span className={style.version}>v1.1</span>
        </div>

        <div className={style.searchbarContainer}>
          <input
            // type={isPwd ? "password" : "text"}
            type="text"
            className={style.mainsearchbar}
            value={urlValue}
            placeholder="Pesquise em intelbras.com.br"
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
          />
          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            {urlValue !== "" && <button className={style.mainSearchBtn}></button>}
          </a>
          {urlValue !== "" && <button className={style.searchBtnClean} onClick={() => setUrlValue("")}></button>}
          {/* {urlValue === "@crvg!" && (
            <button className={admin ? style.adminBtnDisable : style.adminBtnEnable} onClick={EnableAdmin}></button>
          )} */}
          <button className={style.loginBtn} onClick={openModal}></button>
          <LoginModal />
        </div>

        <div className={style.categoryContainer}>
          <a href="#ap">
            <button className={style.categoryButton}>Access Point</button>
          </a>
          <a href="#radio">
            <button className={style.categoryButton}>Radio Outdoor</button>
          </a>
          <a href="#homeOffice">
            <button className={style.categoryButton}>Home Office</button>
          </a>
          <a href="#switch">
            <button className={style.categoryButton}>Switch</button>
          </a>
          <a href="#conversor">
            <button className={style.categoryButton}>Conversor de Mídia</button>
          </a>
          <a href="#sfp">
            <button className={style.categoryButton}>Módulo SFP</button>
          </a>
          <a href="#onu">
            <button className={style.categoryButton}>Onu/Ont</button>
          </a>
        </div>
      </div>
      <a href="#home">
        <span className={style.top}></span>
      </a>
    </div>
  );
}
