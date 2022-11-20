import React, {useState} from "react";
import APs from "./Data/ap.json";
import Conversores from "./Data/conversores.json";
import Gbics from "./Data/gbics.json";

import style from "../src/App.module.css";
import {AP, CONVERSOR, GBIC} from "./Header";

function App() {
  return (
    <div className={style.container}>
      <div className={style.btn_container}>
        <a href="#ap">
          <button>Access Point</button>
        </a>
        <a href="#radios">
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
      </div>

      <div className={style.box_container}>
        <div className={style.box_content}>
          <h2>Access Point</h2>
          <table className={style.GeneratedTable} id="ap">
            <AP />
            {APs.map((ap) => {
              if (ap.linha === "ap") {
                return (
                  <tbody>
                    <tr className={style.tr}>
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
                        <span className={ap.status === "Em Linha" ? style.statusemlinha : style.statusphaseout}>
                          {ap.status}
                        </span>
                      </td>
                      <td>
                        <a href={ap.pagina}>pagina</a>
                      </td>
                      <td>
                        <a href={ap.datashet_url}>datasheet</a>
                      </td>
                      <td>
                        <a href={ap.guia}>guia</a>
                      </td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        </div>
        <div className={style.box_content}>
          <h2>Conversor de Mídia</h2>
          <table className={style.GeneratedTable} id="conversor">
            <CONVERSOR />
            {Conversores.map((conversor) => {
              if (conversor.linha === "conversor") {
                return (
                  <tbody>
                    <tr className={style.tr}>
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
          <h2>Gbic</h2>
          <table className={style.GeneratedTable} id="switch">
            <GBIC />
            {Gbics.map((gbic) => {
              if (gbic.linha === "gbic") {
                return (
                  <tbody>
                    <tr className={style.tr}>
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
