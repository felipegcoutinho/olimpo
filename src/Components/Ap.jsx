import React from 'react';
import style from '/src/App.module.css';
import AP from '/src/TableHead';
import APs from '/src/Database/db_ap.json';

export default function Ap() {
  const [queryAP, setQueryAP] = React.useState('');
  const [HideAP, setHideAP] = React.useState(true);
  const handleHideAP = () => setHideAP(!HideAP);

  const handleSearchChangeAP = (e) => {
    setQueryAP(e.target.value);
  };

  return (
    <div className={style.box_content}>
      <div className={style.header_box_content}>
        <button
          id="ap"
          className={HideAP ? style.arrowHide : style.arrowShow}
          onClick={handleHideAP}
        >
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
        <div style={{ overflowX: 'auto' }}>
          <table className={style.devicesTable}>
            <AP />
            {APs.filter((ap) => {
              if (ap.modelo.toLowerCase().includes(queryAP.toLowerCase())) {
                return ap;
              } else if (
                ap.modulação.toLowerCase().includes(queryAP.toLowerCase())
              ) {
                return ap;
              }
            }).map((ap) => {
              return (
                <tbody>
                  <tr>
                    <td
                      className={
                        ap.status === 'Phaseout'
                          ? style.status_phaseout
                          : style.status_suporte
                      }
                    >
                      {ap.modelo}
                    </td>
                    <td>
                      <span
                        className={
                          ap.modulação === 'Fast' ? style.fast : style.giga
                        }
                      >
                        {ap.modulação}
                      </span>
                    </td>
                    <td>{ap.cobertura}</td>
                    <td>{ap.raio}</td>
                    <td>{ap.usuarioMax}</td>
                    <td>{ap.throughputWireless24}</td>
                    <td
                      className={
                        ap.throughputWireless50 === 'x' ? style.NaoPossui : null
                      }
                    >
                      {ap.throughputWireless50 === 'x'
                        ? null
                        : ap.throughputWireless50}
                    </td>
                    <td>{ap.qtdePortas}</td>
                    <td className={ap.poe === 'x' && style.NaoPossui}>
                      {ap.poe === 'x' ? null : ap.poe}
                    </td>
                    <td>{ap.tensao}</td>
                    <td>
                      <span className={style.tooltip}>
                        {ap.connectiVersion}{' '}
                        {ap.connectiVersion !== 'N/A' && (
                          <i className="fa-regular fa-circle-question"></i>
                        )}
                        {ap.connectiVersion !== 'N/A' && (
                          <span className={style.tooltiptext}>
                            O AP precisa estar com a versão {ap.connectiVersion}{' '}
                            para o connectFi funcionar.
                          </span>
                        )}
                      </span>
                    </td>

                    <td
                      className={
                        ap.handover === 'x' ? style.NaoPossui : style.Possui
                      }
                    ></td>
                    <td
                      className={
                        ap.wisefi === 'x' ? style.NaoPossui : style.Possui
                      }
                    ></td>
                    <td>{ap.potencia2G}</td>
                    <td className={ap.potencia5G === 'x' && style.NaoPossui}>
                      {ap.potencia5G === 'x' ? null : ap.potencia5G}
                    </td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={ap.pagina}
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
