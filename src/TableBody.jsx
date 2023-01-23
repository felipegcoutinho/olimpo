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
            <button id="ap" className={HideAP ? style.arrowHide : style.arrowShow} onClick={handleHideAP}>
              <span className={style.title}>Access Point</span>
            </button>
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
                  } else if (ap.modulação.toLowerCase().includes(queryAP.toLowerCase())) {
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
                        <td className={ap.throughputWireless50 === "x" ? style.NaoPossui : null}>
                          {ap.throughputWireless50 === "x" ? null : ap.throughputWireless50}
                        </td>
                        <td>{ap.qtdePortas}</td>
                        <td className={ap.poe === "x" && style.NaoPossui}>{ap.poe === "x" ? null : ap.poe}</td>
                        <td>{ap.tensao}</td>
                        <td>
                          <span className={style.tooltip}>
                            {ap.connectiVersion} {ap.connectiVersion !== "N/A" && <i className="fa-regular fa-circle-question"></i>}
                            {ap.connectiVersion !== "N/A" && (
                              <span className={style.tooltiptext}>
                                O AP precisa estar com a versão {ap.connectiVersion} para o connectFi funcionar.
                              </span>
                            )}
                          </span>
                        </td>

                        <td className={ap.handover === "x" ? style.NaoPossui : style.Possui}></td>
                        <td className={ap.wisefi === "x" ? style.NaoPossui : style.Possui}></td>
                        <td>{ap.potencia2G}</td>
                        <td className={ap.potencia5G === "x" && style.NaoPossui}>{ap.potencia5G === "x" ? null : ap.potencia5G}</td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={ap.pagina}>
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

        {/* RADIOS OUTDOOR */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <button id="radio" className={HideRADIO ? style.arrowHide : style.arrowShow} onClick={handleHideRADIO}>
              <span className={style.title}>Radios Outdoor</span>
            </button>
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
                  } else if (radio.modulação.toLowerCase().includes(queryRADIO.toLowerCase())) {
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
                        <td className={radio.aberturaHorVer === "x" && style.NaoPossui}>
                          {radio.aberturaHorVer === "x" ? null : radio.aberturaHorVer}
                        </td>
                        <td className={radio.distancia === "x" && style.NaoPossui}>{radio.distancia === "x" ? null : radio.distancia}</td>
                        <td>{radio.wireless}</td>
                        <td>{radio.garantia}</td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={radio.pagina}>
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

        {/* HO */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <button id="ho" className={HideHO ? style.arrowHide : style.arrowShow} onClick={handleHideHO}>
              <span className={style.title}>Home Office</span>
            </button>

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
                  } else if (roteador.modulação.toLowerCase().includes(queryHO.toLowerCase())) {
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

        {/* SWITCHS */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <button id="switch" className={HideSwitch ? style.arrowHide : style.arrowShow} onClick={handleHideSwitch}>
              <span className={style.title}>Switchs</span>
            </button>
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
                        <td>
                          {swicth.gerenciavel === "x" && <span className={style.NaoPossui}></span>}
                          {swicth.gerenciavel === "Sim" && <span className={style.Possui}></span>}
                        </td>
                        <td>
                          {swicth.poe === "x" && <span className={style.NaoPossui}></span>}
                          {swicth.poe !== "x" && <span>{swicth.poe}</span>}
                        </td>
                        <td>{swicth.taxaTransferencia}</td>
                        <td>{swicth.backplane}</td>
                        <td>
                          {swicth.sfp === "x" && <span className={style.NaoPossui}></span>}
                          {swicth.sfp !== "x" && <span>{swicth.sfp}</span>}
                        </td>
                        <td>
                          {swicth.poeExtender === "x" && <span className={style.NaoPossui}></span>}
                          {swicth.poeExtender !== "x" && <span className={style.Possui}></span>}
                        </td>
                        <td>
                          {swicth.poePorta === "x" && <span className={style.NaoPossui}></span>}
                          {swicth.poePorta !== "x" && <span>{swicth.poePorta}</span>}
                        </td>
                        <td>
                          {swicth.poeTotal === "x" && <span className={style.NaoPossui}></span>}
                          {swicth.poeTotal !== "x" && <span>{swicth.poeTotal}</span>}
                        </td>
                        <td>
                          {swicth.qos === "x" && <span className={style.NaoPossui}></span>}
                          {swicth.qos === "Sim" && <span className={style.Possui}></span>}
                        </td>
                        <td>{swicth.garantia}</td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={swicth.pagina}>
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

        {/* CONVERSOR */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <button id="conversor" className={HideConversor ? style.arrowHide : style.arrowShow} onClick={handleHideConversor}>
              <span className={style.title}>Conversor de Mídia</span>
            </button>
          </div>
          {HideConversor ? (
            <div style={{overflowX: "auto"}}>
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
                        <td>
                          {conversor.wdm === "x" && <span className={style.NaoPossui}></span>}
                          {conversor.wdm !== "x" && <span className={style.Possui}></span>}
                        </td>
                        <td>{conversor.distancia}</td>
                        <td>
                          <span className={conversor.modulação === "Fast" ? style.fast : style.giga}>{conversor.modulação}</span>
                        </td>
                        <td>{conversor.fibra}</td>
                        <td>{conversor.potencia}</td>
                        <td>{conversor.sensibilidade}</td>
                        <td>{conversor.garantia}</td>
                        <td>
                          <a target="_blank" rel="noopener noreferrer" href={conversor.pagina}>
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

        {/* SFP */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <button id="sfp" className={HideSFP ? style.arrowHide : style.arrowShow} onClick={handleHideSFP}>
              <span className={style.title}>Módulo SFP</span>
            </button>
          </div>
          {HideSFP ? (
            <div style={{overflowX: "auto"}}>
              <table className={style.devicesTable}>
                <GBIC />
                {Gbics.map((gbic) => {
                  if (gbic.linha === "gbic") {
                    return (
                      <tbody>
                        <tr>
                          <td>{gbic.modelo}</td>
                          <td>{gbic.tipoConector}</td>
                          <td>
                            {gbic.modulo === "SFP+" && <span className={style.variado1}>SFP+</span>}
                            {gbic.modulo === "SFP" && <span className={style.variado2}>SFP</span>}
                            {gbic.modulo === "Epon" && <span className={style.variado3}>EPON</span>}
                            {gbic.modulo === "Gpon" && <span className={style.fast}>GPON</span>}
                            {gbic.modulo === "XFP" && <span className={style.giga}>XFP</span>}
                          </td>
                          <td>
                            {gbic.wdm === "x" && <span className={style.NaoPossui}></span>}
                            {gbic.wdm !== "x" && <span className={style.Possui}></span>}
                          </td>
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
                            <a target="_blank" rel="noopener noreferrer" href={gbic.pagina}>
                              <span className={style.paginalink}>Ir para Página</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    );
                  }
                })}
              </table>
            </div>
          ) : null}
        </div>

        {/* ONU */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <button id="onu" className={HideONU ? style.arrowHide : style.arrowShow} onClick={handleHideONU}>
              <span className={style.title}> ONUs/ONTs</span>
            </button>
          </div>
          {HideONU ? (
            <div style={{overflowX: "auto"}}>
              <table className={style.devicesTable}>
                <ONU />
                {Onus.map((onu) => {
                  if (onu.linha === "onu/ont") {
                    return (
                      <tbody>
                        <tr>
                          <td>{onu.modelo}</td>
                          <td>
                            <span className={onu.modulação === "Fast" ? style.fast : style.giga}>{onu.modulação}</span>
                          </td>
                          <td>
                            {onu.fxs === "x" && <span className={style.NaoPossui}></span>}
                            {onu.fxs !== "x" && <span>{onu.fxs}</span>}
                          </td>
                          <td>
                            {onu.tipo === "EPON/GPON" && <span className={style.variado1}>{onu.tipo}</span>}
                            {onu.tipo === "GPON" && <span className={style.variado2}>{onu.tipo}</span>}
                          </td>
                          <td>{onu.sensibilidade}</td>
                          <td>
                            {onu.cobertura === "x" && <span className={style.NaoPossui}></span>}
                            {onu.cobertura !== "x" && <span>{onu.cobertura}</span>}
                          </td>
                          <td>
                            {onu.clientesSimultaneos === "x" && <span className={style.NaoPossui}></span>}
                            {onu.clientesSimultaneos !== "x" && <span>{onu.clientesSimultaneos}</span>}
                          </td>
                          <td>
                            {onu.transmissao2ghz === "x" && <span className={style.NaoPossui}></span>}
                            {onu.transmissao2ghz !== "x" && <span>{onu.transmissao2ghz}</span>}
                          </td>
                          <td>
                            {onu.transmissao5ghz === "x" && <span className={style.NaoPossui}></span>}
                            {onu.transmissao5ghz !== "x" && <span>{onu.transmissao5ghz}</span>}
                          </td>
                          <td>
                            {onu.ssid === "x" && <span className={style.NaoPossui}></span>}
                            {onu.ssid !== "x" && <span>{onu.ssid}</span>}
                          </td>
                          <td>
                            {onu.tr069 === "x" && <span className={style.NaoPossui}></span>}
                            {onu.tr069 === "Sim" && <span className={style.Possui}></span>}
                          </td>
                          <td>
                            {onu.customize === "x" && <span className={style.NaoPossui}></span>}
                            {onu.customize === "Sim" && <span className={style.Possui}></span>}
                          </td>
                          <td>
                            {onu.remotize === "x" && <span className={style.NaoPossui}></span>}
                            {onu.remotize === "Sim" && <span className={style.Possui}></span>}
                          </td>
                          <td>{onu.garantia}</td>
                          <td>
                            <a target="_blank" rel="noopener noreferrer" href={onu.pagina}>
                              <span className={style.paginalink}>Ir para Página</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    );
                  }
                })}
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
