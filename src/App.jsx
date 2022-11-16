import React, {useState} from "react";
import Data from "./data.json";
import style from "../src/App.module.css";
import {AP, CONVERSOR} from "./Header";

function App() {
  const [query, setQuery] = React.useState("");
  const filtered = query.length === 0;

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  const handlefibra = (e) => {
    setQuery("fibra");
  };
  const hanldlempre = (e) => {
    setQuery("empresariais");
  };
  const handleho = (e) => {
    setQuery("home");
  };

  return (
    <div className={style.container}>
      <div className={style.search}>
        <input
          placeholder="Pesquise o equipamento"
          value={query}
          onChange={handleSearchChange}
          className={style.searchbar}
        />
      </div>
      <div className={style.btn_container}>
        <button onClick={handlefibra}>Fibras</button>
        <button onClick={hanldlempre}>Empresariais</button>
        <button onClick={handleho}>Home Office</button>
      </div>

      {filtered ? (
        <div className={style.noData}>
          <p>Pesquise</p>
        </div>
      ) : (
        Data.filter((device) => {
          if (device.modelo.toLowerCase().includes(query.toLowerCase())) {
            return device;
          } else if (device.setor.toLowerCase().includes(query.toLowerCase())) {
            return device;
          }
        }).map((device, index) => (
          <div className={style.box_container} key={index}>
            <div className={style.box_content}>
              <h2>
                <span className={style.setorh1}>{device.modelo}</span>
                <span className={style.setorh3}>{device.setor}</span>
              </h2>

              <table className={style.GeneratedTable}>
                {device.linha === "AP" && (
                  <>
                    <AP />
                    <tbody>
                      <tr>
                        <td>{device.garantia}</td>
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
                        <td>
                          <span className={style.statusemlinha}>{device.status}</span>
                        </td>

                        <td>
                          <a href={device.pagina}>Página</a>
                        </td>
                        <td>
                          <a href={device.datashet_url}>Datasheet</a>
                        </td>
                        <td>
                          <a href={device.guia}>Guia</a>
                        </td>
                      </tr>
                    </tbody>
                  </>
                )}
                {device.linha === "CONVERSOR" && (
                  <>
                    <CONVERSOR />
                    <tbody>
                      <tr>
                        <td>{device.conector}</td>
                        <td>{device.wdm}</td>
                        <td>{device.distancia}</td>
                        <td>{device.modulação}</td>
                        <td>{device.tipo_fibra}</td>
                        <td>{device.potencia_sinal}</td>
                        <td>{device.compTx}</td>
                        <td>{device.compRx}</td>
                        <td>
                          <span className={device.status === "Em Linha" ? style.statusemlinha : style.statusphaseout}>
                            {device.status}
                          </span>
                        </td>
                        <td>{device.garantia}</td>
                        <td>
                          <a href={device.pagina}>Página</a>
                        </td>
                        <td>
                          <a href={device.datashet_url}>Datasheet</a>
                        </td>
                        <td>
                          <a href={device.guia}>Guia</a>
                        </td>
                      </tr>
                    </tbody>
                  </>
                )}
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
