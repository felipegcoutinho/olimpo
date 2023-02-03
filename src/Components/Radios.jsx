import React from 'react';
import style from '/src/App.module.css';
import { RADIO } from '/src/TableHead';
import Radios from '/src/Database/db_radios.json';

export default function Ap() {
  const [queryRADIO, setQueryRADIO] = React.useState('');
  const [HideRADIO, setHideRADIO] = React.useState(true);
  const handleHideRADIO = () => setHideRADIO(!HideRADIO);

  const handleSearchChangeRADIO = (e) => {
    setQueryRADIO(e.target.value);
  };
  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button
          id="radio"
          className={HideRADIO ? style.arrowHide : style.arrowShow}
          onClick={handleHideRADIO}
        >
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
        <div style={{ overflowX: 'auto' }}>
          <table className={style.devicesTable}>
            <RADIO />
            {Radios.filter((radio) => {
              if (
                radio.modelo.toLowerCase().includes(queryRADIO.toLowerCase())
              ) {
                return radio;
              } else if (
                radio.modulação.toLowerCase().includes(queryRADIO.toLowerCase())
              ) {
                return radio;
              }
            }).map((radio) => {
              return (
                <tbody>
                  <tr>
                    <td
                      className={
                        radio.status === 'Phaseout'
                          ? style.status_phaseout
                          : style.status_suporte
                      }
                    >
                      {radio.modelo}
                    </td>
                    <td>{radio.indicado}</td>
                    <td>
                      <span
                        className={
                          radio.modulação === 'Fast' ? style.fast : style.giga
                        }
                      >
                        {radio.modulação}
                      </span>
                    </td>
                    <td>
                      <span className={style.tooltip}>
                        {radio.ganho}{' '}
                        {radio.ganho === 'SEM ANTENA' && (
                          <i className="fa-regular fa-circle-question"></i>
                        )}
                        {radio.ganho === 'SEM ANTENA' && (
                          <span className={style.tooltiptext}>
                            Antena adquirida separadamente, indicar parceria{' '}
                            <a href="http://www.algcom.com.br">ALGCOM</a>
                          </span>
                        )}
                      </span>
                    </td>
                    <td>{radio.potencia}</td>
                    <td>{radio.pps}</td>
                    <td>{radio.throughputEfetivo}</td>
                    <td>{radio.throughputNominal}</td>
                    <td
                      className={
                        radio.aberturaHorVer === 'x' && style.NaoPossui
                      }
                    >
                      {radio.aberturaHorVer === 'x'
                        ? null
                        : radio.aberturaHorVer}
                    </td>
                    <td className={radio.distancia === 'x' && style.NaoPossui}>
                      {radio.distancia === 'x' ? null : radio.distancia}
                    </td>
                    <td>{radio.wireless}</td>
                    <td>{radio.garantia}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={radio.pagina}
                      >
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
