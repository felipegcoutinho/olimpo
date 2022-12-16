import React from 'react';
import APs from './Data/ap.json';
import Conversores from './Data/conversores.json';
import Gbics from './Data/gbics.json';
import Radios from './Data/radios.json';
import Switchs from './Data/switchs.json';
import Onus from './Data/onus.json';
import Roteadores from './Data/roteadores.json';
import style from '../src/App.module.css';
import { AP, RADIO, CONVERSOR, GBIC, SWITCH, ONU, ROTEADOR } from './Header';

function App() {
  const [queryAP, setQueryAP] = React.useState('');
  const [HideAP, setHideAP] = React.useState(false);
  const handleHideAP = () => setHideAP(!HideAP);

  const [queryRADIO, setQueryRADIO] = React.useState('');
  const [HideRADIO, setHideRADIO] = React.useState(false);
  const handleHideRADIO = () => setHideRADIO(!HideRADIO);

  const [queryHO, setQueryHO] = React.useState('');
  const [HideHO, setHideHO] = React.useState(false);
  const handleHideHO = () => setHideHO(!HideHO);

  const [querySWITCH, setQuerySWITCH] = React.useState('');
  const [HideSwitch, setHideSwitch] = React.useState(false);
  const handleHideSwitch = () => setHideSwitch(!HideSwitch);

  const [HideConversor, setHideConversor] = React.useState(false);
  const handleHideConversor = () => setHideConversor(!HideConversor);

  const [HideSFP, setHideSFP] = React.useState(false);
  const handleHideSFP = () => setHideSFP(!HideSFP);

  const [HideONU, setHideONU] = React.useState(false);
  const handleHideONU = () => setHideONU(!HideONU);

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

  return (
    <div className={style.container}>
      <a href="#home">
        <div className={style.top}></div>
      </a>
      <div className={style.header_content} id="home">
        <div className={style.logo}>
          <p>Olimpo</p>
        </div>
        <div className={style.btn_container}>
          <a href="#ap">
            <button className={style.mainBtn}>Access Point</button>
          </a>
          <a href="#radio">
            <button className={style.mainBtn}>Radios Outdoor</button>
          </a>
          <a href="#ho">
            <button className={style.mainBtn}>Roteadores HO</button>
          </a>
          <a href="#switch">
            <button className={style.mainBtn}>Switch</button>
          </a>
          <a href="#conversor">
            <button className={style.mainBtn}>Conversor</button>
          </a>
          <a href="#gbic">
            <button className={style.mainBtn}>Modulo SFP</button>
          </a>
          <a href="#onu">
            <button className={style.mainBtn}>ONUs/ONTs</button>
          </a>
        </div>

        <div className={style.info}>
          <p>
            <b>
              <i>Legendas</i>
            </b>
          </p>
          <p>
            <b>N/A</b>= Informação Não Encontrada
          </p>
          <p>
            <span className={style.colorRed}></span> = Não Possui a Função.
          </p>
        </div>
      </div>
      {/* BOTÃO MOSTRAR / OCULTAR */}
      <div className={style.box_container}>
        <div className={style.hideShowContainer}>
          <div>
            <button className={style.btn_hideShow} onClick={MostrarTudo}>
              Mostrar Tudo <i class="fa-solid fa-eye"></i>
            </button>
            <button className={style.btn_hideShow} onClick={OcultarTudo}>
              Ocultar Tudo <i class="fa-regular fa-eye-slash"></i>
            </button>
          </div>
        </div>

        {/* ACCESS POINT */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="ap">
              Access Point
              <button
                className={HideAP ? style.btnHide : style.btnShow}
                onClick={handleHideAP}
              ></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o Equipamento"
                value={queryAP}
                onChange={handleSearchChangeAP}
                className={style.searchbar}
              />
            </label>
          </div>
          {HideAP ? (
            <div style={{ overflowX: 'auto' }}>
              <table className={style.devicesTable}>
                <AP />
                {APs.filter((ap) => {
                  if (ap.modelo.toLowerCase().includes(queryAP.toLowerCase())) {
                    return ap;
                  } else if (
                    ap.porta.toLowerCase().includes(queryAP.toLowerCase())
                  ) {
                    return ap;
                  }
                }).map((ap) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{ap.modelo}</td>
                        <td>{ap.cobertura}</td>
                        <td>{ap.raio}</td>
                        <td>{ap.usuarioMax}</td>
                        <td>
                          <span
                            className={
                              ap.porta === 'Fast' ? style.fast : style.gigabit
                            }
                          >
                            {ap.porta}
                          </span>
                        </td>
                        <td>{ap.throughputWireless24}</td>
                        <td
                          className={
                            ap.throughputWireless50 === ''
                              ? style.colorRed
                              : null
                          }
                        >
                          {ap.throughputWireless50}
                        </td>
                        <td>{ap.qtdePortas}</td>
                        <td className={ap.poe === '' && style.colorRed}>
                          {ap.poe}
                        </td>
                        <td>{ap.handover}</td>
                        <td>{ap.wisefi}</td>
                        <td>{ap.potenciaMax}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {ap.status === 'Phaseout' && (
                                <span className={style.status_phaseout}>
                                  {ap.status}
                                </span>
                              )}
                              {ap.status === 'Suporte' && (
                                <span className={style.status_suporte}>
                                  {ap.status}
                                </span>
                              )}
                            </span>
                            {ap.status === 'Phaseout' && (
                              <span className={style.tooltiptext}>
                                Apenas email
                              </span>
                            )}
                            {ap.status === 'Suporte' && (
                              <span className={style.tooltiptext}>
                                Fornecemos suporte
                              </span>
                            )}
                          </span>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ap.pagina}
                          >
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ap.datasheet}
                          >
                            <span className={style.pdfbtn}>Datasheet</span>
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ap.guia}
                          >
                            <span className={style.pdfbtn}>Guia</span>
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ap.manual}
                          >
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
              <button
                className={HideRADIO ? style.btnHide : style.btnShow}
                onClick={handleHideRADIO}
              ></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o Equipamento"
                value={queryRADIO}
                onChange={handleSearchChangeRADIO}
                className={style.searchbar}
              />
            </label>
          </div>
          {HideRADIO ? (
            <div style={{ overflowX: 'auto' }}>
              <table className={style.devicesTable}>
                <RADIO />
                {Radios.filter((radio) => {
                  if (
                    radio.modelo
                      .toLowerCase()
                      .includes(queryRADIO.toLowerCase())
                  ) {
                    return radio;
                  } else if (
                    radio.porta.toLowerCase().includes(queryRADIO.toLowerCase())
                  ) {
                    return radio;
                  }
                }).map((radio) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{radio.modelo}</td>
                        <td>{radio.indicado}</td>
                        <td>{radio.ganho}</td>
                        <td>
                          <span
                            className={
                              radio.porta === 'Fast'
                                ? style.fast
                                : style.gigabit
                            }
                          >
                            {radio.porta}
                          </span>
                        </td>
                        <td>{radio.potencia}</td>
                        <td>{radio.pps}</td>
                        <td>{radio.throughputEfetivo}</td>
                        <td>{radio.throughputNominal}</td>
                        <td>{radio.aberturaHorVer}</td>
                        <td>{radio.distancia}</td>
                        <td>{radio.wireless}</td>
                        <td>{radio.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {radio.status === 'Phaseout' && (
                                <span className={style.status_phaseout}>
                                  {radio.status}
                                </span>
                              )}
                              {radio.status === 'Suporte' && (
                                <span className={style.status_suporte}>
                                  {radio.status}
                                </span>
                              )}
                            </span>
                            {radio.status === 'Phaseout' && (
                              <span className={style.tooltiptext}>
                                Apenas email
                              </span>
                            )}
                            {radio.status === 'Suporte' && (
                              <span className={style.tooltiptext}>
                                Fornecemos suporte
                              </span>
                            )}
                          </span>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={radio.pagina}
                          >
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {radio.datasheet === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={radio.datasheet}
                            >
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {radio.guia === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={radio.guia}
                            >
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {radio.manual === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={radio.manual}
                            >
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
              <button
                className={HideHO ? style.btnHide : style.btnShow}
                onClick={handleHideHO}
              ></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                placeholder="Pesquise o Equipamento"
                value={queryHO}
                onChange={handleSearchChangeHO}
                className={style.searchbar}
              />
            </label>
          </div>
          {HideHO ? (
            <div style={{ overflowX: 'auto' }}>
              <table className={style.devicesTable}>
                <ROTEADOR />
                {Roteadores.filter((roteador) => {
                  if (
                    roteador.modelo
                      .toLowerCase()
                      .includes(queryHO.toLowerCase())
                  ) {
                    return roteador;
                  } else if (
                    roteador.porta.toLowerCase().includes(queryHO.toLowerCase())
                  ) {
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
                          <span
                            className={
                              roteador.porta === 'Fast'
                                ? style.fast
                                : style.gigabit
                            }
                          >
                            {roteador.porta}
                          </span>
                        </td>
                        <td>{roteador.QtdePortas}</td>
                        <td>{roteador.datarateMax}</td>
                        <td>{roteador.ganho}</td>
                        <td>{roteador.ipv6}</td>
                        <td>{roteador.repetidor}</td>
                        <td>{roteador.roteador}</td>
                        <td>{roteador.cliente}</td>
                        <td>{roteador.ap}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {roteador.status === 'Phaseout' && (
                                <span className={style.status_phaseout}>
                                  {roteador.status}
                                </span>
                              )}
                              {roteador.status === 'Suporte' && (
                                <span className={style.status_suporte}>
                                  {roteador.status}
                                </span>
                              )}
                            </span>
                            {roteador.status === 'Phaseout' && (
                              <span className={style.tooltiptext}>
                                Apenas email
                              </span>
                            )}
                            {roteador.status === 'Suporte' && (
                              <span className={style.tooltiptext}>
                                Fornecemos suporte
                              </span>
                            )}
                          </span>
                        </td>
                        <td>{roteador.garantia}</td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={roteador.pagina}
                          >
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {roteador.datasheet === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={roteador.datasheet}
                            >
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {roteador.guia === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={roteador.guia}
                            >
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {roteador.manual === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={roteador.manual}
                            >
                              <span className={style.pdfbtn}>Manual</span>
                            </a>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>{' '}
            </div>
          ) : null}
        </div>
        {/* SWITCHS */}
        <div className={style.box_content}>
          <div className={style.header_box_content}>
            <h2 id="switch">
              Switchs
              <button
                className={HideSwitch ? style.btnHide : style.btnShow}
                onClick={handleHideSwitch}
              ></button>
            </h2>
            <label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className={style.searchbar}
                placeholder="Pesquise o Equipamento"
                value={querySWITCH}
                onChange={handleSearchChangeSWITCH}
              />
            </label>
          </div>
          {HideSwitch ? (
            <div style={{ overflowX: 'auto' }}>
              <table className={style.devicesTable}>
                <SWITCH />
                {Switchs.filter((swicth) => {
                  if (
                    swicth.modelo
                      .toLowerCase()
                      .includes(querySWITCH.toLowerCase())
                  ) {
                    return swicth;
                  } else if (
                    swicth.gerenciavel
                      .toLowerCase()
                      .includes(querySWITCH.toLowerCase())
                  ) {
                    return swicth;
                  }
                }).map((swicth) => {
                  return (
                    <tbody>
                      <tr id={style.swicth_id}>
                        <td>
                          <span className={style.tooltip}>
                            {swicth.modelo}
                            {swicth.modelo === 'SG 2404 PoE L2+' && (
                              <i className="fa-regular fa-circle-question"></i>
                            )}
                            {swicth.modelo === 'SG 2404 PoE L2+' && (
                              <span className={style.tooltiptext}>
                                SG 2404 PoE L2+ (4760062)
                              </span>
                            )}
                          </span>
                        </td>

                        <td>{swicth.portas}</td>
                        <td>
                          <span
                            className={
                              swicth.modulação === 'Fast'
                                ? style.fast
                                : style.gigabit
                            }
                          >
                            {swicth.modulação}
                          </span>
                        </td>
                        <td>{swicth.gerenciavel}</td>
                        <td>{swicth.poe}</td>
                        <td>{swicth.taxaTransferencia}</td>
                        <td>{swicth.sfp}</td>
                        <td>{swicth.poeExtender}</td>
                        <td>{swicth.qos}</td>
                        <td>{swicth.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {swicth.status === 'Phaseout' && (
                                <span className={style.status_phaseout}>
                                  {swicth.status}
                                </span>
                              )}
                              {swicth.status === 'Suporte' && (
                                <span className={style.status_suporte}>
                                  {swicth.status}
                                </span>
                              )}
                            </span>
                            {swicth.status === 'Phaseout' && (
                              <span className={style.tooltiptext}>
                                Apenas email
                              </span>
                            )}
                            {swicth.status === 'Suporte' && (
                              <span className={style.tooltiptext}>
                                Fornecemos suporte
                              </span>
                            )}
                          </span>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={swicth.pagina}
                          >
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {swicth.datasheet === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={swicth.datasheet}
                            >
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {swicth.guia === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={swicth.guia}
                            >
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {swicth.manual === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={swicth.manual}
                            >
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
              <button
                className={HideConversor ? style.btnHide : style.btnShow}
                onClick={handleHideConversor}
              ></button>
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
                      <td>{conversor.wdm}</td>
                      <td>{conversor.distancia}</td>
                      <td>
                        <span
                          className={
                            conversor.modulação === 'Fast'
                              ? style.fast
                              : style.gigabit
                          }
                        >
                          {conversor.modulação}
                        </span>
                      </td>
                      <td>{conversor.fibra}</td>
                      <td>{conversor.potencia}</td>
                      <td>{conversor.recepMax}</td>
                      <td>{conversor.recepMin}</td>
                      <td>{conversor.garantia}</td>
                      <td>
                        <span className={style.tooltip}>
                          <span>
                            {conversor.status === 'Phaseout' && (
                              <span className={style.status_phaseout}>
                                {conversor.status}
                              </span>
                            )}
                            {conversor.status === 'Suporte' && (
                              <span className={style.status_suporte}>
                                {conversor.status}
                              </span>
                            )}
                          </span>
                          {conversor.status === 'Phaseout' && (
                            <span className={style.tooltiptext}>
                              Apenas email
                            </span>
                          )}
                          {conversor.status === 'Suporte' && (
                            <span className={style.tooltiptext}>
                              Fornecemos suporte
                            </span>
                          )}
                        </span>
                      </td>
                      <td>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={conversor.pagina}
                        >
                          <span className={style.paginalink}>Página</span>
                        </a>
                      </td>
                      <td>
                        {conversor.datasheet === '-' ? (
                          <a target="_blank" rel="noopener noreferrer" href="#">
                            <span className={style.pdfbtn_NA}>N/A</span>
                          </a>
                        ) : (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={conversor.datasheet}
                          >
                            <span className={style.pdfbtn}>Datasheet</span>
                          </a>
                        )}
                      </td>
                      <td>
                        {conversor.guia === '-' ? (
                          <a target="_blank" rel="noopener noreferrer" href="#">
                            <span className={style.pdfbtn_NA}>N/A</span>
                          </a>
                        ) : (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={conversor.guia}
                          >
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
            <h2 id="gbic">
              Módulo SFP
              <button
                className={HideSFP ? style.btnHide : style.btnShow}
                onClick={handleHideSFP}
              ></button>
            </h2>
          </div>
          {HideSFP ? (
            <table className={style.devicesTable}>
              <GBIC />
              {Gbics.map((gbic) => {
                if (gbic.linha === 'gbic') {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <b>{gbic.modelo}</b>
                        </td>
                        <td>{gbic.tipoConector}</td>
                        <td>
                          {gbic.modulo === 'SFP+' && (
                            <span className={style.variado1}>SFP+</span>
                          )}
                          {gbic.modulo === 'SFP' && (
                            <span className={style.variado2}>SFP</span>
                          )}
                          {gbic.modulo === 'Epon' && (
                            <span className={style.variado3}>EPON</span>
                          )}
                          {gbic.modulo === 'Gpon' && (
                            <span className={style.fast}>GPON</span>
                          )}
                          {gbic.modulo === 'XFP' && (
                            <span className={style.gigabit}>XFP</span>
                          )}
                        </td>
                        <td>{gbic.wdm}</td>

                        <td>
                          <span className={style.tooltip}>
                            {gbic.distancia}{' '}
                            {gbic.fibra === 'Multimodo' && (
                              <i className="fa-regular fa-circle-question"></i>
                            )}
                            {gbic.fibra === 'Multimodo' && (
                              <span className={style.tooltiptext}>
                                62,5 / 125 μm até 275 mts
                              </span>
                            )}
                          </span>
                        </td>
                        <td>{gbic.modulação}</td>
                        <td>{gbic.fibra}</td>
                        <td>{gbic.potencia}</td>
                        <td>{gbic.recepMaxMin}</td>
                        <td>{gbic.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {gbic.status === 'Phaseout' && (
                                <span className={style.status_phaseout}>
                                  {gbic.status}
                                </span>
                              )}
                              {gbic.status === 'Suporte' && (
                                <span className={style.status_suporte}>
                                  {gbic.status}
                                </span>
                              )}
                            </span>
                            {gbic.status === 'Phaseout' && (
                              <span className={style.tooltiptext}>
                                Apenas email
                              </span>
                            )}
                            {gbic.status === 'Suporte' && (
                              <span className={style.tooltiptext}>
                                Fornecemos suporte
                              </span>
                            )}
                          </span>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={gbic.pagina}
                          >
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={gbic.datasheet}
                          >
                            <span className={style.pdfbtn}>Datasheet</span>
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={gbic.guia}
                          >
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
              <button
                className={HideONU ? style.btnHide : style.btnShow}
                onClick={handleHideONU}
              ></button>
            </h2>
          </div>
          {HideONU ? (
            <table className={style.devicesTable}>
              <ONU />
              {Onus.map((onu) => {
                if (onu.linha === 'onu/ont') {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <b>{onu.modelo}</b>
                        </td>
                        <td>{onu.modulação}</td>
                        <td className={onu.fxs === '' ? style.colorRed : null}>
                          {onu.fxs}
                        </td>
                        <td>
                          {onu.tipo === 'EPON/GPON' && (
                            <span className={style.variado1}>{onu.tipo}</span>
                          )}
                          {onu.tipo === 'GPON' && (
                            <span className={style.variado2}>{onu.tipo}</span>
                          )}
                        </td>

                        <td
                          className={
                            onu.transmissao2ghz === '' ? style.colorRed : null
                          }
                        >
                          {onu.transmissao2ghz}
                        </td>
                        <td
                          className={
                            onu.transmissao5ghz === '' ? style.colorRed : null
                          }
                        >
                          {onu.transmissao5ghz}
                        </td>
                        <td className={onu.ssid === '' ? style.colorRed : null}>
                          {onu.ssid}
                        </td>
                        <td>{onu.tr069}</td>
                        <td>{onu.customize}</td>
                        <td>{onu.remotize}</td>
                        <td>{onu.garantia}</td>
                        <td>
                          <span className={style.tooltip}>
                            <span>
                              {onu.status === 'Phaseout' && (
                                <span className={style.status_phaseout}>
                                  {onu.status}
                                </span>
                              )}
                              {onu.status === 'Suporte' && (
                                <span className={style.status_suporte}>
                                  {onu.status}
                                </span>
                              )}
                            </span>
                            {onu.status === 'Phaseout' && (
                              <span className={style.tooltiptext}>
                                Apenas email
                              </span>
                            )}
                            {onu.status === 'Suporte' && (
                              <span className={style.tooltiptext}>
                                Fornecemos suporte
                              </span>
                            )}
                          </span>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={onu.pagina}
                          >
                            <span className={style.paginalink}>Página</span>
                          </a>
                        </td>
                        <td>
                          {onu.datasheet === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={onu.datasheet}
                            >
                              <span className={style.pdfbtn}>Datasheet</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {onu.guia === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={onu.guia}
                            >
                              <span className={style.pdfbtn}>Guia</span>
                            </a>
                          )}
                        </td>
                        <td>
                          {onu.manual === '-' ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="#"
                            >
                              <span className={style.pdfbtn_NA}>N/A</span>
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={onu.manual}
                            >
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
