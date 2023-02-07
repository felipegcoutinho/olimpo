import React from "react";
import style from "/src/App.module.css";

export default function Header() {
  const [urlValue, setUrlValue] = React.useState("");
  const handleSearch = (e) => {
    setUrlValue(e.target.value);
  };

  const urlSearch = `https://www.intelbras.com/pt-br/busca/?q=${urlValue}&tipo_busca=pagina-resultado`;

  return (
    <div>
      <div className={style.aviso}>
        <p>
          <b>Aviso!</b> Este é um material para facilitar o acesso a informações dos principais equipamentos.
          <b> Sempre consulte a documentação oficial.</b> :)
        </p>
      </div>
      <div className={style.header_content} id="home">
        <div className={style.logo}>
          <p>Olimpo!</p>
        </div>

        <div className={style.searchbarContainer}>
          <input
            className={style.mainsearchbar}
            value={urlValue}
            onChange={handleSearch}
            placeholder="Pesquise em intelbras.com.br"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                window.open(`https://www.intelbras.com/pt-br/busca/?q=${urlValue}&tipo_busca=pagina-resultado`, "_blank");
              }
            }}
          />

          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            {urlValue === "" ? null : <button className={style.mainSearchBtn}></button>}
          </a>
          {urlValue === "" ? null : <button className={style.searchBtnClean} onClick={() => setUrlValue("")}></button>}
          {urlValue === "olimpo@admin" ? <button className={style.adminBtn} onClick={() => alert("admin :)")}></button> : null}
        </div>

        <div className={style.btns_container}>
          <a href="#ap">
            <button className={style.btns}>Access Point</button>
          </a>
          <a href="#radio">
            <button className={style.btns}>Radio Outdoor</button>
          </a>
          <a href="#ho">
            <button className={style.btns}>Home Office</button>
          </a>
          <a href="#switch">
            <button className={style.btns}>Switch</button>
          </a>
          <a href="#conversor">
            <button className={style.btns}>Conversor de Mídia</button>
          </a>
          <a href="#sfp">
            <button className={style.btns}>Modulo SFP</button>
          </a>
          <a href="#onu">
            <button className={style.btns}>Onu/Ont</button>
          </a>
        </div>

        <div className={style.legendas_container}>
          <div className={style.legendas_title}>Legendas</div>
          <div className={style.legendas_content}>
            <p>N/A - Informação não encontrada.</p>
            <p>
              <span className={style.status_suporte}></span>- Suporte normal.
            </p>
            <p>
              <span className={style.status_phaseout}></span>- Suporte por email.
            </p>
          </div>
        </div>
      </div>
      <a href="#home">
        <span className={style.top}></span>
      </a>
    </div>
  );
}
