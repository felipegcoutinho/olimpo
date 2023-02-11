import React from "react";
import style from "/src/App.module.css";
import {ROTEADOR} from "/src/TableHead";
import Roteadores from "/src/Database/db_roteadores.json";

export default function Ap() {
  const [queryHO, setQueryHO] = React.useState("");
  const [HideHO, setHideHO] = React.useState(true);
  const handleHideHO = () => setHideHO(!HideHO);

  const handleSearchChangeHO = (e) => {
    setQueryHO(e.target.value);
  };

  const [id, Setid] = useState("");
  const [modelo, SetModelo] = useState("");
  const [linha, Setlinha] = useState("");
  const [cobertura, Setcobertura] = useState("");
  const [raio, Setraio] = useState("");
  const [usuarioMax, SetusuarioMax] = useState("");
  const [planoRecomendado, SetplanoRecomendado] = useState("");
  const [QtdePortas, SetQtdePortas] = useState("");
  const [modulação, Setmodulação] = useState("");
  const [datarateMax2G, SetdatarateMax2G] = useState("");
  const [datarateMax5G, SetdatarateMax5G] = useState("");
  const [ipv6, Setipv6] = useState("");
  const [wps, Setwps] = useState("");
  const [antenas, Setantenas] = useState("");
  const [ganho, Setganho] = useState("");
  const [potenciaMax, SetpotenciaMax] = useState("");
  const [tensao, Settensao] = useState("");
  const [consumo, Setconsumo] = useState("");
  const [repetidor, Setrepetidor] = useState("");
  const [roteador, Setroteador] = useState("");
  const [cliente, Setcliente] = useState("");
  const [ap, Setap] = useState("");
  const [garantia, Setgarantia] = useState("");
  const [status, Setstatus] = useState("");
  const [pagina, Setpagina] = useState("");
  const [datasheet, Setdatasheet] = useState("");
  const [guia, Setguia] = useState("");
  const [manual, Setmanual] = useState("");

  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button id="ho" className={HideHO ? style.arrowHide : style.arrowShow} onClick={handleHideHO}>
          <span className={style.title}>Home Office</span>
        </button>

        <label>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Pesquise o Equipamento" value={queryHO} onChange={handleSearchChangeHO} className={style.searchBarDevices} />
        </label>
      </div>
      {HideHO ? (
        <div style={{overflowX: "auto"}}>
          <table className={style.devicesTable}>
            <ROTEADOR />
            {Roteadores.filter((roteador) => {
              if (roteador.modelo.toLowerCase().includes(queryHO.toLowerCase())) {
                return roteador;
              } else if (roteador.modulação.toLowerCase().includes(queryHO.toLowerCase())) {
                return roteador;
              }
            }).map((roteador) => {
              return (
                <tbody>
                  <tr>
                    <td className={roteador.status === "Phaseout" ? style.status_phaseout : style.status_suporte}>{roteador.modelo}</td>
                    <td>{roteador.cobertura}</td>
                    <td>{roteador.raio}</td>
                    <td>{roteador.usuarioMax}</td>
                    <td>{roteador.planoRecomendado}</td>
                    <td>
                      <span className={roteador.modulação === "Fast" ? style.fast : style.giga}>{roteador.modulação}</span>
                    </td>
                    <td>{roteador.QtdePortas}</td>
                    <td>{roteador.datarateMax2G}</td>
                    <td className={roteador.datarateMax5G === "x" ? style.NaoPossui : null}>
                      {roteador.datarateMax5G === "x" ? null : roteador.datarateMax5G}
                    </td>
                    <td>{roteador.ganho}</td>
                    <td className={roteador.ipv6 === "x" ? style.NaoPossui : style.Possui}></td>
                    <td>
                      {roteador.repetidor === "x" && <span className={style.NaoPossui}></span>}
                      {roteador.repetidor === "Sim" && <span className={style.Possui}></span>}
                      {roteador.repetidor === "N/A" && <span>{roteador.repetidor}</span>}
                    </td>
                    <td>
                      {roteador.roteador === "x" && <span className={style.NaoPossui}></span>}
                      {roteador.roteador === "Sim" && <span className={style.Possui}></span>}
                      {roteador.roteador === "N/A" && <span>{roteador.roteador}</span>}
                    </td>
                    <td>
                      {roteador.cliente === "x" && <span className={style.NaoPossui}></span>}
                      {roteador.cliente === "Sim" && <span className={style.Possui}></span>}
                      {roteador.cliente === "N/A" && <span>{roteador.cliente}</span>}
                    </td>
                    <td>
                      {roteador.ap === "x" && <span className={style.NaoPossui}></span>}
                      {roteador.ap === "Sim" && <span className={style.Possui}></span>}
                      {roteador.ap === "N/A" && <span>{roteador.ap}</span>}
                    </td>
                    <td>{roteador.garantia}</td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href={roteador.pagina}>
                        <span className={style.paginalink}>Ir para Página</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      ) : null}
    </div>
  );
}
