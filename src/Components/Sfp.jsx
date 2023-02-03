import React from 'react';
import style from '/src/App.module.css';
import { SFP } from '/src/TableHead';
import Sfp from '/src/Database/db_sfp.json';

export default function Ap() {
  const [HideSFP, setHideSFP] = React.useState(true);
  const handleHideSFP = () => setHideSFP(!HideSFP);
  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button
          id="sfp"
          className={HideSFP ? style.arrowHide : style.arrowShow}
          onClick={handleHideSFP}
        >
          <span className={style.title}>Módulo SFP</span>
        </button>
      </div>
      {HideSFP ? (
        <div style={{ overflowX: 'auto' }}>
          <table className={style.devicesTable}>
            <SFP />
            {Sfp.map((sfp) => {
              if (sfp.linha === 'gbic') {
                return (
                  <tbody>
                    <tr>
                      <td
                        className={
                          sfp.status === 'Phaseout'
                            ? style.status_phaseout
                            : style.status_suporte
                        }
                      >
                        {sfp.modelo}
                      </td>
                      <td>{sfp.tipoConector}</td>
                      <td>
                        {sfp.modulo === 'SFP+' && (
                          <span className={style.variado1}>SFP+</span>
                        )}
                        {sfp.modulo === 'SFP' && (
                          <span className={style.variado2}>SFP</span>
                        )}
                        {sfp.modulo === 'Epon' && (
                          <span className={style.variado3}>EPON</span>
                        )}
                        {sfp.modulo === 'Gpon' && (
                          <span className={style.fast}>GPON</span>
                        )}
                        {sfp.modulo === 'XFP' && (
                          <span className={style.giga}>XFP</span>
                        )}
                      </td>
                      <td>
                        {sfp.wdm === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {sfp.wdm !== 'x' && (
                          <span className={style.Possui}></span>
                        )}
                      </td>
                      <td>
                        <span className={style.tooltip}>
                          {sfp.distancia}{' '}
                          {sfp.fibra === 'Multimodo' && (
                            <i className="fa-regular fa-circle-question"></i>
                          )}
                          {sfp.fibra === 'Multimodo' && (
                            <span className={style.tooltiptext}>
                              62,5 / 125 μm até 275 mts
                            </span>
                          )}
                        </span>
                      </td>

                      <td>
                        <span
                          className={
                            sfp.modulação === 'Fast' ? style.fast : style.giga
                          }
                        >
                          {sfp.modulação}
                        </span>
                      </td>
                      <td>{sfp.fibra}</td>
                      <td>{sfp.potencia}</td>
                      <td>{sfp.sensibilidade}</td>
                      <td>{sfp.garantia}</td>
                      <td>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={sfp.pagina}
                        >
                          <span className={style.paginalink}>
                            Ir para Página
                          </span>
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
  );
}
