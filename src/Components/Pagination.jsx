import {useState} from "react";
import style from "../css/App.module.css";

export function Paginacao({dados, mapFunction, Tablehead, query}) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [itensPorPagina, setItensPorPagina] = useState(50);

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
    setPaginaAtual(0);
  }

  function compareStatus(a, b) {
    if (a.status === "Suporte" && b.status !== "Suporte") {
      return -1;
    } else if (a.status !== "Suporte" && b.status === "Suporte") {
      return 1;
    } else if (a.status === "Phaseout" && b.status !== "Phaseout") {
      return 1;
    } else if (a.status !== "Phaseout" && b.status === "Phaseout") {
      return -1;
    } else {
      if (a.modelo < b.modelo) {
        return -1;
      } else if (a.modelo > b.modelo) {
        return 1;
      }
      return 0;
    }
  }

  dadosPaginados.sort(compareStatus);

  const dadosFiltrados = dadosPaginados.filter((item) => {
    if (item.modelo.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else if (item.modulação.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return false;
  });

  let conteudo;
  if (dadosFiltrados.length > 0) {
    conteudo = (
      <>
        {Tablehead}
        {dadosFiltrados.map(mapFunction)}
      </>
    );
  } else {
    conteudo = <p>Nenhum equipamento correspondente encontrado.</p>;
  }

  return (
    <>
      <div style={{overflowX: "auto"}}>
        <label htmlFor="itensPorPagina">Itens por página:</label>
        <select id="itensPorPagina" value={itensPorPagina} onChange={handleItensPorPaginaChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option defaultValue="50">50</option>
        </select>
        <table className={style.devicesTable}>{conteudo}</table>
      </div>

      <button className={style.buttonAnterior} onClick={paginaAnterior} disabled={paginaAtual === 0}>
        Anterior
      </button>
      <button className={style.buttonProxima} onClick={proximaPagina} disabled={paginaAtual === paginasTotais - 1}>
        Próxima
      </button>
    </>
  );
}
