import React from "react";
import {Button, TextInput} from "flowbite-react";
import {HiChevronDown, HiChevronUp} from "react-icons/hi2";

function TableBar({id, Hide, handleHide, tableName, admin, openModal, newButton, query, handleSearchChange}) {
  return (
    <div className="flex p-2 justify-between ">
      <button id={id} onClick={handleHide}>
        <div className="flex items-center gap-2">
          {Hide ? <HiChevronUp /> : <HiChevronDown />}
          <p className="text-2xl mr-2 font-bold">{tableName}</p>
        </div>
      </button>

      {/* {admin && (
        <Button className="mr-auto bg-green-500 hover:bg-green-700" onClick={openModal}>
          {newButton}
        </Button>
      )}

      <TextInput className="w-60" placeholder="Pesquise por um equipamento" value={query} onChange={handleSearchChange} /> */}
    </div>
  );
}

export default TableBar;
