import React from 'react';
import style from '/src/App.module.css';
import { CONVERSOR } from '/src/TableHead';
import Conversores from '/src/Database/db_conversores.json';

export default function Ap() {
  const [HideConversor, setHideConversor] = React.useState(true);
  const handleHideConversor = () => setHideConversor(!HideConversor);
  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button
          id="conversor"
          className={HideConversor ? style.arrowHide : style.arrowShow}
          onClick={handleHideConversor}
        >
          <span className={style.title}>Conversor de Mídia</span>
        </button>
      </div>
      {HideConversor ? (
        <div style={{ overflowX: 'auto' }}>
          <table className={style.devicesTable}>
            <CONVERSOR />
            {Conversores.map((conversor) => {
              return (
                <tbody>
                  <tr>
                    <td
                      className={
                        conversor.status === 'Phaseout'
                          ? style.status_phaseout
                          : style.status_suporte
                      }
                    >
                      {conversor.modelo}
                    </td>

                    <td>{conversor.conector}</td>
                    <td>
                      {conversor.wdm === 'x' && (
                        <span className={style.NaoPossui}></span>
                      )}
                      {conversor.wdm !== 'x' && (
                        <span className={style.Possui}></span>
                      )}
                    </td>
                    <td>{conversor.distancia}</td>
                    <td>
                      <span
                        className={
                          conversor.modulação === 'Fast'
                            ? style.fast
                            : style.giga
                        }
                      >
                        {conversor.modulação}
                      </span>
                    </td>
                    <td>{conversor.fibra}</td>
                    <td>{conversor.potencia}</td>
                    <td>{conversor.sensibilidade}</td>
                    <td>{conversor.garantia}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={conversor.pagina}
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
