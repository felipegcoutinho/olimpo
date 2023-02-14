import React from "react";
import style from "../../src/App.module.css";

function TableBar({id, Hide, handleHide, tableName, admin, openModal, newButton, query, handleSearchChange}) {
  return (
    <div className={style.header_box_content}>
      <button id={id} className={Hide ? style.arrowHide : style.arrowShow} onClick={handleHide}>
        <span className={style.title}>{tableName}</span>
      </button>

      {admin && (
        <button className={style.btn_add} onClick={openModal}>
          {newButton}
        </button>
      )}

      <input className={style.searchBarDevices} placeholder="Pesquise por um equipamento" value={query} onChange={handleSearchChange} />
    </div>
  );
}

export default TableBar;
