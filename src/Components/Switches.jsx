import React from 'react';
import style from '/src/App.module.css';
import { SWITCH } from '/src/TableHead';
import Switches from '/src/Database/db_switches.json';

export default function Ap() {
  const [querySWITCH, setQuerySWITCH] = React.useState('');
  const [HideSwitch, setHideSwitch] = React.useState(true);
  const handleHideSwitch = () => setHideSwitch(!HideSwitch);

  const handleSearchChangeSWITCH = (e) => {
    setQuerySWITCH(e.target.value);
  };
  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button
          id="switch"
          className={HideSwitch ? style.arrowHide : style.arrowShow}
          onClick={handleHideSwitch}
        >
          <span className={style.title}>Switches</span>
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
        <div style={{ overflowX: 'auto' }}>
          <table className={style.devicesTable}>
            <SWITCH />
            {Switches.filter((swicth) => {
              if (
                swicth.modelo.toLowerCase().includes(querySWITCH.toLowerCase())
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
                    <td
                      className={
                        swicth.status === 'Phaseout'
                          ? style.status_phaseout
                          : style.status_suporte
                      }
                    >
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
                    <td>
                      <span
                        className={
                          swicth.modulação === 'Fast' ? style.fast : style.giga
                        }
                      >
                        {swicth.modulação}
                      </span>
                    </td>
                    <td>{swicth.portas}</td>
                    <td>
                      {swicth.gerenciavel === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {swicth.gerenciavel === 'Sim' && (
                        <span className={style.Possui}></span>
                      )}
                    </td>
                    <td>
                      {swicth.poe === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {swicth.poe !== 'x' && <span>{swicth.poe}</span>}
                    </td>
                    <td>{swicth.taxaTransferencia}</td>
                    <td>{swicth.backplane}</td>
                    <td>
                      {swicth.sfp === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {swicth.sfp !== 'x' && <span>{swicth.sfp}</span>}
                    </td>
                    <td>
                      {swicth.poeExtender === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {swicth.poeExtender !== 'x' && (
                        <span className={style.Possui}></span>
                      )}
                    </td>
                    <td>
                      {swicth.poePorta === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {swicth.poePorta !== 'x' && (
                        <span>{swicth.poePorta}</span>
                      )}
                    </td>
                    <td>
                      {swicth.poeTotal === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {swicth.poeTotal !== 'x' && (
                        <span>{swicth.poeTotal}</span>
                      )}
                    </td>
                    <td>
                      {swicth.qos === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {swicth.qos === 'Sim' && (
                        <span className={style.Possui}></span>
                      )}
                    </td>
                    <td>{swicth.garantia}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={swicth.pagina}
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
