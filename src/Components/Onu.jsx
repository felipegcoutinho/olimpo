import React from 'react';
import style from '/src/App.module.css';
import { ONU } from '/src/TableHead';
import Onu from '/src/Database/db_onu.json';

export default function Ap() {
  const [HideONU, setHideONU] = React.useState(true);
  const handleHideONU = () => setHideONU(!HideONU);

  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button
          id="onu"
          className={HideONU ? style.arrowHide : style.arrowShow}
          onClick={handleHideONU}
        >
          <span className={style.title}> ONUs/ONTs</span>
        </button>
      </div>
      {HideONU ? (
        <div style={{ overflowX: 'auto' }}>
          <table className={style.devicesTable}>
            <ONU />
            {Onu.map((onu) => {
              if (onu.linha === 'onu/ont') {
                return (
                  <tbody>
                    <tr>
                      <td
                        className={
                          onu.status === 'Phaseout'
                            ? style.status_phaseout
                            : style.status_suporte
                        }
                      >
                        {onu.modelo}
                      </td>
                      <td>
                        <span
                          className={
                            onu.modulação === 'Fast' ? style.fast : style.giga
                          }
                        >
                          {onu.modulação}
                        </span>
                      </td>
                      <td>
                        {onu.fxs === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.fxs !== 'x' && <span>{onu.fxs}</span>}
                      </td>
                      <td>
                        {onu.tipo === 'EPON/GPON' && (
                          <span className={style.variado1}>{onu.tipo}</span>
                        )}
                        {onu.tipo === 'GPON' && (
                          <span className={style.variado2}>{onu.tipo}</span>
                        )}
                      </td>
                      <td>{onu.sensibilidade}</td>
                      <td>
                        {onu.cobertura === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.cobertura !== 'x' && <span>{onu.cobertura}</span>}
                      </td>
                      <td>
                        {onu.clientesSimultaneos === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.clientesSimultaneos !== 'x' && (
                          <span>{onu.clientesSimultaneos}</span>
                        )}
                      </td>
                      <td>
                        {onu.transmissao2ghz === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.transmissao2ghz !== 'x' && (
                          <span>{onu.transmissao2ghz}</span>
                        )}
                      </td>
                      <td>
                        {onu.transmissao5ghz === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.transmissao5ghz !== 'x' && (
                          <span>{onu.transmissao5ghz}</span>
                        )}
                      </td>
                      <td>
                        {onu.ssid === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.ssid !== 'x' && <span>{onu.ssid}</span>}
                      </td>
                      <td>
                        {onu.tr069 === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.tr069 === 'Sim' && (
                          <span className={style.Possui}></span>
                        )}
                      </td>
                      <td>
                        {onu.customize === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.customize === 'Sim' && (
                          <span className={style.Possui}></span>
                        )}
                      </td>
                      <td>
                        {onu.remotize === 'x' && (
                          <span className={style.NaoPossui}></span>
                        )}
                        {onu.remotize === 'Sim' && (
                          <span className={style.Possui}></span>
                        )}
                      </td>
                      <td>{onu.garantia}</td>
                      <td>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={onu.pagina}
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
