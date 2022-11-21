import React from "react";
import APs from "./Data/ap.json";
import Conversores from "./Data/conversores.json";
import Gbics from "./Data/gbics.json";
import Radios from "./Data/radios.json";
import style from "../src/App.module.css";
import {AP, RADIO, CONVERSOR, GBIC} from "./Header";

function App() {
  const [queryAP, setQueryAP] = React.useState("");
  const [queryRADIO, setQueryRADIO] = React.useState("");

  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
  };
  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.header_content}>
        <div className={style.btn_container}>
          <a href="#ap">
            <button>Access Point</button>
          </a>
          <a href="#radio">
            <button>Radios</button>
          </a>
          <a href="#switch">
            <button>Switch</button>
          </a>
          <a href="#conversor">
            <button>Conversor</button>
          </a>
          <a href="#olt">
            <button>OLT</button>
          </a>
          <a href="#olt">
            <button>Roteadores</button>
          </a>
          <a href="#gbic">
            <button>Gbic</button>
          </a>
        </div>
      </div>

      <div className={style.box_container}>
        {/* ACCESS POINT */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="ap">Access Point</h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o AP"
                value={queryAP}
                onChange={handleSearchChangeAP}
                className={style.searchbar}
              />
            </label>
          </div>

          <table className={style.devicesTable}>
            <AP />
            {APs.filter((ap) => {
              if (ap.modelo.toLowerCase().includes(queryAP.toLowerCase())) {
                return ap;
              } else if (ap.porta.toLowerCase().includes(queryAP.toLowerCase())) {
                return ap;
              }
            }).map((ap) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      <b>{ap.modelo}</b>
                    </td>
                    <td>{ap.cobertura}</td>
                    <td>{ap.raio}</td>
                    <td>{ap.usuarioMax}</td>
                    <td>{ap.porta}</td>
                    <td>{ap.throughputWireless24}</td>
                    <td>{ap.throughputWireless50}</td>
                    <td>{ap.qtdePortas}</td>
                    <td>{ap.poe}</td>
                    <td>{ap.handover}</td>
                    <td>{ap.potenciaMax}</td>
                    <td>
                      <span className={style.tooltip}>
                        <span>
                          {ap.status === "Em Linha" && <span className={style.status_emlinha}>{ap.status}</span>}
                          {ap.status === "Phaseout" && (
                            <span className={style.status_phaseout}>
                              {ap.status} <i className="fa-regular fa-circle-question"></i>
                            </span>
                          )}
                          {ap.status === "Suporte" && (
                            <span className={style.status_suporte}>
                              {ap.status} <i className="fa-regular fa-circle-question"></i>
                            </span>
                          )}
                        </span>
                        {ap.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                        {ap.status === "Suporte" && <span className={style.tooltiptext}>Ainda fornecemos suporte</span>}
                      </span>
                    </td>
                    <td>
                      <a href={ap.pagina}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                    <td>
                      <a href={ap.datashet}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                    <td>
                      <a href={ap.guia}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                    <td>
                      <a href={ap.manual}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        {/* RADIOS OUTDOOR */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="radio">Radios Outdoor</h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                placeholder="Pesquise o Radio"
                value={queryRADIO}
                onChange={handleSearchChangeRADIO}
                className={style.searchbar}
              />
            </label>
          </div>
          <table className={style.devicesTable}>
            <RADIO />
            {Radios.filter((radio) => {
              if (radio.modelo.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              } else if (radio.porta.toLowerCase().includes(queryRADIO.toLowerCase())) {
                return radio;
              }
            }).map((radio) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      <b>{radio.modelo}</b>
                    </td>
                    <td>{radio.indicado}</td>
                    <td>{radio.ganho}</td>
                    <td>{radio.porta}</td>
                    <td>{radio.potencia}</td>
                    <td>{radio.pps}</td>
                    <td>{radio.throughputEfetivo}</td>
                    <td>{radio.throughputNominal}</td>
                    <td>{radio.aberturaHorVer}</td>
                    <td>{radio.distancia}</td>
                    <td>{radio.wireless}</td>
                    <td>
                      <span className={style.tooltip}>
                        <span>
                          {radio.status === "Em Linha" && <span className={style.status_emlinha}>{radio.status}</span>}
                          {radio.status === "Phaseout" && (
                            <span className={style.status_phaseout}>
                              {radio.status} <i className="fa-regular fa-circle-question"></i>
                            </span>
                          )}
                          {radio.status === "Suporte" && (
                            <span className={style.status_suporte}>
                              {radio.status} <i className="fa-regular fa-circle-question"></i>
                            </span>
                          )}
                        </span>
                        {radio.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                        {radio.status === "Suporte" && (
                          <span className={style.tooltiptext}>Ainda fornecemos suporte</span>
                        )}
                      </span>
                    </td>
                    <td>
                      <a href={radio.pagina}>pagina</a>
                    </td>
                    <td>
                      <a href={radio.datasheet}>datasheet</a>
                    </td>
                    <td>
                      <a href={radio.guia}>guia</a>
                    </td>
                    <td>
                      <a href={radio.manual}>manual</a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className={style.box_content}>
          <h2 id="conversor">Conversor de Mídia</h2>
          <table className={style.devicesTable}>
            <CONVERSOR />
            {Conversores.map((conversor) => {
              if (conversor.linha === "conversor") {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <b>{conversor.modelo}</b>
                      </td>
                      <td>{conversor.conector}</td>
                      <td>{conversor.wdm}</td>
                      <td>{conversor.distancia}</td>
                      <td>{conversor.modulação}</td>
                      <td>{conversor.fibra}</td>
                      <td>{conversor.potencia}</td>
                      <td>{conversor.recepMax}</td>
                      <td>{conversor.recepMin}</td>
                      <td>{conversor.status}</td>
                      <td>{conversor.garantia}</td>
                      <td>{conversor.pagina}</td>
                      <td>{conversor.datasheet}</td>
                      <td>{conversor.guia}</td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        </div>
        <div className={style.box_content}>
          <h2 id="gbic">Gbic</h2>
          <table className={style.devicesTable}>
            <GBIC />
            {Gbics.map((gbic) => {
              if (gbic.linha === "gbic") {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <b>{gbic.modelo}</b>
                      </td>
                      <td>{gbic.conector}</td>
                      <td>{gbic.modulo}</td>
                      <td>{gbic.wdm}</td>
                      <td>{gbic.distancia}</td>
                      <td>{gbic.modulação}</td>
                      <td>{gbic.fibra}</td>
                      <td>{gbic.potencia}</td>
                      <td>{gbic.recepMax}</td>
                      <td>{gbic.recepMin}</td>
                      <td>{gbic.status}</td>
                      <td>{gbic.garantia}</td>
                      <td>{gbic.pagina}</td>
                      <td>{gbic.datasheet}</td>
                      <td>{gbic.guia}</td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
