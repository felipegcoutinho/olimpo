import React from "react";
import APs from "./Data/ap.json";
import Conversores from "./Data/conversores.json";
import Gbics from "./Data/gbics.json";
import Radios from "./Data/radios.json";
import Switchs from "./Data/switchs.json";
import Onus from "./Data/onus.json";
import Roteadores from "./Data/roteadores.json";
import style from "../src/App.module.css";
import {AP, RADIO, CONVERSOR, GBIC, SWITCH} from "./Header";

function App() {
  const [queryAP, setQueryAP] = React.useState("");
  const [queryRADIO, setQueryRADIO] = React.useState("");
  const [querySWITCH, setQuerySWITCH] = React.useState("");
  const [queryCONVERSOR, setQueryCONVERSOR] = React.useState("");
  const [querySFP, setQuerySFP] = React.useState("");
  const [queryONU, setQueryONU] = React.useState("");
  const [queryOLT, setQueryOLT] = React.useState("");
  const [queryHO, setQueryHO] = React.useState("");

  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
  };
  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
  };
  const handleSearchChangeSWITCH = (e) => {
    setQuerySWITCH(e.target.value);
  };
  const handleSearchChangeCONVERSOR = (e) => {
    setQueryCONVERSOR(e.target.value);
  };
  const handleSearchChangeSFP = (e) => {
    setQuerySFP(e.target.value);
  };
  const handleSearchChangeONU = (e) => {
    setQueryONU(e.target.value);
  };
  const handleSearchChangeOLT = (e) => {
    setQueryOLT(e.target.value);
  };
  const handleSearchChangeHO = (e) => {
    setQueryHO(e.target.value);
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
          <a href="#onu">
            <button>ONUs/ONTs</button>
          </a>
          <a href="#gbic">
            <button>Modulo SFP</button>
          </a>
          <a href="#ho">
            <button>Home Office</button>
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
        {/* SWITCHS */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="switch">Switchs</h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o AP"
                value={querySWITCH}
                onChange={handleSearchChangeSWITCH}
                className={style.searchbar}
              />
            </label>
          </div>

          <table className={style.devicesTable}>
            <SWITCH />
            {Switchs.filter((swicth) => {
              if (swicth.modelo.toLowerCase().includes(querySWITCH.toLowerCase())) {
                return swicth;
              } else if (swicth.gerenciavel.toLowerCase().includes(querySWITCH.toLowerCase())) {
                return swicth;
              }
            }).map((swicth) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      <b>{swicth.modelo}</b>
                    </td>
                    <td>{swicth.portas}</td>
                    <td>{swicth.modulação}</td>
                    <td>{swicth.gerenciavel}</td>
                    <td>{swicth.poe}</td>
                    <td>{swicth.sfp}</td>
                    <td>{swicth.ieee}</td>
                    <td>{swicth.poeExtender}</td>
                    <td>{swicth.qos}</td>
                    <td>{swicth.garantia}</td>
                    <td>
                      <span className={style.tooltip}>
                        <span>
                          {swicth.status === "Em Linha" && (
                            <span className={style.status_emlinha}>{swicth.status}</span>
                          )}
                          {swicth.status === "Phaseout" && (
                            <span className={style.status_phaseout}>
                              {swicth.status}
                              <i className="fa-regular fa-circle-question"></i>
                            </span>
                          )}
                          {swicth.status === "Suporte" && (
                            <span className={style.status_suporte}>
                              {swicth.status}
                              <i className="fa-regular fa-circle-question"></i>
                            </span>
                          )}
                        </span>
                        {swicth.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                        {swicth.status === "Suporte" && (
                          <span className={style.tooltiptext}>Ainda fornecemos suporte</span>
                        )}
                      </span>
                    </td>
                    <td>
                      <a href={swicth.pagina}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                    <td>
                      <a href={swicth.datashet}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                    <td>
                      <a href={swicth.guia}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                    <td>
                      <a href={swicth.manual}>
                        <i className="fa-solid fa-xl fa-file-pdf"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        {/* CONVERSOR */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="conversor">Conversor de Mídia</h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o Conversor"
                value={queryCONVERSOR}
                onChange={handleSearchChangeCONVERSOR}
                className={style.searchbar}
              />
            </label>
          </div>
          <table className={style.devicesTable}>
            <CONVERSOR />
            {Conversores.filter((conversor) => {
              if (conversor.modelo.toLowerCase().includes(queryCONVERSOR.toLowerCase())) {
                return conversor;
              } else if (conversor.conector.toLowerCase().includes(queryCONVERSOR.toLowerCase())) {
                return conversor;
              }
            }).map((conversor) => {
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
            })}
          </table>
        </div>
        {/* SFP */}
        <div className={style.box_content}>
          <h2 id="gbic">Módulo SFP</h2>
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
        {/* ONU */}
        <div className={style.box_content}>
          <h2 id="gbic">ONUs/ONTs</h2>
          <table className={style.devicesTable}>
            <GBIC />
            {Onus.map((onu) => {
              if (onu.linha === "onu/ont") {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <b>{onu.modelo}</b>
                      </td>
                      <td>{onu.conector}</td>
                      <td>{onu.fxs}</td>
                      <td>{onu.wdm}</td>
                      <td>{onu.distancia}</td>
                      <td>{onu.modulação}</td>
                      <td>{onu.fibra}</td>
                      <td>{onu.potencia}</td>
                      <td>{onu.recepMax}</td>
                      <td>{onu.recepMin}</td>
                      <td>{onu.status}</td>
                      <td>{onu.garantia}</td>
                      <td>{onu.pagina}</td>
                      <td>{onu.datasheet}</td>
                      <td>{onu.guia}</td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        </div>
        {/* HO */}
        <div className={style.box_content}>
          <h2 id="ho">Roteadores HO</h2>
          <table className={style.devicesTable}>
            <GBIC />
            {Roteadores.map((roteador) => {
              if (roteador.linha === "roteador") {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <b>{roteador.modelo}</b>
                      </td>
                      <td>{roteador.conector}</td>
                      <td>{roteador.fxs}</td>
                      <td>{roteador.wdm}</td>
                      <td>{roteador.distancia}</td>
                      <td>{roteador.modulação}</td>
                      <td>{roteador.fibra}</td>
                      <td>{roteador.potencia}</td>
                      <td>{roteador.recepMax}</td>
                      <td>{roteador.recepMin}</td>
                      <td>{roteador.status}</td>
                      <td>{roteador.garantia}</td>
                      <td>{roteador.pagina}</td>
                      <td>{roteador.datasheet}</td>
                      <td>{roteador.guia}</td>
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
