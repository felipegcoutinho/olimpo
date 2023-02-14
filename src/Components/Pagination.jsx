import {useState} from "react";
import style from "../../src/App.module.css";

export function Paginacao({dados, mapFunction, Tablehead, query}) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [itensPorPagina, setItensPorPagina] = useState(15);

  const indiceInicial = paginaAtual * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const dadosPaginados = dados.slice(indiceInicial, indiceFinal);

  const paginasTotais = Math.ceil(dados.length / itensPorPagina);

  function paginaAnterior() {
    setPaginaAtual((paginaAtual) => Math.max(0, paginaAtual - 1));
  }

  function proximaPagina() {
    setPaginaAtual((paginaAtual) => Math.min(paginasTotais - 1, paginaAtual + 1));
  }

  function handleItensPorPaginaChange(event) {
    setItensPorPagina(parseInt(event.target.value, 10));
    setPaginaAtual(0); // Volta para a primeira página quando o número de itens por página é alterado
  }

  return (
    <>
      <div style={{overflowX: "auto"}}>
        <label htmlFor="itensPorPagina">Itens por página:</label>
        <select id="itensPorPagina" value={itensPorPagina} onChange={handleItensPorPaginaChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option defaultValue="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <table className={style.devicesTable}>
          {Tablehead}

          {dadosPaginados
            .filter((item) => {
              if (item.modelo.toLowerCase().includes(query.toLowerCase())) {
                return item;
              } else if (item.modulação.toLowerCase().includes(query.toLowerCase())) {
                return item;
              }
            })
            .map(mapFunction)}
        </table>
      </div>

      {/* Renderiza os botões de navegação */}
      <button className={style.buttonAnterior} onClick={paginaAnterior} disabled={paginaAtual === 0}>
        Anterior
      </button>
      <button className={style.buttonProxima} onClick={proximaPagina} disabled={paginaAtual === paginasTotais - 1}>
        Próxima
      </button>
    </>
  );
}
