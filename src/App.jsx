import React, {useState} from "react";
import Data from "./data.json";
import style from "../src/App.module.css";
import {AP, CONVERSOR, SWITCH} from "./Header";

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
            {Data.map((device) => {
              if (device.linha === "ap") {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <b>{device.modelo}</b>
                      </td>
                      <td>{device.cobertura}</td>
                      <td>{device.raio}</td>
                      <td>{device.usuarioMax}</td>
                      <td>{device.porta}</td>
                      <td>{device.throughputWireless24}</td>
                      <td>{device.throughputWireless50}</td>
                      <td>{device.qtdePortas}</td>
                      <td>{device.PoE}</td>
                      <td>{device.handover}</td>
                      <td>{device.PotMaxTx}</td>
                      <td>{device.status}</td>
                      <td>
                        <a href={device.pagina}>pagina</a>
                      </td>
                      <td>
                        <a href={device.datashet_url}>datasheet</a>
                      </td>
                      <td>
                        <a href={device.guia}>guia</a>
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
            {Data.map((device) => {
              if (device.linha === "conversor") {
                return (
                  <tbody>
                    <tr>
                      <td>{device.modelo}</td>
                      <td>{device.cobertura}</td>
                      <td>{device.raio}</td>
                      <td>{device.Usuários_simultâneos}</td>
                      <td>{device.porta}</td>
                      <td>{device.Wireless_2_4ghz}</td>
                      <td>{device.Wireless_5ghz}</td>
                      <td>{device.compTxQtde_Portas}</td>
                      <td>{device.PoE}</td>
                      <td>{device.handover}</td>
                      <td>{device.PotMaxTx}</td>
                      <td>{device.status}</td>
                      <td>{device.pagina}</td>
                      <td>{device.Datasheet}</td>
                      <td>{device.guia}</td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        </div>
        <div className={style.box_content}>
          <h2>Switch</h2>
          <table className={style.GeneratedTable} id="switch">
            <SWITCH />
            {Data.map((device) => {
              if (device.linha === "switch") {
                return (
                  <tbody>
                    <tr>
                      <td>{device.modelo}</td>
                      <td>{device.cobertura}</td>
                      <td>{device.raio}</td>
                      <td>{device.Usuários_simultâneos}</td>
                      <td>{device.porta}</td>
                      <td>{device.Wireless_2_4ghz}</td>
                      <td>{device.Wireless_5ghz}</td>
                      <td>{device.compTxQtde_Portas}</td>
                      <td>{device.PoE}</td>
                      <td>{device.handover}</td>
                      <td>{device.PotMaxTx}</td>
                      <td>{device.status}</td>
                      <td>{device.pagina}</td>
                      <td>{device.Datasheet}</td>
                      <td>{device.guia}</td>
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
