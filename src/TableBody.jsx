import React from "react";
import APs from "./Data/ap.json";
import Conversores from "./Data/conversores.json";
import Gbics from "./Data/gbics.json";
import Radios from "./Data/radios.json";
import Switchs from "./Data/switchs.json";
import Onus from "./Data/onus.json";
import Roteadores from "./Data/roteadores.json";
import style from "../src/App.module.css";
import {AP, RADIO, CONVERSOR, GBIC, SWITCH, ONU, ROTEADOR} from "./TableHead";

function App() {
  const [queryAP, setQueryAP] = React.useState("");
  const [HideAP, setHideAP] = React.useState(true);
  const handleHideAP = () => setHideAP(!HideAP);

  const [queryRADIO, setQueryRADIO] = React.useState("");
  const [HideRADIO, setHideRADIO] = React.useState(true);
  const handleHideRADIO = () => setHideRADIO(!HideRADIO);

  const [queryHO, setQueryHO] = React.useState("");
  const [HideHO, setHideHO] = React.useState(true);
  const handleHideHO = () => setHideHO(!HideHO);

  const [querySWITCH, setQuerySWITCH] = React.useState("");
  const [HideSwitch, setHideSwitch] = React.useState(true);
  const handleHideSwitch = () => setHideSwitch(!HideSwitch);

  const [HideConversor, setHideConversor] = React.useState(true);
  const handleHideConversor = () => setHideConversor(!HideConversor);

  const [HideSFP, setHideSFP] = React.useState(true);
  const handleHideSFP = () => setHideSFP(!HideSFP);

  const [HideONU, setHideONU] = React.useState(true);
  const handleHideONU = () => setHideONU(!HideONU);

  const [urlValue, setUrlValue] = React.useState("");

  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
  };
  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
  };
  const handleSearchChangeSWITCH = (e) => {
    setQuerySWITCH(e.target.value);
  };
  const handleSearchChangeHO = (e) => {
    setQueryHO(e.target.value);
  };
  const handleSearch = (e) => {
    setUrlValue(e.target.value);
  };

  const MostrarTudo = () => {
    setHideAP(true);
    setHideRADIO(true);
    setHideHO(true);
    setHideSwitch(true);
    setHideConversor(true);
    setHideSFP(true);
    setHideONU(true);
  };

  const OcultarTudo = () => {
    setHideAP(false);
    setHideRADIO(false);
    setHideHO(false);
    setHideSwitch(false);
    setHideConversor(false);
    setHideSFP(false);
    setHideONU(false);
  };

  const urlSearch = `https://www.intelbras.com/pt-br/busca/?q=${urlValue}&tipo_busca=pagina-resultado`;

  return (
    <div className={style.container}>
      <a href="#home">
        <div className={style.top}></div>
      </a>
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
          <input className={style.mainsearchbar} value={urlValue} onChange={handleSearch} placeholder="Pesquise em intelbras.com.br" />

          <a target="_blank" rel="noopener noreferrer" href={urlSearch}>
            {urlValue === "" ? null : <button className={style.mainSearchBtn}></button>}
          </a>
          {urlValue === "" ? null : <button className={style.mainSearchBtnClean} onClick={() => setUrlValue("")}></button>}
        </div>

        <div className={style.btns_container}>
          <a href="#ap">
            <button className={style.btns}>Access Point</button>
          </a>
          <a href="#radio">
            <button className={style.btns}>Radio Outdoor</button>
          </a>
          <a href="#ho">
            <button className={style.btns}>Roteador HO</button>
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

        <div className={style.legendas}>
          <p>
            <b>
              <i>Legendas</i>
            </b>
          </p>
          <p>
            <b>N/A</b> = Informação Não Encontrada.
          </p>
          <p>X = Não Possui a Função.</p>
        </div>
      </div>

      {/* BOTÃO MOSTRAR / OCULTAR */}
      <div className={style.box_container}>
        <div>
          <button className={style.btn_hideShow} onClick={MostrarTudo}>
            Mostrar Tudo <i className="fa-solid fa-eye"></i>
          </button>
          <button className={style.btn_hideShow} onClick={OcultarTudo}>
            Ocultar Tudo <i className="fa-regular fa-eye-slash"></i>
          </button>
        </div>

        {/* ACCESS POINT */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="ap">
              Access Point
              <button className={HideAP ? style.arrowHide : style.arrowShow} onClick={handleHideAP}></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o Equipamento"
                value={queryAP}
                onChange={handleSearchChangeAP}
                className={style.searchBarDevices}
              />
            </label>
          </div>
          {HideAP ? (
            <div style={{overflowX: "auto"}}>
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
                        <td>{ap.modelo}</td>
                        <td>
                          <span className={ap.modulação === "Fast" ? style.fast : style.giga}>{ap.modulação}</span>
                        </td>
                        <td>{ap.cobertura}</td>
                        <td>{ap.raio}</td>
                        <td>{ap.usuarioMax}</td>

                        <td>{ap.throughputWireless24}</td>
                        <td className={ap.throughputWireless50 === "x" ? style.NaoPossui : null}>{ap.throughputWireless50}</td>
                        <td>{ap.qtdePortas}</td>
                        <td className={ap.poe === "x" && style.NaoPossui}>{ap.poe}</td>
                        <td>{ap.handover}</td>
                        <td>{ap.wisefi}</td>
                        <td>{ap.potenciaMax}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {ap.status === "Phaseout" && <span className={style.status_phaseout}>{ap.status}</span>}
                              {ap.status === "Suporte" && <span className={style.status_suporte}>{ap.status}</span>}
                            </span>
                            {ap.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                            {ap.status === "Suporte" && <span className={style.tooltiptext}>Fornecemos suporte</span>}
                          </span>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={ap.pagina}>
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={ap.datasheet}>
                            <span className={style.pdfbtn}>Datasheet</span>
                          </a>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={ap.guia}>
                            <span className={style.pdfbtn}>Guia</span>
                          </a>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={ap.manual}>
                            <span className={style.pdfbtn}>Manual</span>
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
        {/* RADIOS OUTDOOR */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="radio">
              Radios Outdoor
              <button className={HideRADIO ? style.arrowHide : style.arrowShow} onClick={handleHideRADIO}></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o Equipamento"
                value={queryRADIO}
                onChange={handleSearchChangeRADIO}
                className={style.searchBarDevices}
              />
            </label>
          </div>
          {HideRADIO ? (
            <div style={{overflowX: "auto"}}>
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
                        <td>{radio.modelo}</td>

                        <td>{radio.indicado}</td>
                        <td>
                          <span className={radio.modulação === "Fast" ? style.fast : style.giga}>{radio.modulação}</span>
                        </td>
                        <td>
                          <span className={style.tooltip}>
                            {radio.ganho} {radio.ganho === "SEM ANTENA" && <i className="fa-regular fa-circle-question"></i>}
                            {radio.ganho === "SEM ANTENA" && (
                              <span className={style.tooltiptext}>
                                Antena adquirida separadamente, indicar parceria <a href="http://www.algcom.com.br">ALGCOM</a>
                              </span>
                            )}
                          </span>
                        </td>
                        <td>{radio.potencia}</td>
                        <td>{radio.pps}</td>
                        <td>{radio.throughputEfetivo}</td>
                        <td>{radio.throughputNominal}</td>
                        <td className={radio.aberturaHorVer === "x" && style.NaoPossui}>{radio.aberturaHorVer}</td>
                        <td className={radio.distancia === "x" && style.NaoPossui}>{radio.distancia}</td>
                        <td>{radio.wireless}</td>
                        <td>{radio.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {radio.status === "Phaseout" && <span className={style.status_phaseout}>{radio.status}</span>}
                              {radio.status === "Suporte" && <span className={style.status_suporte}>{radio.status}</span>}
                            </span>
                            {radio.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                            {radio.status === "Suporte" && <span className={style.tooltiptext}>Fornecemos suporte</span>}
                          </span>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={radio.pagina}>
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {radio.datasheet === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={radio.datasheet}>
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {radio.guia === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={radio.guia}>
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {radio.manual === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={radio.manual}>
                              <span className={style.pdfbtn}>Manual</span>
                            </a>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          ) : null}
        </div>
        {/* HO */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="ho">
              Roteadores HO
              <button className={HideHO ? style.arrowHide : style.arrowShow} onClick={handleHideHO}></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o Equipamento"
                value={queryHO}
                onChange={handleSearchChangeHO}
                className={style.searchBarDevices}
              />
            </label>
          </div>
          {HideHO ? (
            <div style={{overflowX: "auto"}}>
              <table className={style.devicesTable}>
                <ROTEADOR />
                {Roteadores.filter((roteador) => {
                  if (roteador.modelo.toLowerCase().includes(queryHO.toLowerCase())) {
                    return roteador;
                  } else if (roteador.porta.toLowerCase().includes(queryHO.toLowerCase())) {
                    return roteador;
                  }
                }).map((roteador) => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <b>{roteador.modelo}</b>
                        </td>
                        <td>{roteador.cobertura}</td>
                        <td>{roteador.raio}</td>
                        <td>{roteador.usuarioMax}</td>
                        <td>{roteador.planoRecomendado}</td>
                        <td>
                          <span className={roteador.porta === "Fast" ? style.fast : style.giga}>{roteador.porta}</span>
                        </td>
                        <td>{roteador.QtdePortas}</td>
                        <td>{roteador.datarateMax}</td>
                        <td>{roteador.ganho}</td>
                        <td className={roteador.ipv6 === "x" ? style.NaoPossui : null}>{roteador.ipv6}</td>
                        <td className={roteador.repetidor === "x" ? style.NaoPossui : null}>{roteador.repetidor}</td>
                        <td className={roteador.roteador === "x" ? style.NaoPossui : null}>{roteador.roteador}</td>
                        <td className={roteador.cliente === "x" ? style.NaoPossui : null}>{roteador.cliente}</td>
                        <td className={roteador.ap === "x" ? style.NaoPossui : null}>{roteador.ap}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {roteador.status === "Phaseout" && <span className={style.status_phaseout}>{roteador.status}</span>}
                              {roteador.status === "Suporte" && <span className={style.status_suporte}>{roteador.status}</span>}
                            </span>
                            {roteador.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                            {roteador.status === "Suporte" && <span className={style.tooltiptext}>Fornecemos suporte</span>}
                          </span>
                        </td>
                        <td>{roteador.garantia}</td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={roteador.pagina}>
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {roteador.datasheet === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={roteador.datasheet}>
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {roteador.guia === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={roteador.guia}>
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {roteador.manual === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={roteador.manual}>
                              <span className={style.pdfbtn}>Manual</span>
                            </a>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>{" "}
            </div>
          ) : null}
        </div>
        {/* SWITCHS */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="switch">
              Switchs
              <button className={HideSwitch ? style.arrowHide : style.arrowShow} onClick={handleHideSwitch}></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className={style.searchBarDevices}
                placeholder="Pesquise o Equipamento"
                value={querySWITCH}
                onChange={handleSearchChangeSWITCH}
              />
            </label>
          </div>
          {HideSwitch ? (
            <div style={{overflowX: "auto"}}>
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
                      <tr id={style.swicth_id}>
                        <td>
                          <span className={style.tooltip}>
                            {swicth.modelo}
                            {swicth.modelo === "SG 2404 PoE L2+" && <i className="fa-regular fa-circle-question"></i>}
                            {swicth.modelo === "SG 2404 PoE L2+" && <span className={style.tooltiptext}>SG 2404 PoE L2+ (4760062)</span>}
                          </span>
                        </td>
                        <td>
                          <span className={swicth.modulação === "Fast" ? style.fast : style.giga}>{swicth.modulação}</span>
                        </td>
                        <td>{swicth.portas}</td>
                        <td className={swicth.gerenciavel === "x" && style.NaoPossui}>{swicth.gerenciavel}</td>
                        <td className={swicth.poe === "x" && style.NaoPossui}>{swicth.poe}</td>
                        <td>{swicth.taxaTransferencia}</td>
                        <td>{swicth.backplane}</td>
                        <td className={swicth.sfp === "x" && style.NaoPossui}>{swicth.sfp}</td>
                        <td className={swicth.poeExtender === "x" && style.NaoPossui}>{swicth.poeExtender}</td>
                        <td className={swicth.poePorta === "x" && style.NaoPossui}>{swicth.poePorta}</td>
                        <td className={swicth.poeTotal === "x" && style.NaoPossui}>{swicth.poeTotal}</td>
                        <td>{swicth.qos}</td>
                        <td>{swicth.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {swicth.status === "Phaseout" && <span className={style.status_phaseout}>{swicth.status}</span>}
                              {swicth.status === "Suporte" && <span className={style.status_suporte}>{swicth.status}</span>}
                            </span>
                            {swicth.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                            {swicth.status === "Suporte" && <span className={style.tooltiptext}>Fornecemos suporte</span>}
                          </span>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={swicth.pagina}>
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {swicth.datasheet === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={swicth.datasheet}>
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {swicth.guia === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={swicth.guia}>
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {swicth.manual === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={swicth.manual}>
                              <span className={style.pdfbtn}>Manual</span>
                            </a>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          ) : null}
        </div>
        {/* CONVERSOR */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="conversor">
              Conversor de Mídia
              <button className={HideConversor ? style.arrowHide : style.arrowShow} onClick={handleHideConversor}></button>
            </h2>
          </div>
          {HideConversor ? (
            <table className={style.devicesTable}>
              <CONVERSOR />
              {Conversores.map((conversor) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <b>{conversor.modelo}</b>
                      </td>
                      <td>{conversor.conector}</td>
                      <td className={conversor.wdm === "x" ? style.NaoPossui : null}>{conversor.wdm}</td>
                      <td>{conversor.distancia}</td>
                      <td>
                        <span className={conversor.modulação === "Fast" ? style.fast : style.giga}>{conversor.modulação}</span>
                      </td>
                      <td>{conversor.fibra}</td>
                      <td>{conversor.potencia}</td>
                      <td>{conversor.recepMax}</td>
                      <td>{conversor.recepMin}</td>
                      <td>{conversor.garantia}</td>
                      <td>
                        <span className={style.tooltip}>
                          <span>
                            {conversor.status === "Phaseout" && <span className={style.status_phaseout}>{conversor.status}</span>}
                            {conversor.status === "Suporte" && <span className={style.status_suporte}>{conversor.status}</span>}
                          </span>
                          {conversor.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                          {conversor.status === "Suporte" && <span className={style.tooltiptext}>Fornecemos suporte</span>}
                        </span>
                      </td>
                      <td>
                        <a target="_blank" rel="noopener noreferrer" href={conversor.pagina}>
                          <span className={style.paginalink}>Página</span>
                        </a>
                      </td>
                      <td>
                        {conversor.datasheet === "-" ? (
                          <a target="_blank" rel="noopener noreferrer" href="#">
                            <span className={style.pdfbtn_NA}>N/A</span>
                          </a>
                        ) : (
                          <a target="_blank" rel="noopener noreferrer" href={conversor.datasheet}>
                            <span className={style.pdfbtn}>Datasheet</span>
                          </a>
                        )}
                      </td>
                      <td>
                        {conversor.guia === "-" ? (
                          <a target="_blank" rel="noopener noreferrer" href="#">
                            <span className={style.pdfbtn_NA}>N/A</span>
                          </a>
                        ) : (
                          <a target="_blank" rel="noopener noreferrer" href={conversor.guia}>
                            <span className={style.pdfbtn}>Guia</span>
                          </a>
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          ) : null}
        </div>
        {/* SFP */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="sfp">
              Módulo SFP
              <button className={HideSFP ? style.arrowHide : style.arrowShow} onClick={handleHideSFP}></button>
            </h2>
          </div>
          {HideSFP ? (
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
                        <td>{gbic.tipoConector}</td>
                        <td>
                          {gbic.modulo === "SFP+" && <span className={style.variado1}>SFP+</span>}
                          {gbic.modulo === "SFP" && <span className={style.variado2}>SFP</span>}
                          {gbic.modulo === "Epon" && <span className={style.variado3}>EPON</span>}
                          {gbic.modulo === "Gpon" && <span className={style.fast}>GPON</span>}
                          {gbic.modulo === "XFP" && <span className={style.giga}>XFP</span>}
                        </td>
                        <td className={gbic.wdm === "x" ? style.NaoPossui : null}>{gbic.wdm}</td>
                        <td>
                          <span className={style.tooltip}>
                            {gbic.distancia} {gbic.fibra === "Multimodo" && <i className="fa-regular fa-circle-question"></i>}
                            {gbic.fibra === "Multimodo" && <span className={style.tooltiptext}>62,5 / 125 μm até 275 mts</span>}
                          </span>
                        </td>

                        <td>
                          <span className={gbic.modulação === "Fast" ? style.fast : style.giga}>{gbic.modulação}</span>
                        </td>
                        <td>{gbic.fibra}</td>
                        <td>{gbic.potencia}</td>
                        <td>{gbic.sensibilidade}</td>
                        <td>{gbic.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {gbic.status === "Phaseout" && <span className={style.status_phaseout}>{gbic.status}</span>}
                              {gbic.status === "Suporte" && <span className={style.status_suporte}>{gbic.status}</span>}
                            </span>
                            {gbic.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                            {gbic.status === "Suporte" && <span className={style.tooltiptext}>Fornecemos suporte</span>}
                          </span>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={gbic.pagina}>
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={gbic.datasheet}>
                            <span className={style.pdfbtn}>Datasheet</span>
                          </a>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={gbic.guia}>
                            <span className={style.pdfbtn}>Guia</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                }
              })}
            </table>
          ) : null}
        </div>
        {/* ONU */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="onu">
              ONUs/ONTs
              <button className={HideONU ? style.arrowHide : style.arrowShow} onClick={handleHideONU}></button>
            </h2>
          </div>
          {HideONU ? (
            <table className={style.devicesTable}>
              <ONU />
              {Onus.map((onu) => {
                if (onu.linha === "onu/ont") {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <b>{onu.modelo}</b>
                        </td>

                        <td>
                          <span className={onu.modulação === "Fast" ? style.fast : style.giga}>{onu.modulação}</span>
                        </td>
                        <td className={onu.fxs === "x" ? style.NaoPossui : null}>{onu.fxs}</td>
                        <td>
                          {onu.tipo === "EPON/GPON" && <span className={style.variado1}>{onu.tipo}</span>}
                          {onu.tipo === "GPON" && <span className={style.variado2}>{onu.tipo}</span>}
                        </td>
                        <td>{onu.sensibilidade}</td>
                        <td className={onu.cobertura === "x" ? style.NaoPossui : null}>{onu.cobertura}</td>
                        <td className={onu.clientesSimultaneos === "x" ? style.NaoPossui : null}>{onu.clientesSimultaneos}</td>
                        <td className={onu.transmissao2ghz === "x" ? style.NaoPossui : null}>{onu.transmissao2ghz}</td>
                        <td className={onu.transmissao5ghz === "x" ? style.NaoPossui : null}>{onu.transmissao5ghz}</td>
                        <td className={onu.ssid === "x" ? style.NaoPossui : null}>{onu.ssid}</td>
                        <td className={onu.tr069 === "x" ? style.NaoPossui : null}>{onu.tr069}</td>
                        <td className={onu.customize === "x" ? style.NaoPossui : null}>{onu.customize}</td>
                        <td className={onu.remotize === "x" ? style.NaoPossui : null}>{onu.remotize}</td>
                        <td>{onu.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {onu.status === "Phaseout" && <span className={style.status_phaseout}>{onu.status}</span>}
                              {onu.status === "Suporte" && <span className={style.status_suporte}>{onu.status}</span>}
                            </span>
                            {onu.status === "Phaseout" && <span className={style.tooltiptext}>Apenas email</span>}
                            {onu.status === "Suporte" && <span className={style.tooltiptext}>Fornecemos suporte</span>}
                          </span>
                        </td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={onu.pagina}>
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {onu.datasheet === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={onu.datasheet}>
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {onu.guia === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={onu.guia}>
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {onu.manual === "-" ? (
                            <a target="_blank" rel="noopener noreferrer" href="#">
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a target="_blank" rel="noopener noreferrer" href={onu.manual}>
                              <span className={style.pdfbtn}>Manual</span>
                            </a>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                }
              })}
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
